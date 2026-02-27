import { skills } from "@/data/skills";
import SkillIcon from "@/components/skill-icon";
import LiveVisitors from "@/components/ui/live-visitors";

export default function Resume() {
  const skillsByCategory = {
    languages: skills.filter(skill => skill.category === 'languages'),
    frameworks: skills.filter(skill => skill.category === 'frameworks'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Resume</h2>
          <div className="flex items-center gap-3">
            <a
              href="/resume_joseph_ukeje.pdf"
              download
              data-testid="download-resume-btn"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            <LiveVisitors />
          </div>
        </div>
        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="border-l-2 border-primary pl-6" data-testid="education-babcock">
            <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
            <p className="text-primary mb-2">Babcock University, Ogun state, Nigeria (GPA: 3.93/5.00)</p>
            <p className="text-muted-foreground mb-2">Jan '20 — Jul '24</p>
            <p className="text-muted-foreground">Relevant Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Combinatorics, Machine Learning</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6" data-testid="experience-interswitch">
              <h4 className="text-xl font-semibold">Senior Software Engineer</h4>
              <p className="text-primary mb-2">Interswitch, Lagos, Nigeria (Apr '25 — Present)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Architected and deployed enterprise-grade Identity and Access Management (IAM) systems with LDAP, multi-tenant onboarding, and advanced authentication/authorization, cutting onboarding time by 50%.</li>
                <li>• Designed and scaled Spring Boot microservices for onboarding, modification, approvals, and lifecycle management, streaming ERP-driven operations and improving efficiency by 70%.</li>
                <li>• Developed secure APIs and SWIFT message flows integrated with ERP and IBM MQ, boosting transaction throughput by 40%.</li>
                <li>• Optimized resilience with Redis caching, retry/error handling, and audit logging frameworks, reducing downtime by 60%.</li>
                <li>• Led enterprise deployments using Docker, WebLogic, and Veracode remediation, resolving 100% of high-severity vulnerabilities and hardening infrastructure for Tier-1 banks.</li>
                <li>• Designed and developed an AI-powered knowledge-based chatbot for enterprise customer support at Interswitch, leveraging NLP models and contextual search to automate responses, reducing support tickets by 40%.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-huawei">
              <h4 className="text-xl font-semibold">Software Engineer</h4>
              <p className="text-primary mb-2">Huawei Technologies, Nigeria (Jan '25 — Apr '25)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Redesigned and rebuilt an internal Tech Community application leveraging ReactJS, Node.js, and AWS services, delivering a 30% increase in user satisfaction.</li>
                <li>• Developed advanced React components and implemented comprehensive testing strategies using Jest and Postman, accelerating development velocity by 20% and achieving a 95% bug-free release rate.</li>
                <li>• Designed and implemented a Cash Catalogue feature using Vue.js, enabling installers to seamlessly redeem rewards.</li>
                <li>• Optimized front-end architecture and integrated CI/CD pipelines with Jenkins and Git, cutting build times by 25%.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-vision-forge">
              <h4 className="text-xl font-semibold">Software Engineer</h4>
              <p className="text-primary mb-2">Vision Forge AI Automations, Nigeria (Remote) (Jan '24 — Jan '25)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Developed and executed an API integration strategy with Spring Boot, connecting 5 microservices to synchronize data updates and reducing QA-reported data errors by 50%.</li>
                <li>• Refactored Java and PL/SQL codebases to enhance efficiency, cutting system response times by 15%.</li>
                <li>• Leveraged RabbitMQ for event-driven communication, enabling real-time data flow and seamless integration across distributed system components.</li>
                <li>• Increased code reliability by expanding JUnit test coverage to over 85%, strengthening software quality.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-schlumberger">
              <h4 className="text-xl font-semibold">Full-Stack Developer Intern</h4>
              <p className="text-primary mb-2">Schlumberger Oil and Gas Servicing Limited, Lagos, Nigeria (Jan '23 — Aug '23)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Developed 7 cross-platform mobile app screens with real-time interactions, improving user engagement and responsiveness across devices.</li>
                <li>• Integrated secure authentication system with Express.js, JWT, and cookies, implementing automatic token refresh and expiration handling to fortify application security.</li>
                <li>• Integrated Twilio API to deliver OAuth2.0-based two-factor authentication (2FA), fully aligned with OWASP Top 10 security standards.</li>
                <li>• Orchestrated cloud infrastructure on GCP, managing PostgreSQL databases, optimizing cloud storage and configurations to reduce cloud costs by 18%.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-intrepid">
              <h4 className="text-xl font-semibold">Software Developer Intern</h4>
              <p className="text-primary mb-2">The Intrepid Technologies Chevron, Lekki, Nigeria (Jan '22 — Dec '22)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Redesigned and optimized 6 enterprise webpages, implementing responsive layouts and compressed image assets, boosting page load speeds by 35%.</li>
                <li>• Migrated backend services to Django and refined database queries, reducing average API response times by up to 200ms.</li>
                <li>• Strengthened code quality processes by leveraging Git for version control and conducting systematic code reviews, resulting in a 20% reduction in bug backlog.</li>
                <li>• Applied RPA analytics tools to track automation performance, producing actionable reports that guided strategy refinements.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Languages</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {skillsByCategory.languages.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Frameworks & Libraries</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skillsByCategory.frameworks.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Backend & Databases</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skillsByCategory.backend.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tools & DevOps</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skillsByCategory.tools.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
