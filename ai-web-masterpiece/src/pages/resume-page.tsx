import { useEffect } from "react";
import { ArrowUpRight, Download, ArrowDown } from "lucide-react";
import { Link } from "@/lib/portfolio-router";
import { professionalExperience } from "@/data/professional-experience";
import { skillCategories } from "@/components/SkillsSection";
import generalResume from "@/assets/Joseph_Ukeje_Senior_Software_Engineer_Portfolio_Resume_V1.pdf";
import "@/styles/resume-page.css";
import AppliedAIExperience, {
  isAppliedAIAchievement,
} from "@/components/AppliedAIExperience";

function Achievement({ text }: { text: string }) {
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

export default function ResumePage() {
  useEffect(() => {
    document.title = "Résumé — Joseph Ukeje";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cv-page">
      <div className="cv-shell">
        <header className="cv-hero">
          <div>
            <p className="cv-label">06 / CURRICULUM VITAE</p>
            <h1>
              Senior Software Engineer.<span>Distributed systems. Payments. Applied AI.</span>
            </h1>
            <p className="cv-intro">
              Hi, I’m Joseph, a Senior Software Engineer. High-performance fintech
              platforms, distributed payment systems and applied AI. From
              inter-bank transfers and card processing to retrieval and agentic
              automation—with concurrency, financial correctness and recovery
              designed into the architecture.
            </p>
            <div className="cv-facts">
              <div>
                <span>Now</span>
                <strong>Interswitch Group</strong>
              </div>
              <div>
                <span>Experience</span>
                <strong>7 years</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Fintech & payment systems</strong>
              </div>
            </div>
            <div className="cv-actions">
              <a href={generalResume} download className="cv-download">
                <Download size={16} /> General résumé PDF
              </a>
              <a className="cv-text-link" href="#experience">
                Read the experience <ArrowDown size={15} />
              </a>
              <Link href="/projects" className="cv-text-link">
                Case studies <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <aside className="cv-contact-card">
            <span className="cv-monogram">ju.</span>
            <p className="cv-label">JOSEPH UKEJE / SOFTWARE ENGINEER</p>
            <div>
              <span>Email</span>
              <a href="mailto:ukejejoseph1@gmail.com">
                ukejejoseph1@gmail.com <ArrowUpRight size={14} />
              </a>
            </div>
            <div>
              <span>Phone</span>
              <a href="tel:+2347087232777">+234 708 723 2777</a>
            </div>
            <div>
              <span>GitHub</span>
              <a
                href="https://github.com/UkejeJoseph"
                target="_blank"
                rel="noreferrer"
              >
                UkejeJoseph <ArrowUpRight size={14} />
              </a>
            </div>
            <div>
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/joseph-ukeje-8a0300220"
                target="_blank"
                rel="noreferrer"
              >
                Joseph Ukeje <ArrowUpRight size={14} />
              </a>
            </div>
          </aside>
        </header>
        <section id="experience" className="cv-section">
          <div className="cv-section-title">
            <p className="cv-label">SECTION / EXPERIENCE</p>
            <h2>Experience.</h2>
          </div>
          {professionalExperience.map((job, i) => (
            <article className="cv-experience" key={job.id}>
              <div className="cv-role-meta">
                <span className="cv-label">0{i + 1}</span>
                <p>{job.period}</p>
              </div>
              <div className="cv-role-content">
                <h3>{job.role}</h3>
                <h4>{job.company}</h4>
                <p className="cv-role-summary">{job.fullDescription}</p>
                <ul>
                  {job.achievements
                    .filter(
                      (text) =>
                        job.id !== "interswitch" ||
                        !isAppliedAIAchievement(text),
                    )
                    .map((text, j) => (
                      <li key={j}>
                        <Achievement text={text} />
                      </li>
                    ))}
                </ul>
                <div
                  className="cv-tags"
                  aria-label={`${job.company} technologies`}
                >
                  {job.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {job.id === "interswitch" && <AppliedAIExperience />}
              </div>
            </article>
          ))}
        </section>
        <section className="cv-section">
          <div className="cv-section-title">
            <p className="cv-label">SECTION / TECHNOLOGIES</p>
            <h2>Skills & technologies.</h2>
          </div>
          <div className="cv-skills">
            {[
              ...skillCategories,
              {
                title: "Applied AI & Python",
                skills: [
                  "Python",
                  "FastAPI",
                  "Pydantic",
                  "LangChain",
                  "LangGraph",
                  "RAG",
                  "pgvector",
                  "LiteLLM",
                  "Langfuse",
                  "Model evaluation",
                ],
              },
            ].map((group) => (
              <div className="cv-skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="cv-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="cv-section">
          <div className="cv-section-title">
            <p className="cv-label">SECTION / EDUCATION</p>
            <h2>Education.</h2>
          </div>
          <div className="cv-education">
            <div>
              <p className="cv-label">BABCOCK UNIVERSITY</p>
              <h3>B.Sc. (Honours), Software Engineering</h3>
              <p>
                Software engineering, data structures, software architecture and
                computer organisation.
              </p>
            </div>
            <Link href="/about" className="cv-text-link">
              Background & credentials <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
        <footer className="cv-next">
          <p className="cv-label">SECTION / NEXT</p>
          <h2>
            The résumé is the overview.
            <br />
            <em>The work goes deeper.</em>
          </h2>
          <p>
            Explore the case studies for architecture and implementation
            decisions, or try the engineering lab.
          </p>
          <div className="cv-actions">
            <a href={generalResume} download className="cv-download">
              <Download size={16} /> General résumé PDF
            </a>
            <Link href="/projects" className="cv-text-link">
              Selected work <ArrowUpRight size={15} />
            </Link>
            <Link href="/lab" className="cv-text-link">
              Engineering Lab <ArrowUpRight size={15} />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
