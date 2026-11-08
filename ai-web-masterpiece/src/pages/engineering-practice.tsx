import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, RotateCcw, Check, X } from "lucide-react";
import { Link } from "@/lib/portfolio-router";
import "@/styles/project-studies.css";

const models = [
  {
    name: "Payments",
    title: "A payment is a workflow, not one HTTP call.",
    summary:
      "Separate request validation, operation identity, provider communication and the record used to investigate the result.",
    nodes: [
      "Request & identity",
      "Payment orchestration",
      "Provider boundary",
      "Ledger & audit",
    ],
    notes: [
      {
        title: "Correctness",
        text: "Stable references, duplicate protection and explicit states make concurrent retries easier to reason about.",
      },
      {
        title: "Failure handling",
        text: "A timeout can leave an outcome uncertain. Recovery and reconciliation need to preserve that distinction.",
      },
      {
        title: "Evidence",
        text: "Operational logs, traces and audit records should connect to the same operation identity.",
      },
    ],
    href: "/projects/iris-payment-gateway",
  },
  {
    name: "Applied AI",
    title: "Keep reasoning separate from authority.",
    summary:
      "Coordinate retrieval and tool use without allowing generated text to define permissions or bypass validation.",
    nodes: [
      "Question & scope",
      "Retrieval context",
      "Validated tool call",
      "Answer & evaluation",
    ],
    notes: [
      {
        title: "Data boundaries",
        text: "Retrieve within the permitted scope and keep source identifiers alongside the context.",
      },
      {
        title: "Tool contracts",
        text: "Validate typed inputs and outputs. Enforce permissions and limits in the service executing the tool.",
      },
      {
        title: "Observability",
        text: "Trace retrieval, generation and tool calls separately to understand quality, cost and failure behaviour.",
      },
    ],
    href: "/projects/retrieval-sql-assistant",
  },
  {
    name: "Event-driven systems",
    title: "A queue changes where the work waits.",
    summary:
      "Asynchronous boundaries improve decoupling, while introducing responsibilities around identity, ordering and recovery.",
    nodes: [
      "Domain event",
      "Message broker",
      "Bounded consumer",
      "Persistent outcome",
    ],
    notes: [
      {
        title: "Throughput",
        text: "Bound consumer concurrency against the capacity of downstream storage and services.",
      },
      {
        title: "Delivery",
        text: "Design handlers for duplicate delivery and retain a recoverable identity across retries.",
      },
      {
        title: "Operations",
        text: "Monitor queue depth, consumer lag, failed messages and the business result of processing.",
      },
    ],
    href: "/projects/audit-service",
  },
];

export function ArchitecturePage() {
  const [active, setActive] = useState(0);
  const m = models[active];
  useEffect(() => {
    document.title = "Architecture — Joseph Ukeje";
  }, []);
  return (
    <div className="studies-page">
      <div className="study-shell">
        <header className="studies-intro">
          <p className="study-label">02 / ARCHITECTURE</p>
          <h1>
            Architecture.<span>Boundaries before boxes.</span>
          </h1>
          <p>
            How I reason about payments, distributed services and applied AI:
            define the operation, identify the failure paths, and make the
            result understandable.
          </p>
        </header>
        <div className="study-filters" aria-label="Architecture scenarios">
          {models.map((model, i) => (
            <button
              key={model.name}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              {model.name}
            </button>
          ))}
        </div>
        <section
          className="practice-model"
          aria-label="Selected architecture scenario"
        >
          <p className="study-label">REPRESENTATIVE SYSTEM SKETCH</p>
          <h2>{m.title}</h2>
          <p>{m.summary}</p>
          <div
            className="practice-diagram"
            role="img"
            aria-label={m.nodes.join(" to ")}
          >
            <svg viewBox="0 0 1000 180">
              <defs>
                <marker
                  id="architecture-arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#172923" />
                </marker>
              </defs>
              {m.nodes.map((node, i) => (
                <g key={node}>
                  <rect
                    x={i * 250 + 8}
                    y="45"
                    width="224"
                    height="92"
                    rx="13"
                    fill={i === 1 ? "#e9e9e4" : "#fff"}
                    stroke="#aaa"
                  />
                  <text
                    x={i * 250 + 28}
                    y="72"
                    fill="#555"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    0{i + 1}
                  </text>
                  <text
                    x={i * 250 + 120}
                    y="103"
                    textAnchor="middle"
                    fill="#171717"
                    fontSize="14"
                    fontFamily="sans-serif"
                  >
                    {node}
                  </text>
                  {i < 3 && (
                    <path
                      d={`M ${i * 250 + 233} 90 L ${i * 250 + 255} 90`}
                      stroke="#172923"
                      fill="none"
                      markerEnd="url(#architecture-arrow)"
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>
          <p className="practice-caption">
            Illustrative boundaries based on project scope, rather than a
            proprietary deployment diagram.
          </p>
          <div className="practice-principles">
            {m.notes.map((n, i) => (
              <article key={n.title}>
                <span className="study-label">0{i + 1}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
          <Link href={m.href} className="study-text-link">
            Read the related case study <ArrowUpRight size={16} />
          </Link>
        </section>
        <section className="practice-summary">
          <p className="study-label">DESIGN PROCESS</p>
          <h2>Start with the constraints.</h2>
          <div className="practice-principles">
            {[
              {
                title: "Understand the operation",
                text: "Define who needs the system, what must remain correct and how success will be observed.",
              },
              {
                title: "Make trade-offs explicit",
                text: "Consider consistency, latency, dependency failures, cost and the team's ability to operate the result.",
              },
              {
                title: "Verify the hard paths",
                text: "Exercise concurrent requests, duplicate delivery, partial failures, delayed messages and recovery.",
              },
            ].map((n) => (
              <article key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
        </section>
        <footer className="study-footer">
          <Link href="/projects">
            Project case studies <ArrowUpRight size={16} />
          </Link>
          <Link href="/devops">
            DevOps & delivery <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </div>
  );
}

const pipeline = [
  {
    name: "Build",
    detail: "Compile and package a reproducible application artefact.",
  },
  {
    name: "Verify",
    detail: "Run automated checks before allowing the change to progress.",
  },
  {
    name: "Deploy",
    detail:
      "Check configuration and migrations, then release with a rollback path.",
  },
  {
    name: "Observe",
    detail:
      "Verify health, latency, error signals and the user-facing outcome.",
  },
];

export function DevOpsPage() {
  const [failure, setFailure] = useState(false),
    [ran, setRan] = useState(false);
  useEffect(() => {
    document.title = "DevOps — Joseph Ukeje";
  }, []);
  return (
    <div className="studies-page">
      <div className="study-shell">
        <header className="studies-intro">
          <p className="study-label">03 / DEVOPS & OPERATIONS</p>
          <h1>
            Delivery.<span>With a way back.</span>
          </h1>
          <p>
            Build, verify, deploy and operate as one engineering responsibility.
            My work spans cloud services, container delivery, infrastructure
            automation and production investigation.
          </p>
        </header>
        <section className="practice-model">
          <div className="practice-section-head">
            <div>
              <p className="study-label">INTERACTIVE DELIVERY SCENARIO</p>
              <h2>A failed check should stop the release.</h2>
            </div>
            <button
              className="practice-reset"
              aria-label="Reset delivery scenario"
              onClick={() => setRan(false)}
            >
              <RotateCcw size={17} />
            </button>
          </div>
          <p>
            Change the verification outcome, then follow which stages can
            proceed.
          </p>
          <label className="practice-checkbox">
            <input
              type="checkbox"
              checked={failure}
              onChange={(e) => {
                setFailure(e.target.checked);
                setRan(false);
              }}
            />{" "}
            Simulate a failed verification check
          </label>
          <div className="delivery-pipeline" aria-label="Delivery stages">
            {pipeline.map((stage, i) => {
              const failed = ran && failure && i === 1,
                blocked = ran && failure && i > 1,
                passed = ran && !failed && !blocked;
              return (
                <article
                  key={stage.name}
                  data-state={
                    failed
                      ? "failed"
                      : blocked
                        ? "blocked"
                        : passed
                          ? "passed"
                          : "ready"
                  }
                >
                  <div>
                    <span className="study-label">0{i + 1}</span>
                    {failed ? (
                      <X size={17} />
                    ) : passed ? (
                      <Check size={17} />
                    ) : (
                      <ArrowRight size={17} />
                    )}
                  </div>
                  <h3>{stage.name}</h3>
                  <p>{stage.detail}</p>
                  <strong>
                    {failed
                      ? "Failed"
                      : blocked
                        ? "Not started"
                        : passed
                          ? "Passed"
                          : "Ready"}
                  </strong>
                </article>
              );
            })}
          </div>
          <button className="practice-run" onClick={() => setRan(true)}>
            Run delivery scenario <ArrowRight size={16} />
          </button>
          <p className="practice-caption" role="status">
            {ran
              ? failure
                ? "Verification failed. Deployment and observation were not started."
                : "All demonstration stages passed."
              : "Browser simulation only; this control does not build or deploy infrastructure."}
          </p>
        </section>
        <section className="practice-summary">
          <p className="study-label">FROM THE WORK</p>
          <h2>Migration without losing the session.</h2>
          <p className="practice-lead">
            At Huawei, migrated 250,000+ live Redis keys to Amazon ElastiCache
            Serverless for Valkey, preserving sessions with zero downtime and
            zero user logouts.
          </p>
          <div className="practice-principles">
            {[
              {
                title: "Replicate",
                text: "Use live replication to move data while the source remains in use.",
              },
              {
                title: "Validate & cut over",
                text: "Synchronise outstanding changes before shifting the application connection.",
              },
              {
                title: "Verify the outcome",
                text: "Check active sessions, dependency behaviour and application health after the transition.",
              },
            ].map((n) => (
              <article key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="practice-summary">
          <p className="study-label">OPERATIONAL TOOLBOX</p>
          <h2>Infrastructure and engineering discipline.</h2>
          <div className="practice-principles">
            {[
              {
                title: "Delivery",
                text: "Azure DevOps, GitHub Actions, Docker, Kubernetes, Helm and Terraform. Repeatable configuration, checks and release verification.",
              },
              {
                title: "Observability",
                text: "OpenTelemetry, Prometheus, Grafana, logs and cloud monitoring. Connect service signals to the operation being investigated.",
              },
              {
                title: "Recovery",
                text: "Explicit failure states, runbooks, incident analysis and regression cases. Address the cause, then keep the fix verifiable.",
              },
            ].map((n) => (
              <article key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </article>
            ))}
          </div>
        </section>
        <footer className="study-footer">
          <Link href="/architecture">
            Explore architecture <ArrowUpRight size={16} />
          </Link>
          <Link href="/resume">
            Experience & responsibilities <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </div>
  );
}
