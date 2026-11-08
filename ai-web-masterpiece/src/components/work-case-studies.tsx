import { Link } from "@/lib/portfolio-router";
import { ArrowUpRight } from "lucide-react";

const studies = [
  {
    id: "audit-service",
    number: "01",
    area: "CORE BANKING / TRACEABILITY",
    title: "A financial event should leave a clear trail.",
    project: "Centralised Audit Service",
    summary:
      "Audit infrastructure for transaction investigations, operational visibility and regulatory traceability.",
    stack: "Event-driven services · Kafka · Immutable records · Observability",
    problem:
      "Payment investigations need a dependable record of what happened across services. A missing or ambiguous event makes it harder to distinguish an incomplete flow from an incorrect one.",
    approach:
      "Separate event capture from downstream processing, preserve operation identities, and instrument ingestion and processing boundaries. Explicit retry and failure states make the service easier to operate and investigate.",
    ownership:
      "Technical design, implementation, testing, delivery and production support for the audit service.",
    boundary: "Client system. Source and operational records are proprietary.",
  },
  {
    id: "iris-case-study",
    number: "02",
    area: "PAYMENTS / SYSTEMS INTEGRATION",
    title: "Keep the payment recoverable.",
    project: "IRIS — Core Banking Payment Gateway",
    summary:
      "Inter-bank payment integration spanning message validation, signatures, transport connections and uncertain outcomes.",
    stack: "Java · Netty · ISO 20022 / SWIFT · gRPC · Kafka",
    problem:
      "A dropped connection or delayed acknowledgement must not leave a money-moving operation without an understandable state or recovery path.",
    approach:
      "Treat message validation, transport delivery and business completion as distinct boundaries. Preserve stable references, check signatures, handle duplicates and test malformed, delayed and failed-message paths.",
    ownership:
      "Gateway implementation, integration contracts, failure handling and deterministic regression checks within the client platform.",
    boundary:
      "Proprietary platform work. Related public repositories are not the IRIS source code.",
  },
  {
    id: "applied-ai-case-study",
    number: "03",
    area: "APPLIED AI / RETRIEVAL",
    title: "Useful answers need trustworthy tools.",
    project: "Retrieval & SQL Assistant",
    summary:
      "A client-facing natural-language database interface with Slack access, retrieval and typed Python service contracts.",
    stack:
      "Python · FastAPI · Pydantic · LangChain / LangGraph · PostgreSQL / pgvector",
    problem:
      "A natural-language interface needs to return useful information without bypassing the permissions and reliability controls of the underlying application.",
    approach:
      "Separate orchestration from permitted tool operations. Validate request and result schemas, preserve source context, trace retrieval and generation, and evaluate latency, quality and failure behaviour together.",
    ownership:
      "Client delivery across backend services, agentic retrieval workflows, integration and observability.",
    boundary:
      "Client implementation is private. LabLens and SQLDeps are separately attributed public adaptations.",
  },
];

export default function WorkCaseStudies() {
  return (
    <section className="mb-16" aria-label="Selected work case studies">
      <p className="text-sm text-muted-foreground leading-7 max-w-2xl mb-8">
        Selected work across payments, core banking and applied AI. The problem,
        my contribution, and the engineering decisions behind the
        implementation.
      </p>
      <div className="grid gap-6">
        {studies.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="border border-foreground/15 rounded-2xl p-6 md:p-9"
          >
            <div className="grid md:grid-cols-[.9fr_1.1fr] gap-8">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-5">
                  {s.number} / {s.area}
                </p>
                <h3 className="text-2xl md:text-3xl leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-xs font-medium mb-3">{s.project}</p>
                <p className="text-sm text-muted-foreground leading-7">
                  {s.summary}
                </p>
                <p className="font-mono text-[10px] leading-6 mt-5 text-muted-foreground">
                  {s.stack}
                </p>
              </div>
              <div className="border-l border-foreground/10 pl-6">
                <p className="font-mono text-[10px] tracking-widest mb-3">
                  THE CHALLENGE
                </p>
                <p className="text-sm text-muted-foreground leading-7 mb-5">
                  {s.problem}
                </p>
                <p className="font-mono text-[10px] tracking-widest mb-3">
                  MY CONTRIBUTION
                </p>
                <p className="text-sm text-muted-foreground leading-7">
                  {s.ownership}
                </p>
                <details className="mt-5 border-t border-foreground/10 pt-4">
                  <summary className="text-xs flex justify-between items-center cursor-pointer">
                    Engineering decisions <span>+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-7 mt-4">
                    {s.approach}
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-6 mt-4">
                    {s.boundary}
                  </p>
                </details>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 mt-7">
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 text-xs underline underline-offset-4"
        >
          Try the engineering lab <ArrowUpRight size={14} />
        </Link>
        <Link
          href="/open-source"
          className="inline-flex items-center gap-2 text-xs underline underline-offset-4"
        >
          Explore public projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  );
}
