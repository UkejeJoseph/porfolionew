import { ChevronDown, ExternalLink, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  coursework: string[];
  achievements: string[];
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Babcock University",
    period: "January 2020 - July 2024",
    location: "Ogun state, Nigeria",
    score: "3.93/5.00",
    scoreLabel: "GPA",
    coursework: [
      "Data Structures & Algorithms",
      "Objects & Design",
      "Computer Organization & Programming",
      "Combinatorics",
      "Machine Learning",
    ],
    achievements: [
      "Graduated with High Honors",
      "Participated in multiple coding hackathons",
      "Led technical workshops for junior students"
    ],
  }
];

const certificationsData = [
  {
    name: "Oracle Cloud Infrastructure DevOps Certificate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2AE32043664103BD1F363F0CFB45953132E6DD1E0DC56DACCEF889C6FC349FE0"
  },
  {
    name: "Oracle Cloud Infrastructure Developer Certificate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6249543B0DB4347806CEC83C635E2E1A7E83F74B9DE58F219CE7E340B93BA84F"
  },
  {
    name: "Oracle 12c Administrator Certified Associate (OCA)",
    issuer: "New Horizons",
    date: "Jul 2024",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6249543B0DB4347806CEC83C635E2E1A7E83F74B9DE58F219CE7E340B93BA84F"
  },
  {
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "AWS",
    link: "https://drive.google.com/file/d/1484ZjBkBQ6WRXPBl1-RPtCFhDdVezPji/view?usp=sharing"
  },
  {
    name: "UiPath RPA Certification",
    issuer: "UiPath",
    date: "Jun 2023",
    link: "https://cloud.uipath.com/intrepidtechnologiesltd/academy_/achievements"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm text-muted-foreground font-body">Education</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Academic Journey
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-base text-muted-foreground font-body leading-relaxed max-w-md lg:ml-auto">
              A strong academic foundation combined with hands-on experience in technology, leadership, and innovation.
            </p>
          </div>
        </div>

        {/* Education List */}
        <Accordion type="single" collapsible>
          {educationData.map((edu, index) => (
            <AccordionItem
              key={index}
              value={`edu-${index}`}
              className="border-t border-border last:border-b hover:bg-tertiary/50 transition-colors -mx-6 px-6 lg:-mx-20 lg:px-20"
            >
              <AccordionTrigger className="py-8 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                <div className="grid lg:grid-cols-12 gap-4 items-center w-full text-left">
                  {/* Degree & Period */}
                  <div className="lg:col-span-5">
                    <h3 className="font-display text-lg font-light text-foreground">
                      {edu.degree}
                    </h3>
                  </div>

                  {/* Institution */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-muted-foreground font-body">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Score & Location */}
                  <div className="lg:col-span-3 flex justify-end gap-2 items-center">
                    <span className="px-3 py-1.5 text-xs font-body border border-border rounded-full">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                    <span className="px-3 py-1.5 text-xs font-body border border-border rounded-full hidden md:inline-block">
                      {edu.location}
                    </span>
                    <ChevronDown className="chevron h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ml-2" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="lg:pl-[calc(41.666%+1rem)] space-y-6">
                  {/* Coursework */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-tertiary text-xs text-muted-foreground rounded-full font-body hover:text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Achievements & Activities
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground font-body flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-foreground" />
            <h3 className="font-display text-2xl font-light text-foreground">
              Certifications & Licenses
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-tertiary">
                    <Award className="w-5 h-5 text-foreground" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-display text-base font-medium text-foreground mb-2 line-clamp-2">
                  {cert.name}
                </h4>
                <div className="flex items-center justify-between text-sm text-muted-foreground font-body">
                  <span>{cert.issuer}</span>
                  {cert.date && <span>{cert.date}</span>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
