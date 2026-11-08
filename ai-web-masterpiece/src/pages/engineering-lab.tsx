import { useEffect, useState } from "react";
import { Link } from "@/lib/portfolio-router";
import {
  ArrowUpRight,
  ArrowRight,
  RotateCcw,
  Check,
  GitBranch,
} from "lucide-react";
import { publicProjects } from "@/data/open-source";
import "@/styles/engineering.css";

export function PaymentLab() {
  const [dedupe, setDedupe] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [operations, setOperations] = useState(0);
  const [events, setEvents] = useState<string[]>([]);
  const reset = () => {
    setAttempts(0);
    setOperations(0);
    setEvents([]);
  };
  const submit = () => {
    const replay = dedupe && operations > 0;
    setAttempts((a) => a + 1);
    if (!replay) setOperations((n) => n + 1);
    setEvents((a) =>
      [
        replay
          ? "Existing result returned · no second debit"
          : "Payment accepted · operation recorded",
        ...a,
      ].slice(0, 5),
    );
  };
  return (
    <section className="lab-experiment">
      <div className="experiment-story">
        <p className="small-label">01 / PAYMENT CORRECTNESS</p>
        <h2>
          One payment.
          <br />
          <em>Even when you retry.</em>
        </h2>
        <p>
          A timeout should not turn a retry into another debit. Send the same
          payment several times and compare the effect of an idempotency
          boundary.
        </p>
        <div className="architecture-strip">
          <span>Request</span>
          <ArrowRight size={14} />
          <span>Unique key</span>
          <ArrowRight size={14} />
          <span>Recorded result</span>
        </div>
        <Link
          className="text-link"
          href="/blog/spring-boot-payment-idempotency"
        >
          Read the engineering note <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="lab-console">
        <div className="console-top">
          <span className="small-label">PAYMENT / REQUEST REPLAY</span>
          <span className="live-badge">INTERACTIVE</span>
        </div>
        <label className="lab-toggle">
          <input
            type="checkbox"
            checked={dedupe}
            onChange={(e) => {
              setDedupe(e.target.checked);
              reset();
            }}
          />{" "}
          Protect with an idempotency key
        </label>
        <div className="payment-receipt">
          <span>TRANSFER TO / DEMO MERCHANT</span>
          <strong>
            $5,000<span>.00</span>
          </strong>
          <code>idempotency-key: demo-payment-001</code>
        </div>
        <div className="lab-metrics">
          <div>
            <strong>{attempts}</strong>
            <span>Requests sent</span>
          </div>
          <div>
            <strong>{operations}</strong>
            <span>Debits recorded</span>
          </div>
        </div>
        <div className="console-actions">
          <button onClick={submit}>
            Send the same payment <ArrowUpRight size={16} />
          </button>
          <button
            className="icon-button"
            onClick={reset}
            aria-label="Reset payment demo"
          >
            <RotateCcw size={17} />
          </button>
        </div>
        <div className="event-log" role="log" aria-label="Payment events">
          {events.length === 0 ? (
            <p>Ready. Send a request, then retry it.</p>
          ) : (
            events.map((e, i) => (
              <p key={`${attempts}-${i}`}>
                <span>›</span>
                {e}
              </p>
            ))
          )}
        </div>
        <p className="simulation-note">
          Browser simulation of a single payment key. Production guarantees
          require persistent state, transaction boundaries and provider
          reconciliation.
        </p>
      </div>
    </section>
  );
}

export function RetrievalLab() {
  const [tenant, setTenant] = useState("Retail");
  const [query, setQuery] = useState("What happens when a payment is pending?");
  const [result, setResult] = useState<{
    answer: string;
    source: string;
    cached: boolean;
  } | null>(null);
  const [cache, setCache] = useState<
    Record<string, { answer: string; source: string }>
  >({});
  const run = () => {
    const key = `${tenant}:${query.toLowerCase().trim()}`;
    if (cache[key]) {
      setResult({ ...cache[key], cached: true });
      return;
    }
    const payment = /payment|pending|transfer|settle/i.test(query);
    const r = payment
      ? {
          answer:
            tenant === "Retail"
              ? "Keep the order pending. Check the provider reference before fulfilling or retrying the payment."
              : "Keep the transfer in an uncertain state. Reconcile the provider result before allowing another money-moving attempt.",
          source:
            tenant === "Retail"
              ? "retail/payment-policy.md"
              : "banking/transfer-runbook.md",
        }
      : {
          answer:
            "The demo corpus has no matching evidence. A grounded assistant should abstain or ask for more context.",
          source: "No matching source",
        };
    setCache((c) => ({ ...c, [key]: r }));
    setResult({ ...r, cached: false });
  };
  return (
    <section className="lab-experiment reverse-experiment">
      <div className="experiment-story">
        <p className="small-label">02 / APPLIED AI</p>
        <h2>
          Useful answers.
          <br />
          <em>With boundaries.</em>
        </h2>
        <p>
          Retrieval starts with the right scope. Switch tenants and repeat a
          question to see why cached answers must respect the same boundary as
          source documents.
        </p>
        <div className="architecture-strip">
          <span>Scope</span>
          <ArrowRight size={14} />
          <span>Retrieve</span>
          <ArrowRight size={14} />
          <span>Answer + source</span>
        </div>
        <Link
          className="text-link"
          href="/blog/applied-ai-retrieval-and-tool-boundaries"
        >
          Explore the tool boundary <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="lab-console">
        <div className="console-top">
          <span className="small-label">RETRIEVAL / TENANT SCOPE</span>
          <span className="live-badge">INTERACTIVE</span>
        </div>
        <label className="console-label">
          Tenant
          <select
            aria-label="Tenant"
            value={tenant}
            onChange={(e) => {
              setTenant(e.target.value);
              setResult(null);
            }}
          >
            <option>Retail</option>
            <option>Banking</option>
          </select>
        </label>
        <label className="console-label">
          Question
          <textarea
            aria-label="Question"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setResult(null);
            }}
            rows={2}
          />
        </label>
        <div className="console-actions">
          <button onClick={run} disabled={!query.trim()}>
            Retrieve an answer <ArrowUpRight size={16} />
          </button>
          <button
            className="icon-button"
            aria-label="Clear retrieval cache"
            onClick={() => {
              setCache({});
              setResult(null);
            }}
          >
            <RotateCcw size={17} />
          </button>
        </div>
        <div className="retrieval-result" role="status">
          {result ? (
            <>
              <span className="result-tag">
                <Check size={12} />
                {result.cached ? "SCOPED CACHE HIT" : "SCOPED LOOKUP"}
              </span>
              <p>{result.answer}</p>
              <code>{result.source}</code>
            </>
          ) : (
            <p>Choose a tenant and ask about a payment.</p>
          )}
        </div>
        <p className="simulation-note">
          Deterministic browser demonstration with sample documents and
          exact-match caching. No model, embeddings, live data or external API
          calls.
        </p>
      </div>
    </section>
  );
}

export default function EngineeringLab({
  openSourceOnly = false,
}: {
  openSourceOnly?: boolean;
}) {
  const [category, setCategory] = useState("All");
  useEffect(() => {
    document.title = `${openSourceOnly ? "Open source" : "Engineering lab"} — Joseph Ukeje`;
  }, [openSourceOnly]);
  const categories = [
    "All",
    "Applied AI",
    "Java",
    ".NET",
    "Go",
    "Python",
    "Node / React",
    "Mobile",
  ];
  const repos = publicProjects.filter(
    (p) => category === "All" || p.category === category,
  );
  return (
    <div className="engineering-theme">
      <div className="engineering-shell">
        <header className="editorial-hero lab-hero">
          <div>
            <p className="small-label">
              02 / {openSourceOnly ? "OPEN SOURCE" : "ENGINEERING LAB"}
            </p>
            <h1>
              {openSourceOnly ? "Code, in the open." : "Engineering Lab"}
              <span className="serif-line">
                {openSourceOnly
                  ? "Explore the work."
                  : "See the decisions work."}
              </span>
            </h1>
            <p className="hero-description">
              {openSourceOnly
                ? "Public projects, reusable libraries and upstream-based work across applied AI, Java, .NET, Go and Python."
                : "Small, interactive demonstrations of the problems behind reliable payments and applied AI. Change an input. Follow the state. Inspect the boundary."}
            </p>
            <a
              className="text-link"
              href={openSourceOnly ? "#open-source" : "#experiments"}
            >
              {openSourceOnly ? "Browse repositories" : "Try the experiments"}
              <ArrowRight size={17} />
            </a>
          </div>
          <div className="lab-hero-art" aria-hidden="true">
            <span className="small-label">JU / SYSTEMS WORKBENCH</span>
            <div className="stack-layer">
              03 <span>Observe & recover</span>
            </div>
            <div className="stack-layer">
              02 <span>Coordinate & validate</span>
            </div>
            <div className="stack-layer">
              01 <span>Protect the boundary</span>
            </div>
            <code>input → decision → evidence</code>
          </div>
        </header>
        {!openSourceOnly && (
          <div id="experiments">
            <PaymentLab />
            <RetrievalLab />
          </div>
        )}
        <section id="open-source" className="open-source-section">
          <div className="section-heading">
            <div>
              <p className="small-label">PUBLIC CODE / CONTINUOUS LEARNING</p>
              <h2>
                Open Source <span>& public projects</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/UkejeJoseph"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="section-intro">
            Explore the source, the architecture and the original upstream
            projects. Each repository is labelled by its relationship to the
            work.
          </p>
          <div className="topic-filters" aria-label="Repository technologies">
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="result-count" role="status">
            {repos.length} repositories
          </p>
          <div className="repo-grid">
            {repos.map((p) => (
              <article className="repo-card" key={p.repo}>
                <div className="repo-card-top">
                  <GitBranch size={22} />
                  <span className="small-label">{p.category}</span>
                </div>
                <h3>
                  <a
                    href={`https://github.com/UkejeJoseph/${p.repo}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.name}
                    <ArrowUpRight size={19} />
                  </a>
                </h3>
                <p>{p.description}</p>
                <code>{p.stack}</code>
                <div className="repo-provenance">
                  <span>{p.status}</span>
                  <small>{p.license}</small>
                </div>
                {p.upstream && (
                  <a
                    className="upstream-link"
                    href={p.upstream}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Original upstream <ArrowUpRight size={13} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
        <footer className="engineering-footer">
          <span>Joseph Ukeje / The workbench</span>
          <Link href="/blog">
            Read the engineering notes <ArrowUpRight size={17} />
          </Link>
        </footer>
      </div>
    </div>
  );
}
