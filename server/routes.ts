import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { WebSocketServer, WebSocket } from "ws";
import nodemailer from "nodemailer";
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PORTFOLIO_SYSTEM_PROMPT = `You are Joseph Ukeje's virtual portfolio assistant. You help visitors learn about Joseph and his work. Be friendly, professional, and concise.

About Joseph:
- Senior Software Engineer with 6+ years of experience building distributed fintech, payment, enterprise, and AI-enabled systems.
- B.Sc. in Software Engineering from Babcock University (GPA: 4.10).
- Senior Software Engineer at Interswitch (Apr 2025 - Present): Java 21/8, Spring Boot, C#/.NET, React/TypeScript, Netty, gRPC, ISO 20022/SWIFT, Kafka, Redis, PostgreSQL, AWS, Azure, Docker, and Kubernetes.
- At Interswitch he has built core-banking payment services, multi-tenant APIs, Open Banking and AML/KYC integrations, immutable audit trails, event-driven pipelines, risk controls, and production observability for Tier-1 workloads.
- Senior Software Engineer at Huawei Technologies (Jun 2024 - Apr 2025): Java/Spring Boot microservices, React/TypeScript, Kafka, RabbitMQ, AWS EKS, Helm, Terraform, CI/CD, automated testing, and engineering mentorship.
- Software Engineer at Vision Forge AI Automations (Jan 2024 - Jun 2024): Java/Spring Boot, C#/.NET, Node.js/TypeScript, RabbitMQ, GraphQL, React, and automated testing.
- Software Engineer at Schlumberger (Jan 2023 - Dec 2023): Java/Spring Boot, C#/ASP.NET Core, React/TypeScript, OAuth 2.0, RBAC, PostgreSQL, SQL Server, Azure, and GCP.
- Software Engineer at The Intrepid Technologies (Chevron) (Jan 2022 - Dec 2022): Java/Spring Boot, .NET, Spring Batch, Oracle/PostgreSQL, observability, RPA, and performance optimisation.
- Software Engineer through Upwork (Jan 2020 - Dec 2021): Java/Spring Boot, C#/ASP.NET Core, Node.js, React, event-driven processing, AWS Lambda/SNS/SQS, and Linux operations.
- Core skills: Java, C#, JavaScript, TypeScript, Python, Spring Boot, ASP.NET Core, Node.js, NestJS, React, PostgreSQL, Kafka, RabbitMQ, Redis, AWS, Azure, Docker, Kubernetes, Terraform, and automated testing.
- Contact: ukejejoseph1@gmail.com | Phone: 07087232777
- Available for work

If asked about things unrelated to Joseph or software engineering, politely redirect the conversation. Keep answers brief (2-3 sentences) unless more detail is requested.`;

// Basic rate limiter: 20 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // --- AI Chat Endpoint ---
  app.post("/api/chat", async (req, res) => {
    const ip = req.ip || req.socket.remoteAddress || "unknown";
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: "Too many requests. Please wait a moment." });
    }

    const { messages } = req.body;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return res.status(500).json({ error: "AI service is not configured." });
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      // Build conversation history for Gemini
      const chatHistory = messages.slice(0, -1).map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      const chat = model.startChat({
        history: chatHistory,
        systemInstruction: PORTFOLIO_SYSTEM_PROMPT,
      });

      const lastMessage = messages[messages.length - 1];
      const result = await chat.sendMessage(lastMessage.content);
      const responseText = result.response.text();

      res.json({ response: responseText });
    } catch (error: any) {
      console.error("Gemini API error:", error?.message || error);
      res.status(500).json({ error: "Failed to get AI response. Please try again." });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("EMAIL_USER and EMAIL_PASS must be configured");
        return res.status(500).json({ error: "Email service is not configured." });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // send to self
        replyTo: email,
        subject: `New Contact Form Msg: ${subject || "No Subject"} - from ${name}`,
        text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p>You received a new message from your portfolio contact form:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  const httpServer = createServer(app);

  const wss = new WebSocketServer({ server: httpServer, path: "/ws" });
  let visitorCount = 0;

  function broadcastVisitorCount() {
    const payload = JSON.stringify({ type: "visitor_count", count: visitorCount });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload);
      }
    });
  }

  wss.on("connection", (ws) => {
    visitorCount++;
    broadcastVisitorCount();

    ws.on("close", () => {
      visitorCount = Math.max(0, visitorCount - 1);
      broadcastVisitorCount();
    });
  });

  return httpServer;
}
