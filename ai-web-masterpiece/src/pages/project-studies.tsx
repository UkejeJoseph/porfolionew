import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "@/lib/portfolio-router";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Search,
  Github,
  ExternalLink,
} from "lucide-react";
import catalogue from "@/data/project-case-studies.json";
import "@/styles/project-studies.css";

export interface ProjectStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  kind: string;
  problem: string;
  implementation: string;
  decisions: string[];
  flow: string[];
  results: string[];
  repoUrl?: string | null;
  liveUrl?: string | null;
  upstream?: string;
  caseStudy?: boolean;
}
export const projectStudies: ProjectStudy[] = catalogue;

export function ProjectFlow({
  project,
  index = 0,
}: {
  project: ProjectStudy;
  index?: number;
}) {
  return (
    <div className={`study-visual study-tone-${index % 3}`}>
      <span className="study-label">JU / {project.category}</span>
      <div className="study-flow">
        {project.flow.map((step, i) => (
          <div key={step}>
            <span>0{i + 1}</span>
            <strong>{step}</strong>
            {i < project.flow.length - 1 && <ArrowRight size={16} />}
          </div>
        ))}
      </div>
      <span className="study-label">
        ILLUSTRATIVE WORKFLOW / {project.title}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  const [category, setCategory] = useState("All"),
    [query, setQuery] = useState(""),
    [limit, setLimit] = useState(9);
  useEffect(() => {
    document.title = "Projects — Joseph Ukeje";
  }, []);
  const categories = [
    "All",
    ...Array.from(new Set(projectStudies.map((p) => p.category))),
  ];
  const filtered = useMemo(
    () =>
      projectStudies.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          `${p.title} ${p.summary} ${p.stack.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    [category, query],
  );
  return (
    <div className="studies-page">
      <div className="study-shell">
        <header className="studies-intro">
          <p className="study-label">01 / PROJECTS & CASE STUDIES</p>
          <h1>
            Projects.<span>The work behind the interface.</span>
          </h1>
          <p>
            Payments, enterprise systems, applied AI and product interfaces.
            Explore the problem, implementation, technology and engineering
            considerations for each project.
          </p>
          <div className="study-intro-links">
            <Link href="/architecture">
              Architecture <ArrowUpRight size={16} />
            </Link>
            <Link href="/devops">
              DevOps & delivery <ArrowUpRight size={16} />
            </Link>
          </div>
        </header>
        <section aria-label="Project catalogue">
          <div className="study-controls">
            <div className="study-filters" aria-label="Project categories">
              {categories.map((c) => (
                <button
                  key={c}
                  aria-pressed={c === category}
                  onClick={() => {
                    setCategory(c);
                    setLimit(9);
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="study-search">
              <Search size={16} />
              <span className="sr-only">Search projects</span>
              <input
                type="search"
                placeholder="Search projects…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setLimit(9);
                }}
              />
            </label>
          </div>
          <p className="study-count" role="status">
            {filtered.length} projects
          </p>
          <div className="study-list">
            {filtered.slice(0, limit).map((project, i) => (
              <article className="study-card" key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  aria-label={`View ${project.title} case study`}
                >
                  <ProjectFlow project={project} index={i} />
                </Link>
                <div className="study-card-copy">
                  <p className="study-label">{project.kind}</p>
                  <h2>
                    <Link href={`/projects/${project.id}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p>{project.summary}</p>
                  <div className="study-stack">
                    {project.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="study-card-links">
                    <Link href={`/projects/${project.id}`}>
                      Read case study <ArrowUpRight size={16} />
                    </Link>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={14} /> Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={14} />
                        {project.id === "rivet-ai"
                          ? "Product website"
                          : "Website"}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!filtered.length && (
            <div className="study-empty">
              <h2>No projects match that search.</h2>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
          {limit < filtered.length && (
            <button
              className="study-more"
              onClick={() => setLimit((n) => n + 9)}
            >
              More projects <ArrowRight size={17} />
            </button>
          )}
        </section>
        <footer className="study-footer">
          <span>Joseph Ukeje / Selected work</span>
          <Link href="/open-source">
            Open-source catalogue <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </div>
  );
}

export function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projectStudies.find((p) => p.id === slug);
  useEffect(() => {
    document.title = project
      ? `${project.title} — Joseph Ukeje`
      : "Project not found — Joseph Ukeje";
    window.scrollTo(0, 0);
  }, [project]);
  if (!project)
    return (
      <div className="studies-page">
        <div className="study-shell">
          <h1>That project isn’t here.</h1>
          <Link href="/projects">Return to projects</Link>
        </div>
      </div>
    );
  return (
    <div className="studies-page">
      <div className="study-shell">
        <Link href="/projects" className="study-back">
          <ArrowLeft size={16} /> All projects
        </Link>
        <header className="study-detail-header">
          <p className="study-label">
            {project.category} / {project.kind}
          </p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="study-stack">
            {project.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="study-card-links">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <Github size={15} /> Inspect the source{" "}
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={15} /> Open website
              </a>
            )}
            {project.upstream && (
              <a href={project.upstream} target="_blank" rel="noreferrer">
                Original upstream <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </header>
        <ProjectFlow project={project} />
        <div className="study-detail-grid">
          <aside>
            <p className="study-label">IN THIS CASE STUDY</p>
            <a href="#problem">The problem</a>
            <a href="#implementation">Implementation</a>
            <a href="#decisions">Engineering considerations</a>
            {project.results.length > 0 && (
              <a href="#results">Scope & outcomes</a>
            )}
          </aside>
          <div className="study-detail-body">
            <section id="problem">
              <p className="study-label">01 / CONTEXT</p>
              <h2>The problem.</h2>
              <p>{project.problem}</p>
            </section>
            <section id="implementation">
              <p className="study-label">02 / IMPLEMENTATION</p>
              <h2>What the project does.</h2>
              <p>{project.implementation}</p>
            </section>
            <section id="decisions">
              <p className="study-label">03 / ENGINEERING</p>
              <h2>The decisions worth discussing.</h2>
              <ol>
                {project.decisions.map((decision, i) => (
                  <li key={i}>
                    <span>0{i + 1}</span>
                    <p>{decision}</p>
                  </li>
                ))}
              </ol>
            </section>
            {project.results.length > 0 && (
              <section id="results">
                <p className="study-label">04 / SCOPE & OUTCOMES</p>
                <h2>What this work supports.</h2>
                <ul>
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </section>
            )}
            {project.kind.includes("Proprietary") && (
              <p className="study-private-note">
                Client implementation and operational data are private. This
                case study describes the project scope and engineering
                responsibilities.
              </p>
            )}
          </div>
        </div>
        <footer className="study-footer">
          <Link href="/projects">
            <ArrowLeft size={16} /> More projects
          </Link>
          <Link href="/architecture">
            Explore the architecture <ArrowUpRight size={16} />
          </Link>
        </footer>
      </div>
    </div>
  );
}
