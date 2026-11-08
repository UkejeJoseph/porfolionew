import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Maximize2 } from "lucide-react";
import { Link } from "@/lib/portfolio-router";
import { architectureStudies } from "@/data/architecture-studies";
import "@/styles/architecture-page.css";

export default function ArchitecturePage() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [fit, setFit] = useState(false);
  const model = architectureStudies[active];
  const diagram = model.views[view];
  useEffect(() => {
    document.title = "Architecture — Joseph Ukeje";
  }, []);
  return (
    <div className="studies-page architecture-page">
      <div className="study-shell">
        <header className="studies-intro">
          <p className="study-label">02 / ARCHITECTURE & SYSTEM DESIGN</p>
          <h1>
            Architecture.<span>State, scale and recovery.</span>
          </h1>
          <p>
            Explore the request paths, durable boundaries and failure recovery
            behind distributed payments, retrieval AI and order matching.
          </p>
        </header>
        <div className="study-filters" aria-label="Architecture scenarios">
          {architectureStudies.map((item, i) => (
            <button
              key={item.id}
              aria-pressed={active === i}
              onClick={() => {
                setActive(i);
                setView(0);
                setZoom(100);
                setFit(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <section
          className="architecture-model"
          aria-label="Selected architecture scenario"
        >
          <p className="study-label">{model.name} / REFERENCE DESIGN</p>
          <h2>{model.title}</h2>
          <p className="architecture-lead">{model.summary}</p>
          <div className="architecture-invariant">
            <span className="study-label">CORRECTNESS BOUNDARY</span>
            <p>{model.constraint}</p>
          </div>
          <div
            className="study-filters architecture-views"
            aria-label="Diagram views"
          >
            {model.views.map((item, i) => (
              <button
                key={item.file}
                aria-pressed={view === i}
                onClick={() => {
                  setView(i);
                  setZoom(100);
                  setFit(false);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <p className="architecture-lead">{diagram.text}</p>
          <div className="architecture-tools">
            <button
              onClick={() => {
                setZoom(100);
                setFit(true);
              }}
            >
              Fit width
            </button>
            <button
              onClick={() => {
                setZoom(100);
                setFit(false);
              }}
            >
              Readable size
            </button>
            <label>
              Zoom{" "}
              <input
                aria-label="Diagram zoom"
                type="range"
                min={100}
                max={300}
                step={25}
                value={zoom}
                onChange={(event) => {
                  setZoom(Number(event.target.value));
                  setFit(false);
                }}
              />
              <span>{zoom}%</span>
            </label>
            <a
              href={`/architecture/${diagram.file}.svg`}
              target="_blank"
              rel="noreferrer"
            >
              <Maximize2 size={14} /> Open diagram
            </a>
            <a href={`/architecture/${diagram.file}.mmd`} download>
              <Download size={14} /> Mermaid source
            </a>
          </div>
          <p className="architecture-caption">
            Scroll horizontally to follow the flow at readable size. Fit width
            shows the complete overview.
          </p>
          <div
            className="architecture-canvas"
            tabIndex={0}
            role="region"
            aria-label={`${model.name}: ${diagram.name} diagram; scroll to explore at higher zoom`}
          >
            <img
              src={`/architecture/${diagram.file}.svg`}
              alt={`${model.name} — ${diagram.name}. ${diagram.text}`}
              style={{
                width: fit ? "100%" : `${(diagram.width * zoom) / 100}px`,
              }}
            />
          </div>
          <p className="architecture-caption">
            Solid arrows: requests and state access. Dashed arrows: asynchronous
            work. These reference designs explain engineering choices;
            individual client deployments and upstream projects have their own
            topology.
          </p>
          <section className="architecture-walkthrough">
            <p className="study-label">01 / WALK THE OPERATION</p>
            <h3>From admission to durable outcome.</h3>
            <ol>
              {model.steps.map((step, i) => (
                <li key={step}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="architecture-decisions">
            <p className="study-label">02 / COMPONENTS & TRADE-OFFS</p>
            <div>
              {model.decisions.map((decision) => (
                <article key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="architecture-failures">
            <p className="study-label">03 / FAILURE & RECOVERY</p>
            <h3>Design for the interrupted operation.</h3>
            <div className="architecture-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Failure</th>
                    <th scope="col">Recovery boundary</th>
                  </tr>
                </thead>
                <tbody>
                  {model.failures.map(([failure, recovery]) => (
                    <tr key={failure}>
                      <th scope="row">{failure}</th>
                      <td>{recovery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="architecture-contracts">
            <p className="study-label">04 / CONTRACTS & OBSERVABILITY</p>
            {model.contracts.map((contract) => (
              <p key={contract}>{contract}</p>
            ))}
          </section>
          <div className="architecture-reference-links">
            <Link href={model.caseLink}>
              Related project <ArrowUpRight size={15} />
            </Link>
            {model.sources.map(([name, href]) => (
              <a href={href} key={href} target="_blank" rel="noreferrer">
                {name} <ArrowUpRight size={13} />
              </a>
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
