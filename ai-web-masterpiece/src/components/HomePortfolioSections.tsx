import { ArrowUpRight, ArrowRight, GitBranch } from "lucide-react";
import { Link } from "@/lib/portfolio-router";
import { publicProjects } from "@/data/open-source";
import { engineeringNotes } from "@/data/engineering-notes";
import { PaymentLab, RetrievalLab } from "@/pages/engineering-lab";
import profilePhoto from "@/assets/profile.png";
import AppliedAIExperience, {
  isAppliedAIAchievement,
} from "@/components/AppliedAIExperience";
import { professionalExperience } from "@/data/professional-experience";
import { ProjectPreview, projectStudies } from "@/pages/project-studies";

const work = [
  {
    number: "01",
    id: "audit-service",
    category: "CORE BANKING / AUDIT INFRASTRUCTURE",
    title: "Centralised Audit Service",
    headline: "A clear trail through complex transactions.",
    description:
      "Technical design, implementation and operation of audit infrastructure supporting transaction investigations and end-to-end financial traceability.",
    metric: "5–10M",
    metricLabel: "daily transaction records · client scope",
    stack: "Event-driven services · Kafka · Observability",
    flow: [
      "Transaction events",
      "Ingestion boundary",
      "Audit processing",
      "Investigation trail",
    ],
    detail:
      "Capture events with stable identities, keep retries explicit, and make ingestion and processing observable. The client implementation and operational records remain private.",
  },
  {
    number: "02",
    id: "iris-payment-gateway",
    category: "PAYMENTS / INTER-BANK INTEGRATION",
    title: "IRIS Payment Gateway",
    headline: "Keep the payment recoverable.",
    description:
      "Inter-bank payment integration across message validation, signatures, transport connections and uncertain outcomes.",
    metric: "ISO 20022",
    metricLabel: "SWIFT flows · Java / Netty",
    stack: "Java · Netty · gRPC · Kafka · Distributed systems",
    flow: [
      "Payment contract",
      "Message validation",
      "Transport & signatures",
      "Recoverable outcome",
    ],
    detail:
      "Separate transport delivery from business completion. Preserve references, handle duplicates and validate malformed, delayed and failed-message paths. The proprietary IRIS source is not public.",
  },
  {
    number: "03",
    id: "retrieval-sql-assistant",
    category: "APPLIED AI / CLIENT DELIVERY",
    title: "Retrieval & SQL Assistant",
    headline: "Questions become useful, traceable answers.",
    description:
      "A natural-language interface to live databases, with Slack access, retrieval workflows and typed Python service contracts.",
    metric: "Typed tools",
    metricLabel: "scoped retrieval · observable workflows",
    stack: "Python · FastAPI · LangGraph · PostgreSQL / pgvector",
    flow: [
      "Stakeholder question",
      "Scoped retrieval",
      "Validated tool call",
      "Answer & source",
    ],
    detail:
      "Separate orchestration from permitted operations, validate schemas and trace retrieval and generation. LabLens and SQLDeps are separately attributed public adaptations; client code remains private.",
  },
  {
    number: "04",
    id: "stablex",
    category: "BLOCKCHAIN / WALLET & EXCHANGE",
    title: "StableX",
    headline: "From wallet interactions to exchange services.",
    description:
      "A stablecoin wallet and exchange platform connecting a React interface with backend services, blockchain validation and smart contracts.",
    metric: "Multi-stack",
    metricLabel: "wallet, exchange and blockchain integration",
    stack: "Java · Spring Boot · Node.js · React · gRPC · Solidity",
    flow: [],
    detail:
      "Separate wallet interactions from transaction validation and background processing. Connect service contracts, blockchain operations and the client interface through explicit boundaries.",
  },
];

export function HomeSelectedWork() {
  return (
    <section id="selected-work" className="home-shell home-section">
      <div className="home-section-head">
        <div>
          <p className="home-eyebrow">01 / SELECTED WORK & OWNERSHIP</p>
          <h2>
            The work.
            <br />
            <em>The decisions behind it.</em>
          </h2>
        </div>
        <Link href="/projects" className="home-text-link">
          All selected work <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="home-work-list">
        {work.map((w, i) => (
          <article className="home-work-card" key={w.number}>
            <Link
              href={`/projects/${w.id}`}
              aria-label={`View ${w.title} case study`}
            >
              <ProjectPreview
                project={projectStudies.find((project) => project.id === w.id)!}
                index={i}
              />
            </Link>
            <div className="home-project-story">
              <p className="home-eyebrow">
                {w.number} / {w.category}
              </p>
              <h3>{w.title}</h3>
              <h4>{w.headline}</h4>
              <p>{w.description}</p>
              <div className="home-project-proof">
                <strong>{w.metric}</strong>
                <span>{w.metricLabel}</span>
              </div>
              <details>
                <summary>
                  Engineering decisions <span>+</span>
                </summary>
                <p>{w.detail}</p>
              </details>
              <p className="home-project-stack">{w.stack}</p>
              <Link href={`/projects/${w.id}`} className="home-text-link">
                Read the case study <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceAchievement({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\*\*.*?\*\*)/g)
        .map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : (
            part
          ),
        )}
    </>
  );
}

export function HomeExperience() {
  return (
    <section
      id="experience"
      className="home-shell home-section home-experience"
    >
      <div className="home-section-head">
        <div>
          <p className="home-eyebrow">02 / PROFESSIONAL EXPERIENCE</p>
          <h2>
            Professional
            <br />
            <em>Experience.</em>
          </h2>
        </div>
        <Link href="/resume" className="home-text-link">
          View the full résumé <ArrowUpRight size={17} />
        </Link>
      </div>
      {professionalExperience.map((role, i) => {
        const achievements =
          role.id === "interswitch"
            ? role.achievements.filter((text) => !isAppliedAIAchievement(text))
            : role.achievements;
        const visibleCount = role.id === "interswitch" ? achievements.length : 2;
        return (
          <article
            className="home-experience-row"
            key={role.id}
            data-experience-role={role.id}
          >
            <span className="home-eyebrow">
              0{i + 1}
              <br />
              {role.period}
            </span>
            <div>
              <h3>{role.company}</h3>
              <p>{role.role}</p>
            </div>
            <p>{role.fullDescription}</p>
            <div className="home-role-contributions">
              <ul>
                {achievements.slice(0, visibleCount).map((text) => (
                  <li key={text}>
                    <ExperienceAchievement text={text} />
                  </li>
                ))}
              </ul>
              {achievements.length > visibleCount && (
                <details>
                  <summary>
                    Show {achievements.length - visibleCount} more engineering
                    contributions <span>+</span>
                  </summary>
                  <ul>
                    {achievements.slice(visibleCount).map((text) => (
                      <li key={text}>
                        <ExperienceAchievement text={text} />
                      </li>
                    ))}
                  </ul>
                </details>
              )}
              <p className="home-role-stack">{role.tags.join(" / ")}</p>
              {role.id === "interswitch" && <AppliedAIExperience />}
            </div>
          </article>
        );
      })}
    </section>
  );
}

export function HomeEngineering() {
  return (
    <section
      id="engineering-lab"
      className="engineering-theme home-green-section"
    >
      <div className="engineering-shell">
        <div className="home-section-head">
          <div>
            <p className="small-label">03 / ENGINEERING LAB</p>
            <h2>
              Don’t just read it.
              <br />
              <em>Put it to the test.</em>
            </h2>
          </div>
          <Link href="/lab" className="text-link">
            Explore the lab <ArrowUpRight size={17} />
          </Link>
        </div>
        <p className="section-intro">
          Retry a payment. Change the retrieval scope. Follow the state through
          the system.
        </p>
        <div className="home-lab-experiments">
          <PaymentLab />
          <RetrievalLab />
        </div>
      </div>
    </section>
  );
}

export function HomeOpenSource() {
  return (
    <section className="engineering-theme home-green-section home-source-section">
      <div className="engineering-shell">
        <div className="home-section-head">
          <div>
            <p className="small-label">04 / PUBLIC CODE</p>
            <h2>
              Open Source.
              <br />
              <em>More than a screenshot.</em>
            </h2>
          </div>
          <Link href="/open-source" className="text-link">
            All repositories <ArrowUpRight size={17} />
          </Link>
        </div>
        <p className="section-intro">
          Applied AI projects, reusable libraries and public systems to explore.
          Original projects, upstream-based copies and forks are labelled
          explicitly.
        </p>
        <div className="repo-grid">
          {publicProjects.slice(0, 6).map((p) => (
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
                  <ArrowUpRight size={18} />
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
      </div>
    </section>
  );
}

export function HomeAbout() {
  return (
    <section id="about" className="home-shell home-section home-about">
      <div>
        <p className="home-eyebrow">THE ENGINEER BEHIND THE WORK</p>
        <h2>
          I care about
          <br />
          <em>what happens next.</em>
        </h2>
        <p>
          The retry after a timeout. The next engineer reading the code. The
          person waiting for a payment to finish. Those are part of the system,
          too.
        </p>
        <p>
          I’m Joseph Ukeje, a Senior Software Engineer based in Lagos. I work
          across backend platforms, full-stack delivery and applied AI, with
          ownership from technical design through production support.
        </p>
        <Link href="/about" className="home-text-link">
          More about my work <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="home-about-photo">
        <img src={profilePhoto} alt="Joseph Ukeje" loading="lazy" />
        <span>JOSEPH UKEJE / LAGOS, NIGERIA</span>
      </div>
    </section>
  );
}

export function HomeWriting() {
  const notes = engineeringNotes
    .filter((n) =>
      ["Java / Spring Boot", "Python", "Applied AI"].includes(n.category),
    )
    .slice(0, 3);
  return (
    <section className="engineering-theme home-green-section home-writing">
      <div className="engineering-shell">
        <div className="home-section-head">
          <div>
            <p className="small-label">05 / FIELD NOTES</p>
            <h2>
              Decisions from
              <br />
              <em>the workbench.</em>
            </h2>
          </div>
          <Link href="/blog" className="text-link">
            All writing <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="home-note-grid">
          {notes.map((n, i) => (
            <Link
              href={`/blog/${n.id}`}
              key={n.id}
              className={`home-note-card home-note-${i}`}
            >
              <span className="small-label">FIELD NOTE / 0{i + 1}</span>
              <div className="home-note-symbol">
                {i === 0
                  ? "request → retry"
                  : i === 1
                    ? "queue → worker"
                    : "context → answer"}
              </div>
              <p className="small-label">
                {n.category} / {n.minutes} MIN READ
              </p>
              <h3>{n.title}</h3>
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeContact() {
  return (
    <footer className="home-shell home-contact">
      <p className="home-eyebrow">PAYMENTS / BACKEND PLATFORMS / APPLIED AI</p>
      <h2>
        Building something
        <br />
        <em>that needs to hold up?</em>
      </h2>
      <a href="mailto:ukejejoseph1@gmail.com" className="home-contact-email">
        ukejejoseph1@gmail.com <ArrowUpRight size={24} />
      </a>
      <div className="home-footer">
        <span>Joseph Ukeje · Lagos, Nigeria</span>
        <div>
          <Link href="/projects">Work</Link>
          <Link href="/lab">Engineering Lab</Link>
          <Link href="/blog">Blog</Link>
          <a
            href="https://github.com/UkejeJoseph"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export function HomeArchitectureDevOps() {
  return (
    <section className="home-shell home-section">
      <div className="home-section-head">
        <div>
          <p className="home-eyebrow">ARCHITECTURE & OPERATIONS</p>
          <h2>
            Design the system.
            <br />
            <em>Own how it runs.</em>
          </h2>
        </div>
      </div>
      <div className="practice-home-cards">
        <article className="practice-home-card">
          <p className="home-eyebrow">01 / ARCHITECTURE</p>
          <h3>Make the boundaries explicit.</h3>
          <p>
            Payments, event-driven services and applied AI. Explore how
            operation identity, dependency boundaries and failure paths shape a
            system.
          </p>
          <div className="practice-home-path">
            <span>Contracts</span>
            <ArrowRight size={14} />
            <span>Services</span>
            <ArrowRight size={14} />
            <span>Evidence</span>
          </div>
          <Link href="/architecture" className="home-text-link">
            Explore architecture <ArrowUpRight size={16} />
          </Link>
        </article>
        <article className="practice-home-card">
          <p className="home-eyebrow">02 / DEVOPS</p>
          <h3>Ship with a way back.</h3>
          <p>
            Build checks, container delivery, infrastructure automation,
            migrations and observability. Follow an interactive release
            scenario.
          </p>
          <div className="practice-home-path">
            <span>Verify</span>
            <ArrowRight size={14} />
            <span>Deploy</span>
            <ArrowRight size={14} />
            <span>Observe</span>
          </div>
          <Link href="/devops" className="home-text-link">
            Explore DevOps <ArrowUpRight size={16} />
          </Link>
        </article>
      </div>
    </section>
  );
}
