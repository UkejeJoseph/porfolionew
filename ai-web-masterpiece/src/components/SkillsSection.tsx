import { ArrowUpRight } from "lucide-react";
import AppliedAIExperience, {
  isAppliedAIAchievement,
} from "@/components/AppliedAIExperience";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { professionalExperience as experiences } from "@/data/professional-experience";

function AchievementText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Java",
      "C#",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Solidity",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "Spring Boot",
      "ASP.NET Core",
      "NestJS",
      "React",
      "Next.js",
      "JPA/Hibernate",
      "EF Core",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "REST",
      "gRPC",
      "GraphQL",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Distributed Systems",
    skills: [
      "Kafka",
      "RabbitMQ",
      "Azure Service Bus",
      "CQRS",
      "Idempotency",
      "Concurrency",
      "Event-Driven Architecture",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Terraform",
      "Helm",
      "Jenkins",
      "GitHub Actions",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span className="text-sm text-muted-foreground font-body">
                Experiences
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Explore My Development Journey
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-base text-muted-foreground font-body leading-relaxed max-w-md lg:ml-auto mb-6">
              Across 7 years, I've owned backend and product systems across
              fintech, payments, enterprise SaaS, oil and gas, and AI
              automation—from architecture through production operations.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-animation"
            >
              Book A Call
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Experiences List */}
        <Accordion
          type="single"
          collapsible
          defaultValue="exp-0"
          className="mb-20"
        >
          {experiences.map((exp, index) => (
            <AccordionItem
              key={index}
              value={`exp-${index}`}
              className="border-t border-border last:border-b hover:bg-tertiary/50 transition-colors -mx-6 px-6 lg:-mx-20 lg:px-20"
            >
              <AccordionTrigger className="py-8 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                <div className="grid lg:grid-cols-12 gap-4 items-center w-full text-left">
                  {/* Company & Period */}
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-lg font-light text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      • {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-8">
                    <p className="text-sm text-muted-foreground font-body flex items-center gap-2">
                      <span>{exp.description}</span>
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="lg:pl-[calc(33.333%+1rem)] space-y-4">
                  <div>
                    <h4 className="font-display text-base font-medium text-foreground mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {exp.fullDescription}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements
                        .filter(
                          (text) =>
                            exp.id !== "interswitch" ||
                            !isAppliedAIAchievement(text),
                        )
                        .map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground font-body flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                            <span className="min-w-0">
                              <AchievementText text={achievement} />
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <p
                    className="border-t border-border pt-4 text-xs text-muted-foreground leading-relaxed"
                    data-testid={`tech-stack-${exp.id}`}
                  >
                    <span className="font-medium text-foreground">
                      Tech stack:
                    </span>{" "}
                    {exp.tags.join(" · ")}
                  </p>
                  {exp.id === "interswitch" && <AppliedAIExperience />}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Skills Grid */}
        <div>
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-sm text-muted-foreground font-body">
              Tech Stack
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-display text-base font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-tertiary text-xs text-muted-foreground rounded-full font-body hover:text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
