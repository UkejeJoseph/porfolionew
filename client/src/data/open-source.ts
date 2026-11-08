export interface PublicProject {
  name: string;
  repo: string;
  category: string;
  stack: string;
  description: string;
  status: string;
  upstream?: string;
  license: string;
}

export const publicProjects: PublicProject[] = [
  {
    name: "SQLDeps",
    repo: "sqldeps",
    category: "Applied AI",
    stack: "Python / LLMs / pandas",
    description:
      "SQL dependency analysis with fixes for qualified table-name exports and empty CSV headers. Includes focused regression tests.",
    status: "Customised upstream copy",
    upstream: "https://github.com/glue-lab/sqldeps",
    license: "MIT",
  },
  {
    name: "LabLens",
    repo: "lablens",
    category: "Applied AI",
    stack: "Python / RAG / SQLite",
    description:
      "A retrieval and SQL assistant. This maintained copy fixes atomic document-cache metadata refresh and tests collision handling.",
    status: "Customised upstream copy",
    upstream: "https://github.com/cmcouto-silva/lablens",
    license: "CC BY-NC 4.0",
  },
  {
    name: "Event-driven Java platform",
    repo: "java-event-driven-platform",
    category: "Java",
    stack: "Java / Spring Boot / PostgreSQL",
    description:
      "Multi-tenant mobility backend with dispatch, payments, ledger and settlement workflows; based on Cab Marketplace.",
    status: "Upstream-based project",
    upstream: "https://github.com/rahilsh/cab",
    license: "Apache 2.0",
  },
  {
    name: "Enterprise Java control plane",
    repo: "enterprise-java-control-plane",
    category: "Java",
    stack: "Java / Redis / RBAC",
    description:
      "Application management, operational visibility and access governance; based on the Aspectow control plane.",
    status: "Upstream-based project",
    upstream: "https://github.com/aspectran/aspectow",
    license: "Apache 2.0",
  },
  {
    name: "Enterprise .NET messaging",
    repo: "enterprise-dotnet-messaging",
    category: ".NET",
    stack: ".NET / CQRS / RabbitMQ",
    description:
      "Command and event dispatch, brokered messaging and inbox/outbox reliability; based on the Chatter library.",
    status: "Upstream-based library",
    upstream: "https://github.com/brenpike/Chatter",
    license: "MIT",
  },
  {
    name: "Blnk ledger",
    repo: "blnk",
    category: "Go",
    stack: "Go / Financial ledger",
    description:
      "A fork of Blnk's financial ledger for exploring transaction recording and financial-core workflows.",
    status: "Fork",
    upstream: "https://github.com/blnkfinance/blnk",
    license: "Apache 2.0",
  },
  {
    name: "Financial reconciliation",
    repo: "financial-reconciliation-go",
    category: "Go",
    stack: "Go / Ledger reconciliation",
    description:
      "A fork of Formance Reconciliation for comparing ledger balances with external cash pools.",
    status: "Fork",
    upstream: "https://github.com/formancehq/reconciliation",
    license: "See repository terms",
  },
  {
    name: "Python knowledge platform",
    repo: "enterprise-python-knowledge-platform",
    category: "Python",
    stack: "Django / React / PostgreSQL",
    description:
      "Revision history, word-level diffs and full-text search in an encyclopedia platform based on Wikiverse.",
    status: "Upstream-based project",
    upstream: "https://github.com/JonasJavier/wikiverse",
    license: "MIT",
  },
  {
    name: "TypeScript microservices",
    repo: "enterprise-microservices-typescript",
    category: "Node / React",
    stack: "Node.js / TypeScript / Docker",
    description:
      "Microservice and infrastructure workspace based on Sprocket, including deployment and operational verification tooling.",
    status: "Upstream-based project",
    upstream: "https://github.com/SprocketBot/sprocket",
    license: "MIT",
  },
  {
    name: "Neurafeed",
    repo: "Neurafeedfinal",
    category: "Node / React",
    stack: "React / Express / TypeScript / PostgreSQL",
    description:
      "Public full-stack application workspace with React interfaces and an Express backend. Uses PostgreSQL rather than MongoDB.",
    status: "Public project",
    license: "MIT declared in package.json",
  },
  {
    name: "Tick Market",
    repo: "tick-market",
    category: "Mobile",
    stack: "Flutter / Node.js / WebSockets",
    description:
      "A public copy of Yashraj Jain's simulated trading dashboard, including order-book synchronisation and recovery tests.",
    status: "Upstream snapshot",
    upstream: "https://github.com/yashrajjain726/tick-market",
    license: "No licence declared upstream",
  },
  {
    name: "HMI Dashboard",
    repo: "hmi-dashboard",
    category: "Mobile",
    stack: "Kotlin / Compose / Flow",
    description:
      "A public copy of Yashraj Jain's Android vehicle dashboard, with simulated signals, stale-data handling and focused tests.",
    status: "Upstream snapshot",
    upstream: "https://github.com/yashrajjain726/hmi-dashboard",
    license: "No licence declared upstream",
  },
];
