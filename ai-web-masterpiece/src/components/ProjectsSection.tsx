import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronUp, Github, ExternalLink } from "lucide-react";

// Replace local imports with Cloudinary URLs
const IMG_ESTATICO = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935302/estatico_zeiizm.png";
const IMG_ESUMMIT = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935302/Esummit_26_fggori.png";
const IMG_KUMAR = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935301/kumar_power_png_khmpvw.png";
const IMG_VYOMIRA = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935300/Vyomira_azh3oy.png";
const IMG_DENTAL = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935300/dental_clinic_khohzf.png";
const IMG_GREENWRENCH = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935302/Green_Wrench_mxogv2.png";
const IMG_CODEWAVE = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935302/codewave_y0jjh2.png";
const IMG_PAHADICRAFT = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935300/Pahadicraft_png_xi5opv.png";
const IMG_HAYAT = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935299/Hayat_dubai_nkvbi3.png";
const IMG_GORAN = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935300/Goran_website_e5wgl9.png";
const IMG_SKIPIT = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935297/Skipit_cloud_serqjz.png";
const IMG_CLAIM = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935298/Claim_ai_png_t8jyrt.png";
const IMG_LANGCHAIN = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935471/langchain_fdsnbh.png";
const IMG_SELF_ADAPTING = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935471/Self_Adapting_language_Model_by5cmb.jpg";
const IMG_N8N_CALLING = "https://res.cloudinary.com/dinhcaf2c/image/upload/v1766935471/n8n_calling_agent_bapvv5.jpg";
const IMG_VELAR = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780920154/Velar_lukfaq.png";
const IMG_WISA = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780920402/WISA_-_Leagues_of_Legend_fc9u1e.png";
const IMG_NEOREACH = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780920594/NEOREACH_IMG_x63j9h.png";
const IMG_ROXO = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780920939/ROXO_Agency_m7m50q.png";
const IMG_MOQO = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780921405/MOQO_hcaicp.png";
const IMG_NARAYAN = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780921632/Narayan_Kripa_xv7a7v.png";
const IMG_OVERSHOOT = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780921833/Overshoot_img_s18umb.png";
const IMG_GETCRED = "https://res.cloudinary.com/dmhabztbf/image/upload/v1780922037/GetCredentialing_Done_nzpipr.png";

const projects = [
  {
    id: "stablex",
    title: "StableX - Stablecoin Wallet & Exchange",
    category: "Full Stack",
    description: "A stablecoin wallet and exchange platform for transacting stablecoins. Built full-stack features using React.js, Node.js, and C# backend services, integrating gRPC (.NET) blockchain RPC validation, Socket.IO customer support chat, and Solidity smart contracts.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    tech: ["C#", "Java", "gRPC (.NET)", "Solidity", "React.js", "PostgreSQL", "Docker"],
    liveUrl: "https://stable-xv1.vercel.app/",
    githubUrl: "https://github.com/UkejeJoseph/StableXv1"
  },
  {
    id: "mirage-launchpad",
    title: "Mirage Launchpad",
    category: "Web App",
    description: "Solana Raydium Token Launchpad. Creating an SPL Token on the Solana blockchain. This application allows you to easily create a custom token on Solana.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "React", "Web3", "Solana"],
    liveUrl: "https://rusty-tokenlaunchpad-demo.vercel.app/",
    githubUrl: "#"
  },
  {
    id: "nova-bills",
    title: "Nova Bills - Billing Web Application",
    category: "Full Stack",
    description: "A comprehensive billing web application designed for streamlined invoicing and payment management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React.js"],
    liveUrl: "https://nova-bills.vercel.app/",
    githubUrl: "#"
  },
  {
    id: "rivet-ai",
    title: "RivetAI",
    category: "AI Project",
    description: "An AI-powered pre-production SaaS workflow platform designed to streamline script coverage, scheduling, and budgeting. Built responsive ReactJS frontend features, and designed RESTful backend APIs using C#/.NET Core and Flask with MongoDB.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    tech: ["C#", "Java", ".NET Core", "MongoDB", "REST APIs", "OAuth 2.0", "React", "Flask"],
    liveUrl: "https://rivetai.com/",
    githubUrl: "#"
  },
  {
    id: "neurafeed",
    title: "NeuraFeed - AI Customer Insights",
    category: "AI Project",
    description: "AI-powered customer insights software that analyzes feedback and sentiment in real-time using machine learning pipelines and message queuing.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Redis", "RabbitMQ", "Node.js", "AI/ML"],
    liveUrl: "https://neurafeedfinal.vercel.app",
    githubUrl: "https://github.com/UkejeJoseph/Neurafeedfinal"
  },
  {
    id: "trackcel",
    title: "TrackCel",
    category: "Web App",
    description: "An AI job application tracking app that schedules, tracks, and manages your work tasks.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "https://trackcel.app/",
    githubUrl: "#"
  },
  {
    id: "weather-app",
    title: "Smart Weather Analytics Dashboard",
    category: "Full Stack",
    description: "Weather forecasting application with data visualization, historical analysis, and location-based recommendations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "D3.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "https://github.com/UkejeJoseph/WeatherApp-NextJSxTypescript-main"
  },
  {
    id: "oxy-ui",
    title: "Oxy UI",
    category: "Frontend",
    description: "React UI component library with TypeScript support and customizable design tokens.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "TypeScript", "Tailwind CSS", "NPM"],
    liveUrl: "https://oxyui.vercel.app/",
    githubUrl: "https://github.com/UkejeJoseph"
  },
  {
    id: "blog-verse",
    title: "Blog Verse",
    category: "Full Stack",
    description: "Full-featured blogging platform with Appwrite backend, authentication, and dynamic routing.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Appwrite", "Tailwind CSS", "React"],
    liveUrl: "https://blog9.vercel.app/",
    githubUrl: "https://github.com/UkejeJoseph/appwrite-blog"
  },
  {
    id: "free-tools-app",
    title: "Free Tools App",
    category: "Web App",
    description: "Collection of free development tools and utilities for developers and designers.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://freetool.vercel.app/tools",
    githubUrl: "https://github.com/UkejeJoseph"
  },
  {
    id: "trello-clone",
    title: "Trello Clone",
    category: "Web App",
    description: "Project management tool with drag-and-drop boards, real-time collaboration, and task tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "React", "Tailwind CSS", "Drag & Drop"],
    liveUrl: "https://trello-tau-rosy.vercel.app/",
    githubUrl: "https://github.com/UkejeJoseph"
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet & Swap",
    category: "Blockchain",
    description: "A crypto wallet application for basic token swaps built on the blockchain, featuring secure transactions.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Node.js", "Solidity", "Web3.js"],
    liveUrl: "https://stable-xv1.vercel.app/",
    githubUrl: "https://github.com/UkejeJoseph/Crypto-Dashboard"
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support Chatbot",
    category: "AI Project",
    description: "Intelligent chatbot with Natural Language Processing for customer service automation.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "Flask", "NLP", "TensorFlow", "React.js"],
    liveUrl: "https://ai-support-chatbot.vercel.app",
    githubUrl: "https://github.com/UkejeJoseph"
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-commerce Platform",
    category: "Full Stack",
    description: "Complete e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    githubUrl: "https://github.com/UkejeJoseph/ECommerce-NextJS-Sanity-Stripe"
  },
  {
    id: "task-management",
    title: "Team Task Management System",
    category: "Web App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    tech: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Firebase"],
    liveUrl: "https://task-management-system.vercel.app",
    githubUrl: "https://github.com/UkejeJoseph"
  },
  {
    id: "mobile-expense",
    title: "Mobile Expense Tracker",
    category: "Web App",
    description: "Cross-platform mobile app for personal finance management with budget tracking and expense categorization.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    tech: ["React Native", "Firebase", "SQLite", "Redux"],
    liveUrl: "https://mobile-expense-tracker.vercel.app",
    githubUrl: "https://github.com/UkejeJoseph/Expense-Tracker"
  },
  {
    id: "myntra-clone",
    title: "Myntra Clone",
    category: "Full Stack",
    description: "E-commerce platform clone inspired by Myntra, featuring a complete product catalog and shopping cart functionality.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    liveUrl: "https://myntra-clone-liard.vercel.app/",
    githubUrl: "#"
  }
];

const filters = ["All", "Full Stack", "Web App", "AI Project", "Blockchain", "Frontend"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-tertiary">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm text-muted-foreground font-body">Portfolio</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Latest Works
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-body border transition-all duration-200 ${activeFilter === filter
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <article
              key={project.id}
              className="group animate-fade-up rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-muted/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />

                {/* Category Badge */}
                <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-card/90 backdrop-blur-sm text-xs font-body rounded-full border border-border">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-light text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-body">
                    {project.tech[0]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More / Show Less */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group"
            >
              <span className="text-sm text-muted-foreground font-body">
                {showAll ? "Show Less" : "Check out More"}
              </span>
              <span className="inline-flex items-center gap-2">
                {showAll ? (
                  <ChevronUp size={16} className="transition-transform group-hover:-translate-y-1" />
                ) : (
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                )}
                {showAll ? "Collapse" : "View More"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}