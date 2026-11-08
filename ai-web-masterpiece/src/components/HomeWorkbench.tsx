import { useState } from "react";
import { ArrowUpRight, Layers, RotateCcw, RotateCw } from "lucide-react";

const views = [
  {
    id: "payments",
    label: "Payments",
    title: "Correctness across boundaries.",
    description:
      "Stable operation identities, explicit transaction states and recoverable integrations across payment services.",
    layers: [
      "Client contract",
      "Payment orchestration",
      "Events & recovery",
      "Ledger & audit",
    ],
  },
  {
    id: "reliability",
    label: "Reliability",
    title: "Know what happened. Recover cleanly.",
    description:
      "Testing, observability and failure handling belong in the design, alongside the service that does the work.",
    layers: [
      "API boundary",
      "Bounded concurrency",
      "Retries & idempotency",
      "Traces & evidence",
    ],
  },
  {
    id: "ai",
    label: "Applied AI",
    title: "Reasoning, with a reliable foundation.",
    description:
      "Typed tools, scoped retrieval and observable workflows connect model behaviour to production engineering.",
    layers: [
      "User question",
      "Agent workflow",
      "Permitted tools",
      "Evidence & evaluation",
    ],
  },
];

export default function HomeWorkbench() {
  const [view, setView] = useState(0);
  const [separated, setSeparated] = useState(false);
  const [angle, setAngle] = useState(-18);
  const active = views[view];
  return (
    <div className="home-workbench">
      <div className="bench-caption">
        <span>
          <i /> THE SYSTEMS WORKBENCH
        </span>
        <span>JU — 01</span>
      </div>
      <h2>
        The layers I own.<span>From request to recovery.</span>
      </h2>
      <div
        className={`bench-scene ${separated ? "is-separated" : ""}`}
        aria-label="Illustrative service architecture layers"
      >
        <div className="bench-orbit" />
        <div
          className="bench-stack"
          style={{
            transform: `rotateX(12deg) rotateY(${angle}deg) rotateZ(-9deg)`,
          }}
        >
          {active.layers.map((layer, i) => (
            <div
              className={`bench-plane plane-${i}`}
              key={`${active.id}-${layer}`}
              style={{
                transform: `translate3d(${i * (separated ? 42 : 15)}px, ${i * (separated ? -16 : -7)}px, ${-i * (separated ? 55 : 20)}px)`,
              }}
            >
              <span className="bench-plane-number">0{i + 1}</span>
              {i === 0 ? (
                <>
                  <strong>ju.</strong>
                  <span className="bench-plane-title">
                    Built for
                    <br />
                    real systems.
                  </span>
                  <div className="bench-mini-grid">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="bench-plane-code">{layer}</span>
                  <span className="bench-circuit" />
                </>
              )}
              <span className="bench-plane-footer">{layer}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bench-tools">
        <button
          onClick={() => setSeparated((s) => !s)}
          aria-pressed={separated}
        >
          <Layers size={15} />
          {separated ? "Bring layers together" : "Separate layers"}
        </button>
        <div>
          <button
            aria-label="Rotate architecture left"
            onClick={() => setAngle((a) => Math.max(-45, a - 10))}
          >
            <RotateCcw size={15} />
          </button>
          <button
            aria-label="Rotate architecture right"
            onClick={() => setAngle((a) => Math.min(25, a + 10))}
          >
            <RotateCw size={15} />
          </button>
        </div>
      </div>
      <div className="bench-tabs" role="group" aria-label="Engineering focus">
        {views.map((v, i) => (
          <button
            key={v.id}
            aria-pressed={view === i}
            onClick={() => setView(i)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="bench-explanation" role="status">
        <p>IN MY ENGINEERING WORK</p>
        <h3>{active.title}</h3>
        <span>{active.description}</span>
      </div>
      <a className="bench-link" href="/lab">
        Explore the engineering lab <ArrowUpRight size={15} />
      </a>
      <p className="bench-disclaimer">
        Illustrative architecture, not a live production system.
      </p>
    </div>
  );
}
