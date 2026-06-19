import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { WebSocketServer, WebSocket } from "ws";
import nodemailer from "nodemailer";
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PORTFOLIO_SYSTEM_PROMPT = `You are Joseph Ukeje's virtual portfolio assistant. You help visitors learn about Joseph and his work. Be friendly, professional, and concise.

About Joseph:
- Senior Software Engineer based in Nigeria, specializing in both Java and C#/.NET Core development.
- B.Sc. in Software Engineering from Babcock University (GPA: 3.93, graduated Jul 2024)
- Senior Software Engineer at Interswitch (Apr 2025 – Present): C#, .NET Core 8, Java, Spring Boot, ISO 20022/SWIFT, TCP servers, microservices, IAM/LDAP, Oracle, WebLogic, Veracode, Prometheus, Grafana
- Software Engineer at Huawei Technologies (Jun 2024 – Apr 2025): ASP.NET Core Web API, EF Core, ReactJS, Node.js, AWS, RabbitMQ, Vue.js, Jest, Moq, Azure DevOps
- Software Engineer at Vision Forge AI Automations (Jan 2024 – Jun 2024): .NET Core 8, Spring Boot, MassTransit, RabbitMQ, PL/SQL, GraphQL (Hot Chocolate), JUnit, xUnit, Testcontainers
- Software Engineer / Full-Stack Developer Intern at Schlumberger (Jan 2023 – Dec 2023): C#, ASP.NET Core Web API, Express.js, JWT, OAuth 2.0, Twilio, Azure, GCP, PostgreSQL, SQL Server, React Native
- Software Developer Intern at The Intrepid Technologies Chevron (Jan 2022 – Dec 2022): C#, .NET, Dapper, Entity Framework Core, Django, Oracle, PostgreSQL, RPA
- Freelance .NET / C# Developer (Jan 2020 – Dec 2021): C#, ASP.NET Core, EF Core, Azure, Linux
- Skills: C#, Java, .NET Core 8, Entity Framework Core, Dapper, gRPC, MassTransit, Spring Boot, JavaScript, TypeScript, Python, React, Vue.js, Node.js, PostgreSQL, MongoDB, SQL Server, AWS, Azure, GCP, Docker, Kubernetes, Git, xUnit, JUnit
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
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER || "ukejejoseph1@gmail.com",
          pass: process.env.EMAIL_PASS || "htrvaefntulcnygz"
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER || "ukejejoseph1@gmail.com",
        to: process.env.EMAIL_USER || "ukejejoseph1@gmail.com", // send to self
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
