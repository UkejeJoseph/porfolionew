import { skills } from "@/data/skills";
import SkillIcon from "@/components/skill-icon";
import LiveVisitors from "@/components/ui/live-visitors";

type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: Array<{ lead: string; detail: string }>;
};

const experience: ExperienceEntry[] = [
  {
    id: "interswitch",
    role: "Senior Software Engineer (Backend)",
    company: "Interswitch Group · Remote",
    period: "Apr 2025 — Present",
    bullets: [
      {
        lead: "Payments & Core Banking",
        detail: "Engineered ISO 20022/SWIFT payment flows for pacs.008, pacs.002, and pacs.028 across Java/Spring Boot and C#/.NET integration services, eliminating 100% of production payment failures at Tier-1 bank transaction volumes.",
      },
      {
        lead: "Concurrency & Performance",
        detail: "Built IRIS gateway services on Netty TCP and orchestrated connection state with CompletableFuture and Java 21 Virtual Threads, sustaining 5,000+ concurrent connections per node and 10,000+ concurrent threads.",
      },
      {
        lead: "Distributed Product Delivery",
        detail: "Owned secured REST and gRPC services for 10+ institutions across 30+ production endpoints, alongside React/TypeScript operations dashboards with RBAC and searchable transaction trails.",
      },
      {
        lead: "Event-Driven Reliability",
        detail: "Integrated Kafka and Azure Service Bus across 5+ services; introduced Redis caching, payment deduplication, stress testing through production-traffic replay, circuit breakers, and observability that helped reduce P99 latency by roughly 30%.",
      },
      {
        lead: "Risk, Compliance & AI",
        detail: "Built the PRM payment-risk framework, Open Banking and AML/KYC integrations, immutable audit services, and an internal LiteLLM AI gateway used by 50+ engineers while mentoring engineers and leading architecture reviews.",
      },
    ],
  },
  {
    id: "huawei",
    role: "Senior Software Engineer",
    company: "Huawei Technologies Nigeria",
    period: "Jun 2024 — Apr 2025",
    bullets: [
      {
        lead: "Enterprise Platform",
        detail: "Designed Java/Spring Boot microservices, Spring Data JPA/Hibernate persistence, Kafka ETL pipelines, and asynchronous provisioning workflows for Huawei Cloud's multi-tenant B2B platform.",
      },
      {
        lead: "Full-Stack Delivery",
        detail: "Delivered a partner rewards administration platform end to end through Spring Boot APIs and React/TypeScript/Redux workflows.",
      },
      {
        lead: "Messaging & Availability",
        detail: "Architected a RabbitMQ notification service across 5+ services with broker replicas, automatic failover, and dead-letter retries, achieving 99% uptime.",
      },
      {
        lead: "Delivery Leadership",
        detail: "Built Azure DevOps CI/CD, Helm, Terraform, and AWS EKS delivery workflows that reduced deployment time by 25%; established JUnit, Mockito, WireMock, and Testcontainers standards and mentored junior engineers.",
      },
    ],
  },
  {
    id: "vision-forge",
    role: "Software Engineer",
    company: "Vision Forge AI Automations · Remote",
    period: "Jan 2024 — Jun 2024",
    bullets: [
      {
        lead: "Service Integration",
        detail: "Architected Java/Spring Boot and C#/.NET integration services over RabbitMQ, reducing QA data errors by 50% through contract validation and idempotency.",
      },
      {
        lead: "Node.js Automation",
        detail: "Built Node.js/TypeScript APIs for internal automation workflows and reliable asynchronous integrations consumed by operational tools.",
      },
      {
        lead: "GraphQL & Frontend",
        detail: "Designed GraphQL APIs with DataLoader batching for React/TypeScript dashboards querying heterogeneous service data.",
      },
      {
        lead: "Testing",
        detail: "Expanded JUnit, xUnit, Mockito, Moq, Testcontainers, and WireMock coverage to 85%+, reducing regression defects across services.",
      },
    ],
  },
  {
    id: "schlumberger",
    role: "Software Engineer / Full-Stack Developer",
    company: "Schlumberger (SLB) Oil & Gas Servicing Limited · Lagos",
    period: "Jan 2023 — Dec 2023",
    bullets: [
      {
        lead: "Secure APIs",
        detail: "Delivered Java/Spring Boot and C#/ASP.NET Core REST APIs with JWT, OAuth 2.0, Twilio 2FA, Spring Security RBAC, and OWASP-aligned controls.",
      },
      {
        lead: "Product Interfaces",
        detail: "Built React/TypeScript operational interfaces with reusable components, Redux state management, resilient error handling, and secure API integration.",
      },
      {
        lead: "Data & Cloud",
        detail: "Designed PostgreSQL and SQL Server models for high-volume reporting and optimised GCP and Azure delivery pipelines, reducing infrastructure costs by 18%.",
      },
      {
        lead: "Engineering Standards",
        detail: "Led code reviews and architecture discussions covering graceful degradation, testability, maintainability, and architecture decision records.",
      },
    ],
  },
  {
    id: "intrepid",
    role: "Software Engineer",
    company: "The Intrepid Technologies (Chevron) · Lekki",
    period: "Jan 2022 — Dec 2022",
    bullets: [
      {
        lead: "Enterprise Applications",
        detail: "Re-engineered Java/Spring Boot and .NET backend services across six enterprise applications, reducing average API response times by 200ms.",
      },
      {
        lead: "Data Performance",
        detail: "Introduced HikariCP, Dapper/EF Core, and query optimisation across Oracle, PostgreSQL, and SQL Server, improving database throughput by 35%.",
      },
      {
        lead: "Batch & Automation",
        detail: "Enhanced Spring Batch jobs and built an automated purge framework removing 500,000+ expired records daily; delivered RPA analytics that reduced reporting cycles by 40%.",
      },
      {
        lead: "Reliability & Quality",
        detail: "Improved observability with Prometheus, Grafana, Splunk, and CloudWatch and increased test coverage from 20% to 85% through JUnit, Mockito, and Testcontainers.",
      },
    ],
  },
  {
    id: "upwork",
    role: "Software Engineer",
    company: "Upwork · Remote",
    period: "Jan 2020 — Dec 2021",
    bullets: [
      {
        lead: "Multi-Stack Delivery",
        detail: "Delivered Java/Spring Boot, C#/ASP.NET Core, and Node.js backend applications for international clients, owning data models, REST APIs, React integrations, and cloud deployment pipelines end to end.",
      },
      {
        lead: "Asynchronous Systems",
        detail: "Used Spring WebFlux, Kafka, AWS Lambda, SNS, and SQS for non-blocking processing and reliable event-driven communication.",
      },
      {
        lead: "Production Operations",
        detail: "Managed Linux hosting, deployment, monitoring, incident resolution, and performance optimisation across client projects.",
      },
    ],
  },
];

export default function Resume() {
  const skillsByCategory = {
    languages: skills.filter(skill => skill.category === 'languages'),
    frameworks: skills.filter(skill => skill.category === 'frameworks'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Resume</h2>
          <div className="flex items-center gap-3">
            <a
              href="/resume_joseph_ukeje.pdf"
              download
              data-testid="download-resume-btn"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            <LiveVisitors />
          </div>
        </div>

        <section className="mb-12 border border-foreground/10 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Senior Software Engineer with 6+ years delivering transaction-heavy systems
            across fintech, payments, enterprise SaaS, and AI automation. I build with
            Java/Spring Boot, C#/.NET, Node.js/TypeScript, and React, and own systems from
            architecture and implementation through testing, cloud delivery, observability,
            incident investigation, and continuous improvement.
          </p>
        </section>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="border-l-2 border-primary pl-6" data-testid="education-babcock">
            <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
            <p className="text-primary mb-2">Babcock University, Ogun State, Nigeria (GPA: 4.10/5.00)</p>
            <p className="text-muted-foreground">Relevant Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Combinatorics, Machine Learning</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold mb-3">Experience</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Multi-stack experience spanning Java/Spring Boot, C#/.NET, Node.js/TypeScript,
              React, distributed systems, event-driven infrastructure, cloud delivery, and
              production ownership.
            </p>
          </div>

          <div className="space-y-9">
            {experience.map((entry) => (
              <article
                key={entry.id}
                className="border-l-2 border-primary pl-6"
                data-testid={`experience-${entry.id}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h4 className="text-xl font-semibold">{entry.role}</h4>
                  <span className="text-xs text-muted-foreground">{entry.period}</span>
                </div>
                <p className="text-primary mb-3">{entry.company}</p>
                <ul className="text-muted-foreground space-y-2.5 text-sm leading-relaxed">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet.lead} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>
                        <strong className="text-foreground font-medium">{bullet.lead}:</strong>{" "}
                        {bullet.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Languages</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {skillsByCategory.languages.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Frameworks & Libraries</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skillsByCategory.frameworks.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Backend & Databases</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skillsByCategory.backend.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tools & DevOps</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skillsByCategory.tools.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
