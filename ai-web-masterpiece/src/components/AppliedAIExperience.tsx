import { ArrowUpRight } from "lucide-react";
import "@/styles/resume-page.css";
import { professionalExperience } from "@/data/professional-experience";

export const isAppliedAIAchievement = (text: string) =>
  text.includes("LiteLLM AI gateway");
const achievements = [
  "Engineered a **client-facing agentic RAG and natural-language-to-SQL system**, enabling stakeholders to query live databases through **Slack** using **LangChain, LangGraph, LangSmith, PostgreSQL/pgvector, FastAPI and the Slack SDK**, packaged with Docker and uv.",
  "Implemented **typed Pydantic models and explicit validation** around AI and ingestion workflows, alongside **PII detection/redaction, event persistence, audit logging and pytest coverage**; instrumented AI usage with **OpenTelemetry**.",
  "Architected **retrieval pipelines using embeddings, semantic search, PostgreSQL, Redis and Amazon S3**; built **LLM evaluation frameworks** comparing OpenAI, Anthropic and open-source models on **accuracy, latency and cost**.",
  "Used **Redis LangCache and Langfuse** for client semantic caching and AI observability, connecting retrieval and generation traces with **latency, token usage and model-cost analysis**; used **MLflow** to organise evaluation experiments.",
  "Instruction-fine-tuned **Mistral and Llama-2 models on premises** for client translation and retrieval-augmented generation, supporting secure inference and reducing third-party dependency costs by **30%**.",
  "Engineered **LLM-powered SQL lineage analysis in Python**, extracting table and column dependencies and created or modified outputs from complex SQL scripts.",
  ...professionalExperience
    .find((p) => p.id === "interswitch")!
    .achievements.filter(isAppliedAIAchievement),
];

function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\*\*.*?\*\*)/g)
        .map((p, i) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={i}>{p.slice(2, -2)}</strong>
          ) : (
            p
          ),
        )}
    </>
  );
}

export default function AppliedAIExperience() {
  return (
    <section
      className="applied-ai-experience"
      aria-label="Applied AI at Interswitch"
    >
      <p className="applied-ai-kicker">CLIENT ENGAGEMENTS / PRODUCTION AI</p>
      <h5>Applied AI</h5>
      <ul>
        {achievements.map((text, i) => (
          <li key={i}>
            <Emphasis text={text} />
          </li>
        ))}
      </ul>
      <div className="applied-ai-project-links">
        <a href="/projects/retrieval-sql-assistant">
          Retrieval & SQL case study <ArrowUpRight size={13} />
        </a>
        <a
          href="https://github.com/UkejeJoseph/lablens"
          target="_blank"
          rel="noreferrer"
        >
          LabLens — maintained copy <ArrowUpRight size={13} />
        </a>
        <a
          href="https://github.com/UkejeJoseph/sqldeps"
          target="_blank"
          rel="noreferrer"
        >
          SQLDeps — maintained copy <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
