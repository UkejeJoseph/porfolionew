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
    role: "Senior Software Engineer (Backend)",
    period: "Apr 2025 - Present",
    description: "Remote. Core banking, payment infrastructure, and distributed systems.",
    fullDescription: "Engineered ISO 20022/SWIFT payment flows across Java/Spring Boot and C#/.NET integration services, owning high-throughput systems from architecture and implementation through observability, incident investigation, and production recovery.",
    achievements: [
      "Built IRIS on Netty TCP with CompletableFuture and Java 21 Virtual Threads, sustaining 5,000+ concurrent connections per node",
      "Owned secured REST and gRPC services for 10+ institutions across 30+ production endpoints",
      "Integrated Kafka, Azure Service Bus, Redis deduplication, circuit breakers, and production observability across distributed services",
      "Delivered payment-risk controls, Open Banking and AML/KYC integrations, immutable audit trails, and an internal LiteLLM AI gateway"
    ],
    tags: ["Java 21", "Spring Boot", "C#/.NET", "Kafka", "Redis", "React"]
  },
  {
    company: "Huawei Technologies",
    role: "Senior Software Engineer",
    period: "Jun 2024 - Apr 2025",
    description: "Enterprise B2B platform, event-driven services, and cloud delivery.",
    fullDescription: "Designed Java/Spring Boot microservices, Spring Data JPA/Hibernate persistence, Kafka pipelines, and React/TypeScript workflows for Huawei Cloud's multi-tenant B2B platform.",
    achievements: [
      "Delivered a partner rewards administration platform end to end across APIs, transactional services, and product workflows",
      "Built Azure DevOps CI/CD, Helm, Terraform, and AWS EKS delivery workflows that reduced deployment time by 25%",
      "Architected a RabbitMQ notification service across 5+ services with failover and dead-letter retries, achieving 99% uptime",
      "Established JUnit, Mockito, WireMock, and Testcontainers standards while mentoring junior engineers"
    ],
    tags: ["Java", "Spring Boot", "React", "Kafka", "RabbitMQ", "AWS EKS"]
  },
  {
    company: "Vision Forge AI Automations",
    role: "Software Engineer",
    period: "Jan 2024 - Jun 2024",
    description: "Remote. API modernisation, automation, and service integration.",
    fullDescription: "Architected Java/Spring Boot and C#/.NET integration services over RabbitMQ, alongside Node.js/TypeScript automation APIs and GraphQL data services consumed by React product workflows.",
    achievements: [
      "Reduced QA data errors by 50% through contract validation and idempotency",
      "Designed GraphQL APIs with DataLoader batching across heterogeneous services",
      "Expanded automated test coverage to 85%+ using JUnit, xUnit, Mockito, Moq, Testcontainers, and WireMock"
    ],
    tags: ["Java", "C#/.NET", "Node.js", "RabbitMQ", "GraphQL", "React"]
  },
  {
    company: "Schlumberger Oil and Gas",
    role: "Software Engineer / Full-Stack Developer",
    period: "Jan 2023 - Dec 2023",
    description: "Lagos. Secure APIs, operational products, and cloud delivery.",
    fullDescription: "Delivered Java/Spring Boot and C#/ASP.NET Core REST APIs with JWT, OAuth 2.0, Twilio 2FA, RBAC, and OWASP-aligned controls, supported by React/TypeScript operational interfaces.",
    achievements: [
      "Implemented secure service boundaries and reusable role-based access controls",
      "Designed PostgreSQL and SQL Server models for high-volume operational reporting",
      "Optimised GCP and Azure delivery pipelines, reducing infrastructure costs by 18%",
      "Led code reviews and architecture discussions around resilience, testability, and maintainability"
    ],
    tags: ["Java", "Spring Boot", "C#", "ASP.NET Core", "React", "PostgreSQL"]
  },
  {
    company: "The Intrepid Technologies Chevron",
    role: "Software Developer",
    period: "Jan 2022 - Dec 2022",
    description: "Lekki. Enterprise applications, data performance, and automation.",
    fullDescription: "Re-engineered Java/Spring Boot and .NET backend services across six enterprise applications, improving API latency, database throughput, batch operations, and production observability.",
    achievements: [
      "Reduced average API response times by 200ms across enterprise services",
      "Improved database throughput by 35% through HikariCP, Dapper/EF Core, and SQL optimisation",
      "Built a Spring Batch purge framework removing 500,000+ expired records daily and RPA analytics reducing reporting cycles by 40%",
      "Raised automated test coverage from 20% to 85% and strengthened Prometheus, Grafana, Splunk, and CloudWatch observability"
    ],
    tags: ["Java", "Spring Boot", ".NET", "Spring Batch", "Oracle", "PostgreSQL"]
  },
  {
    company: "Upwork",
    role: "Software Engineer",
    period: "Jan 2020 - Dec 2021",
    description: "Remote. Multi-stack client delivery and production operations.",
    fullDescription: "Delivered Java/Spring Boot, C#/ASP.NET Core, and Node.js backend applications for international clients, owning data models, REST APIs, React integrations, and cloud deployment pipelines end to end.",
    achievements: [
      "Used Spring WebFlux and Kafka for non-blocking, event-driven processing",
      "Built AWS Lambda and SNS workflows for asynchronous business operations",
      "Managed Linux hosting, deployment, monitoring, incident resolution, and performance optimisation"
    ],
    tags: ["Java", "Node.js", "C#/.NET", "React", "Kafka", "AWS"]
  }
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C#", "TypeScript", "JavaScript", "Python", "SQL", "Solidity"]
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "ASP.NET Core", "NestJS", "React", "Next.js", "JPA/Hibernate", "EF Core"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST", "gRPC", "GraphQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis"]
  },
  {
    title: "Distributed Systems",
    skills: ["Kafka", "RabbitMQ", "Azure Service Bus", "CQRS", "Idempotency", "Concurrency", "Event-Driven Architecture"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Helm", "Jenkins", "GitHub Actions"]
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
              Over 6+ years, I've owned backend and product systems across fintech, payments, enterprise SaaS, oil and gas, and AI automation—from architecture through production operations.
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
