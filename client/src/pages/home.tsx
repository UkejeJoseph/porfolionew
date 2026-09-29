import { Plus, Download } from "lucide-react";
import GitHubContributions from "@/components/github-contributions";
import LiveVisitors from "@/components/ui/live-visitors";

const highlights = [
  {
    text: "Senior Software Engineer with 6+ years delivering production systems across fintech, payments, enterprise SaaS, oil and gas, and AI automation.",
  },
  {
    text: "At Interswitch, I engineer high-throughput payment and core-banking infrastructure with Java/Spring Boot, C#/.NET, Kafka, Redis, and Kubernetes at Tier-1 bank transaction volumes.",
  },
  {
    text: "I work across backend and product delivery: Java 21, Spring Boot, C#/.NET, Node.js/NestJS, React/TypeScript, REST/gRPC APIs, and event-driven systems.",
  },
  {
    text: "My production work includes ISO 20022/SWIFT payment flows, Open Banking and AML/KYC integrations, multi-tenant APIs, immutable audit trails, and observable cloud deployments.",
  },
  {
    text: "I own systems from requirements and architecture through testing, delivery, incident investigation, performance optimisation, and mentoring engineers.",
  },
];

export default function Home() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-3xl md:text-4xl font-light tracking-tight text-foreground"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            About Me
          </h2>
          <LiveVisitors />
        </div>

        {/* Intro paragraph */}
        <p
          className="text-base text-muted-foreground leading-relaxed italic mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I turn complex engineering problems into clean, scalable solutions. My approach blends
          deep technical rigor with a product mindset — building systems that don't just work,
          but thrive under pressure. Ready for the next challenge.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { stat: "6+", label: "Years experience" },
            { stat: "30+", label: "Projects shipped" },
            { stat: "6", label: "Companies" },
            { stat: "10+", label: "Institutions served" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-transparent border border-foreground/10 rounded-2xl p-6 hover:border-foreground/25 transition-all duration-300"
            >
              <span
                className="text-4xl font-light tracking-tight text-foreground block mb-1"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {item.stat}
              </span>
              <p
                className="text-xs text-muted-foreground uppercase tracking-wider"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-4 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-1">
                <Plus size={12} className="text-background" />
              </div>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Download CV */}
        <div className="mb-12">
          <a
            href="/resume_joseph_ukeje.pdf"
            download
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 rounded-full text-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Download size={16} className="group-hover:animate-bounce" />
            Download CV
          </a>
        </div>

        {/* GitHub Contributions */}
        <GitHubContributions />
      </div>
    </div>
  );
}
