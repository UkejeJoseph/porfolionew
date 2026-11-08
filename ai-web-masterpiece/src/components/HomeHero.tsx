import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/portfolio-router";
import HomeWorkbench from "./HomeWorkbench";
import profilePhoto from "@/assets/profile.png";
import generalResume from "@/assets/Joseph_Ukeje_Senior_Software_Engineer_Portfolio_Resume_V1.pdf";

export default function HomeHero() {
  return (
    <section className="home-shell home-hero">
      <div className="home-hero-intro">
        <div className="home-identity">
          <img src={profilePhoto} alt="Joseph Ukeje" />
          <div>
            <span>Hi, I’m Joseph Ukeje.</span>
            <small>Backend systems · Payments · Applied AI</small>
          </div>
        </div>
        <h1>Hi</h1>
        <p className="home-hero-role">Senior Software Engineer.</p>
        <p className="home-hero-summary">
          I’m a Senior Software Engineer architecting high-performance fintech
          platforms, distributed payment systems and applied AI systems. I build
          event-driven services that stay correct under concurrency, recover from
          partial failures and remain observable in production—from inter-bank
          transfers and card processing to retrieval and agentic automation.
        </p>
        <div className="home-hero-stats">
          <div>
            <strong>
              7<span>years</span>
            </strong>
            <p>Software engineering experience</p>
          </div>
          <div>
            <strong>
              30+
              <ArrowUpRight size={19} />
            </strong>
            <p>Projects shipped</p>
          </div>
        </div>
        <div className="home-hero-actions">
          <Link href="/projects" className="home-primary-button">
            Explore my work <ArrowUpRight size={17} />
          </Link>
          <a href={generalResume} download className="home-text-link">
            General résumé PDF <ArrowUpRight size={17} />
          </a>
        </div>
        <a className="home-scroll-link" href="#selected-work">
          Scroll to the work <ArrowDown size={15} />
        </a>
      </div>
      <HomeWorkbench />
    </section>
  );
}
