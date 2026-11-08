import { useEffect } from "react";
import { Download, ArrowUpRight } from "lucide-react";
import WorkCaseStudies from "@/components/work-case-studies";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { Link } from "@/lib/portfolio-router";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — Joseph Ukeje`;
    window.scrollTo(0, 0);
  }, [title]);
}
export function WorkPage() {
  useTitle("Work");
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl mb-9 font-display">Projects</h1>
        <WorkCaseStudies />
      </div>
      <ProjectsSection />
    </div>
  );
}
export function AboutPage() {
  useTitle("About");
  return (
    <div className="pt-20">
      <AboutSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
export function ContactPage() {
  useTitle("Contact");
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
export function ResumePage() {
  useTitle("Résumé");
  return (
    <div className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6">
        EXPERIENCE & OWNERSHIP
      </p>
      <h1 className="text-5xl font-display mb-6">Résumé</h1>
      <p className="text-muted-foreground leading-8 mb-8 max-w-2xl">
        Senior Software Engineer working across payments, distributed backend
        systems and applied AI. Explore the work behind the experience, or read
        the full résumé.
      </p>
      <div className="flex flex-wrap gap-5 mb-9">
        <a
          href="/resume_joseph_ukeje.pdf"
          download
          className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3 text-sm"
        >
          <Download size={16} /> Download résumé
        </a>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm"
        >
          Explore selected work <ArrowUpRight size={16} />
        </Link>
      </div>
      <iframe
        title="Joseph Ukeje résumé PDF"
        src="/resume_joseph_ukeje.pdf"
        className="w-full h-[850px] border border-border rounded-xl bg-white"
      />
      <p className="text-xs text-muted-foreground mt-4">
        If the PDF viewer is unavailable, use the download link above.
      </p>
    </div>
  );
}
