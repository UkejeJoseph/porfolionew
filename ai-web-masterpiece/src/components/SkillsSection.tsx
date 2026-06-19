import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    company: "Interswitch Group",
    role: "Senior Software Engineer",
    period: "Apr 2025 - Present",
    description: "Lagos, Nigeria / Germany. Core Payment Integration & Microservices.",
    fullDescription: "Designed and built a complete ISO 20022 integration layer (pacs.008, pacs.002, pacs.028) with XML canonicalization, eliminating 100% of payment failures for Tier-1 banks. Engineered custom TCP servers and Spring Boot microservices, improving ERP operations efficiency by 70%.",
    achievements: [
      "Engineered a custom .NET Core 8 TCP server and scaled Spring Boot microservices",
      "Architected IAM systems with LDAP and OAuth 2.0 / JWT",
      "Optimized performance using Redis caching, Prometheus/Grafana, and Serilog",
      "Developed an AI customer support chatbot, reducing ticket volume by 40%"
    ],
    tags: ["C# .NET Core", "Java Spring Boot", "Microservices", "React", "Solidity", "TypeScript"]
  },
  {
    company: "Huawei Technologies",
    role: "Software Engineer",
    period: "Jun 2024 - Apr 2025",
    description: "Nigeria. API, Microservices and CI/CD.",
    fullDescription: "Architected ASP.NET Core Web API microservices with EF Core for multi-tenant data management. Redesigned and rebuilt internal Tech Community application, delivering a 30% increase in user satisfaction.",
    achievements: [
      "Designed a Cash Catalogue rewards management feature using Vue.js and C#",
      "Engineered Azure DevOps and Jenkins CI/CD pipelines, reducing deployment times by 25%",
      "Architected an async RabbitMQ notification pipeline achieving 99.9% uptime",
      "Established comprehensive testing strategies using xUnit, Moq, and Jest"
    ],
    tags: ["ASP.NET Core", "Vue.js", "CI/CD", "RabbitMQ", "React", "C#", "Java", "TypeScript"]
  },
  {
    company: "Vision Forge AI Automations",
    role: "Software Engineer",
    period: "Jan 2024 - Jun 2024",
    description: "Remote. API Modernization & Integration.",
    fullDescription: "Developed a Spring Boot and .NET Core 8 microservice integration library using MassTransit over RabbitMQ. Architected a GraphQL API layer in .NET Core with DataLoader batching to optimize frontend dashboard load performance.",
    achievements: [
      "Reduced QA-reported data errors by 50% via microservice integration",
      "Refactored legacy Java, C#, and PL/SQL codebases cutting API response times by 15%",
      "Increased code reliability by expanding test coverage to over 85%"
    ],
    tags: ["Java", "GraphQL", "MassTransit", "C#", "React", "TypeScript", "Solidity"]
  },
  {
    company: "Schlumberger Oil and Gas",
    role: "Software Engineer / Full-Stack Developer",
    period: "Jan 2023 - Dec 2023",
    description: "Lagos, Nigeria. Cloud Infrastructure & Security.",
    fullDescription: "Designed and delivered C# / ASP.NET Core and Express.js RESTful Web APIs, integrating JWT + OAuth 2.0 authentication, automatic token refresh, and Twilio 2FA aligned with OWASP Top 10.",
    achievements: [
      "Implemented ASP.NET Core Identity with custom middleware",
      "Orchestrated cloud infrastructure on Azure and GCP",
      "Built C#-based Azure DevOps CI/CD pipelines reducing costs by 18%",
      "Developed 7 cross-platform React Native mobile app screens"
    ],
    tags: ["Azure", "ASP.NET Core", "React Native", "Java", "C#", "TypeScript", "Solidity"]
  },
  {
    company: "The Intrepid Technologies Chevron",
    role: "Software Developer",
    period: "Jan 2022 - Dec 2022",
    description: "Lekki, Nigeria. Web Development.",
    fullDescription: "Built responsive frontend applications and internal tooling to support enterprise operations and streamline workflows.",
    achievements: [
      "Developed interactive dashboards using modern web technologies",
      "Collaborated with cross-functional teams to deliver enterprise features",
      "Improved overall frontend performance and user experience"
    ],
    tags: ["React", "JavaScript", "Frontend", "C#", "Java", "TypeScript", "Solidity"]
  }
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "Java", "TypeScript", "JavaScript", "Solidity", "Python", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    title: "Backend",
    skills: [".NET Core", "Spring Boot", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    title: "Blockchain & AI",
    skills: ["Solidity", "Web3.js", "OpenAI API", "LangChain", "TensorFlow"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Azure", "CI/CD", "Git", "RabbitMQ"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm text-muted-foreground font-body">Experiences</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Explore My Development Journey
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-base text-muted-foreground font-body leading-relaxed max-w-md lg:ml-auto mb-6">
              Over the past 2+ years, I've had the opportunity to work on a wide range of projects, collaborating with diverse teams and clients to bring creative visions to life.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-animation"
            >
              Book A Call
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Experiences List */}
        <Accordion type="single" collapsible className="mb-20">
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`exp-${index}`}
              className="border-t border-border last:border-b hover:bg-tertiary/50 transition-colors -mx-6 px-6 lg:-mx-20 lg:px-20"
            >
              <AccordionTrigger className="py-8 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                <div className="grid lg:grid-cols-12 gap-4 items-center w-full text-left">
                  {/* Company & Period */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-lg font-light text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      • {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm text-muted-foreground font-body flex items-center gap-2">
                      <span>{exp.description}</span>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-foreground text-sm hover:underline"
                        >
                          {new URL(exp.website).hostname.replace("www.", "")}
                        </a>
                      )}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="lg:col-span-3 flex flex-wrap justify-end gap-2 items-center">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap px-3 py-1.5 text-xs font-body border border-border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <ChevronDown className="chevron h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ml-2" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="lg:pl-[calc(33.333%+1rem)] space-y-4">
                  <div>
                    <h4 className="font-display text-base font-medium text-foreground mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {exp.fullDescription}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Skills Grid */}
        <div>
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-sm text-muted-foreground font-body">Tech Stack</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-display text-base font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-tertiary text-xs text-muted-foreground rounded-full font-body hover:text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}