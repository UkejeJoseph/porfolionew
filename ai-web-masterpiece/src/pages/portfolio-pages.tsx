import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — Joseph Ukeje`;
    window.scrollTo(0, 0);
  }, [title]);
}
export { default as WorkPage } from "./project-studies";
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
export { default as ResumePage } from "./resume-page";
