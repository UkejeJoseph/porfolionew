import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, RotateCcw, Check, X } from "lucide-react";
import { Link } from "@/lib/portfolio-router";
import "@/styles/project-studies.css";

export { default as ArchitecturePage } from "./architecture-page";

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
