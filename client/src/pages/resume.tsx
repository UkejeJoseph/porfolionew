import { skills } from "@/data/skills";
import SkillIcon from "@/components/skill-icon";
import LiveVisitors from "@/components/ui/live-visitors";

const experience = [
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
              href="/Joseph_Ukeje_Senior_Software_Engineer_Portfolio_Resume_V1.pdf"
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
            Senior Software Engineer with 7 years delivering transaction-heavy systems
            across fintech, payments, enterprise SaaS, and AI automation. I design distributed,
            event-driven systems and own services from architecture and implementation through
            testing, cloud delivery, observability, incident investigation and continuous improvement.
          </p>
        </section>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="border-l-2 border-primary pl-6" data-testid="education-babcock">
            <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
            <p className="text-primary mb-2">Babcock University, Ogun State, Nigeria (GPA: 4.10)</p>
            <p className="text-muted-foreground">Relevant Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Combinatorics, Machine Learning</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <div className="mb-7">
            <h3 className="text-2xl font-semibold mb-3">Experience</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Distributed systems, event-driven infrastructure and AI integration,
              with ownership from technical design through production operations.
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{entry.fullDescription}</p>
                <ul className="text-muted-foreground space-y-2.5 text-sm leading-relaxed">
                  {entry.achievements.map((achievement, index) => (
                    <li key={index} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span><AchievementText text={achievement} /></span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-foreground/10 mt-4 pt-3 text-xs text-muted-foreground leading-relaxed" data-testid={`tech-stack-${entry.id}`}>
                  <span className="font-medium text-foreground">Tech stack:</span>{" "}{entry.tags.join(" · ")}
                </p>
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
