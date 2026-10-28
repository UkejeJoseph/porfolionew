import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    "id": "interswitch",
    "company": "Interswitch Group",
    "role": "Senior Software Engineer — Core Banking & Payments Platform",
    "period": "Apr 2025 - Present",
    "description": "Remote. Core banking, payments, risk and distributed infrastructure.",
    "fullDescription": "Own payment, settlement, audit and risk services from architecture and implementation through testing, deployment and production recovery. Work with Product, QA, DevOps/SRE, Security, Compliance and Operations on service boundaries, reviews and incident runbooks.",
    "achievements": [
      "Architected a **centralised audit service** with **Kafka-backed asynchronous ingestion**, capturing immutable trails for **5–10 million inbound and outbound transactions daily** and user actions so Compliance and Operations could trace financial activity across distributed services.",
      "Built **IRIS, a core-banking payment gateway and inter-bank transfer engine**, with TCP connection management and **gRPC/Protobuf** contracts. Delivered **ISO 20022/SWIFT pacs.008, pacs.002 and pacs.028** flows with canonicalisation, signatures and recovery, reducing failures by **98% in the affected payment flows**.",
      "Implemented **ISO 8583 card-payment message processing** as a separate flow, validating message fields and mapping requests and responses into auditable transaction states with timeout handling and duplicate protection.",
      "Built and owned **PRM, the Payment Risk Management Engine**, evaluating **20+ transaction attributes** with Redis-backed state, idempotent decisions and graceful degradation. Integrated **generative AI into reviewable fraud investigations**, contributing to roughly **35% fewer fraud-related production incidents**.",
      "Decoupled processing across **5+ services using Kafka and Azure Service Bus**, with partition routing, consumer isolation, retries and recovery. Bounded asynchronous pipelines, cancellation and backpressure kept intake responsive at **5,000+ concurrent connections per node**.",
      "Reduced **P99 latency by roughly 30%** through Redis caching, deduplication, distributed locks and TTL policies; tuned database access and connection pools to remove recurring bottlenecks.",
      "Built treasury-liquidity and ledger workflows with **atomic debits and credits** and idempotent recovery; connected **NIBSS, Monnify and Open Banking**. Provider validation, retries and timeouts across **AML/KYC integrations** cut manual compliance review by roughly **40%**; settlement-reconciliation reports surfaced missing records and exceptions for Operations.",
      "Delivered payment validation, **LDAP authentication and SMS notifications** for **10 institutions and 30+ production endpoints**. Protected interbank communication with TLS/mTLS, X.509 and signing; resolved **90% of identified high-severity Veracode findings** in reviewed services and added regression protection.",
      "Owned **AWS ECS/EC2 deployments** and investigated stalled payments across logs, traces, messaging and persistence. Added deterministic regression tests, production-traffic replay and **Prometheus/Grafana** alerts so recurring failures became reproducible cases with corrective fixes.",
      "Contributed to a **LiteLLM AI gateway for 50+ engineers**, with tenant limits and model routing, and an onboarding assistant that reduced onboarding time by roughly **25%**. Built a **Claude Code/Codex workflow** with reusable skills, project context, TDD and mutation testing; verified generated changes through review, security checks and runtime evidence."
    ],
    "tags": [
      "Java",
      "C#/.NET",
      "Python",
      "Kafka",
      "Azure Service Bus",
      "Redis",
      "gRPC",
      "PostgreSQL",
      "AWS ECS/EC2",
      "Azure",
      "Kubernetes",
      "LiteLLM",
      "Azure OpenAI",
      "OpenTelemetry",
      "LGTM (Loki, Grafana, Tempo, Mimir)",
      "SonarQube",
      "Veracode"
    ]
  },
  {
    "id": "huawei",
    "company": "Huawei Technologies",
    "role": "Senior Software Engineer — Partner & Enterprise B2B Platform",
    "period": "Jun 2024 - Apr 2025",
    "description": "Remote. Multi-tenant B2B services, partner workflows and cloud delivery.",
    "fullDescription": "Owned backend delivery for a multi-tenant enterprise platform, from service design and secure APIs through automated testing, deployment and production support. Helped engineers improve service boundaries and release readiness through design reviews, pairing and mentoring.",
    "achievements": [
      "Delivered a **partner rewards administration platform** from requirements through release, with transactional APIs, asynchronous provisioning, tenant isolation and auditable access controls; supported rollout across **5 African markets: Nigeria, Ghana, Kenya, Cameroon and South Africa**.",
      "Moved **email, SMS and push delivery** off synchronous request paths through a shared **RabbitMQ notification service across 5+ services**. Idempotent consumers, failover and dead-letter retries isolated delivery failures from business operations and sustained **99% uptime**.",
      "Led migration of **250,000+ live Redis keys** to **Amazon ElastiCache Serverless for Valkey**. Used redis-shake for live replication and synchronised outstanding changes before cutover, preserving sessions with **zero user logouts and zero downtime**.",
      "Standardised **Azure DevOps, Helm and Terraform** delivery with automated integration checks and release quality gates, achieving **25% shorter deployments**, a **95% bug-free release rate** and **20% faster delivery**."
    ],
    "tags": [
      "Java",
      "C#/.NET",
      "Kafka",
      "RabbitMQ",
      "Redis",
      "AWS",
      "Azure DevOps",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Testcontainers"
    ]
  },
  {
    "id": "vision-forge",
    "company": "Vision Forge AI Automations",
    "role": "Software Engineer (Contract) — AI Workflow & Integration Platforms",
    "period": "Jan 2024 - Jun 2024",
    "description": "Remote, Nigeria. Approval workflows, automation and service integration.",
    "fullDescription": "Built integration services and operational workflows, translating business approval rules into explicit routing, validated service contracts and observable processing states.",
    "achievements": [
      "Built the **Intertrade approval workflow engine**, automating multi-step sign-off and approval routing. Connected **5 distributed services through RabbitMQ** with validation and idempotency, reducing **QA data errors by 50%**.",
      "Moved long-running integrations into **background workers** with bounded producer/consumer pipelines, cancellation and resilient outbound calls, reducing **average response time by 15%**.",
      "Designed **GraphQL/Apollo contracts with DataLoader batching** across heterogeneous service data sources, giving operational workflows a consistent integration surface.",
      "Secured multi-tenant workflows with **OAuth 2.0/JWT and RBAC** and worked with QA to expand automated regression protection to **85%+ coverage** using containerised integration tests and provider mocks."
    ],
    "tags": [
      "Java",
      "C#/.NET",
      "Node.js",
      "RabbitMQ",
      "GraphQL",
      "Apollo",
      "PostgreSQL",
      "OAuth 2.0",
      "Testcontainers",
      "WireMock"
    ]
  },
  {
    "id": "schlumberger",
    "company": "Schlumberger (SLB) Oil & Gas Servicing Limited",
    "role": "Software Engineer — Enterprise Applications & Integrations",
    "period": "Jan 2023 - Dec 2023",
    "description": "Lagos, Nigeria. Wellsite data, operational APIs and cloud services.",
    "fullDescription": "Delivered operational services with application users, QA, infrastructure teams and external providers, carrying changes through acceptance testing, deployment and production stabilisation.",
    "achievements": [
      "Built a **wellsite-data ingestion service using Kafka and PostgreSQL**, validating equipment events and handling duplicate, delayed and out-of-order messages. Retries, replay and backpressure kept downstream processing recoverable during connectivity interruptions.",
      "Delivered **REST APIs and PostgreSQL/SQL Server models** for operational workflows, with request validation, rate limiting and resilient outbound integrations; protected sensitive operations with **OAuth/OIDC, JWT, RBAC and Twilio two-factor authentication**.",
      "Architected **Azure/GCP delivery pipelines** and right-sized workloads, reducing **cloud costs by 18%**.",
      "Reviewed architecture and production changes with users, QA and infrastructure teams; investigated API, persistence and provider failures, documented corrective actions and supported releases through stabilisation."
    ],
    "tags": [
      "Java",
      "C#/.NET",
      "Kafka",
      "PostgreSQL",
      "SQL Server",
      "Azure",
      "GCP",
      "OAuth 2.0",
      "Twilio"
    ]
  },
  {
    "id": "intrepid",
    "company": "The Intrepid Technologies (Chevron)",
    "role": "Software Engineer — Enterprise Applications & Automation",
    "period": "Jan 2022 - Dec 2022",
    "description": "Lekki, Nigeria. Enterprise services, data performance and automation.",
    "fullDescription": "Improved enterprise services, batch processing and operational reporting, working with Product, QA and DevOps to turn production defects into repeatable tests and preventive improvements.",
    "achievements": [
      "Removed API and database bottlenecks across **3 enterprise services** through query-plan analysis, indexing and connection pooling, reducing **average response time by 200ms** and increasing **database throughput by 35%**.",
      "Reworked **L1/L2 caching, Redis pub/sub and gRPC communication**, consolidating large entities and tuning data-access paths to reduce infrastructure and database costs while preserving production performance.",
      "Enhanced batch jobs with execution metrics and automated purging of **500,000+ expired records daily**; automated operational reporting to reduce **reporting-cycle time by 40%**.",
      "Raised automated coverage from **20% to 85%** through TDD/BDD, containerised integration tests and regression cases. Used **Prometheus, Grafana, Splunk and CloudWatch** for incident investigation, SLA monitoring and corrective actions."
    ],
    "tags": [
      "Java",
      "C#/.NET",
      "Oracle",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "AWS CloudWatch",
      "Prometheus",
      "Grafana",
      "Splunk",
      "Testcontainers"
    ]
  },
  {
    "id": "upwork",
    "company": "Upwork",
    "role": "Software Engineer (Contract) — Backend Services & Client Integrations",
    "period": "Jan 2020 - Dec 2021",
    "description": "Remote. Client integrations, asynchronous services and production operations.",
    "fullDescription": "Owned backend services for international clients from codebase discovery and requirements through implementation, testing, deployment and production handover.",
    "achievements": [
      "Designed **versioned REST APIs and third-party integrations** with explicit timeouts, idempotent handlers, connection pooling and structured logs; documented contracts and validated failure paths with client Product, QA and Operations teams.",
      "Kept external work off customer-facing request paths using **asynchronous processing, AWS Lambda, Amazon SNS and SQS**. Published account-lifecycle events for retryable notifications and background work without blocking core operations.",
      "Owned **AWS deployment pipelines and Linux application environments**, including release verification, monitoring, incident investigation and operational handover, so clients could maintain and troubleshoot the services after delivery."
    ],
    "tags": [
      "Java",
      "C#/.NET",
      "Node.js",
      "Kafka",
      "AWS",
      "Lambda",
      "SNS",
      "SQS",
      "Linux",
      "REST"
    ]
  }
];

function AchievementText({ text }: { text: string }) {
  return <>{text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
      : part
  )}</>;
}

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
              Across 7 years, I've owned backend and product systems across fintech, payments, enterprise SaaS, oil and gas, and AI automation—from architecture through production operations.
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
        <Accordion type="single" collapsible defaultValue="exp-0" className="mb-20">
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
                  <div className="lg:col-span-8">
                    <p className="text-sm text-muted-foreground font-body flex items-center gap-2">
                      <span>{exp.description}</span>
                    </p>
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
                          <span className="min-w-0"><AchievementText text={achievement} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="border-t border-border pt-4 text-xs text-muted-foreground leading-relaxed" data-testid={`tech-stack-${exp.id}`}>
                    <span className="font-medium text-foreground">Tech stack:</span>{" "}{exp.tags.join(" · ")}
                  </p>
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
