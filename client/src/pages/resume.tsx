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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all text-sm font-medium"
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
            <p className="text-muted-foreground">Relevant Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Combinatorics, Machine Learning</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>

          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6" data-testid="experience-interswitch">
              <h4 className="text-xl font-semibold">Senior Software Engineer</h4>
              <p className="text-primary mb-2">Interswitch Group, Lagos, Nigeria / Germany (Apr '25 — Present)</p>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• **Core Payment Integration (C# / .NET Core 8)**: Designed and built a complete ISO 20022 integration layer (pacs.008, pacs.002, pacs.028) with XML canonicalization (C14N), digital signatures, and namespace standardization, eliminating 100% of payment failures for Tier-1 banks.</li>
                <li>• **TCP Servers & Microservices**: Engineered a custom .NET Core 8 TCP server with lifecycle management and idempotency keys, and designed/scaled Spring Boot microservices for onboarding and modification, improving ERP operations efficiency by 70%.</li>
                <li>• **IAM & Security Gateway**: Architected and deployed enterprise-grade Identity and Access Management (IAM) systems with LDAP and OAuth 2.0 / JWT (IdentityServer/Duende), resolving 100% of Veracode high-severity vulnerabilities.</li>
                <li>• **Resilience & Observability**: Optimized performance and uptime using Redis caching, retry/error handling, Prometheus/Grafana dashboards, and Serilog structured logging pipelines, reducing MTTR and cut downtime by 60%.</li>
                <li>• **AI Customer Chatbot**: Designed and developed an AI-powered customer support chatbot leveraging NLP models and contextual search, reducing support ticket volume by 40% and response times by 60%.</li>
                <li>• **Leadership & Deployments**: Led architecture discussions (ADRs), code reviews, and enterprise deployments using Docker and WebLogic, hardening infrastructure for Tier-1 banks.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-huawei">
              <h4 className="text-xl font-semibold">Software Engineer</h4>
              <p className="text-primary mb-2">Huawei Technologies, Nigeria (Jun '24 — Apr '25)</p>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• **API & Microservices**: Architected ASP.NET Core Web API microservices with EF Core for multi-tenant data management, handling enterprise-scale API traffic.</li>
                <li>• **Tech Community Application**: Redesigned and rebuilt an internal Tech Community application leveraging ReactJS, Node.js, and AWS services, delivering a 30% increase in user satisfaction.</li>
                <li>• **Rewards Management Service**: Designed and implemented a Cash Catalogue rewards management feature using Vue.js and C# backend, automating reward redemption end-to-end.</li>
                <li>• **CI/CD Pipelines**: Engineered Azure DevOps and Jenkins CI/CD pipelines with automated testing gates, reducing deployment times by 25%.</li>
                <li>• **Uptime & Messaging**: Architected an async RabbitMQ notification pipeline with broker replicas for automatic failover, achieving 99.9% uptime for customer-facing alerts.</li>
                <li>• **Testing & QA**: Established comprehensive testing strategies using xUnit, Moq, FluentAssertions, Jest, and Postman, achieving a 95% bug-free release rate.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-vision-forge">
              <h4 className="text-xl font-semibold">Software Engineer</h4>
              <p className="text-primary mb-2">Vision Forge AI Automations, Nigeria (Remote) (Jan '24 — Jun '24)</p>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• **Integration Library**: Developed a Spring Boot and .NET Core 8 microservice integration library using MassTransit over RabbitMQ, reducing QA-reported data errors by 50%.</li>
                <li>• **Refactoring & Performance**: Refactored legacy Java, C#, and PL/SQL codebases to enhance efficiency, cutting average API response times by 15%.</li>
                <li>• **API Modernization**: Architected a GraphQL (Hot Chocolate) API layer in .NET Core with DataLoader batching to optimize frontend dashboard load performance.</li>
                <li>• **Testing & Reliability**: Increased code reliability by expanding JUnit, xUnit, and Moq test coverage to over 85%, utilizing Testcontainers for integration testing.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-schlumberger">
              <h4 className="text-xl font-semibold">Software Engineer / Full-Stack Developer</h4>
              <p className="text-primary mb-2">Schlumberger Oil and Gas Servicing Limited, Lagos, Nigeria (Jan '23 — Dec '23)</p>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• **API & Auth Security**: Designed and delivered C# / ASP.NET Core and Express.js RESTful Web APIs, integrating JWT + OAuth 2.0 authentication, automatic token refresh, and Twilio 2FA aligned with OWASP Top 10.</li>
                <li>• **Identity & Access**: Implemented ASP.NET Core Identity with custom middleware and designed SQL Server and PostgreSQL data models for high-volume operational reporting.</li>
                <li>• **Cloud Infrastructure & CI/CD**: Orchestrated cloud infrastructure on Azure and GCP, building C#-based Azure DevOps CI/CD pipelines, reducing cloud infrastructure costs by 18%.</li>
                <li>• **Mobile Apps**: Developed 7 cross-platform React Native mobile app screens with real-time interactions, improving user engagement and responsiveness.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-intrepid">
              <h4 className="text-xl font-semibold">Software Developer</h4>
              <p className="text-primary mb-2">The Intrepid Technologies Chevron, Lekki, Nigeria (Jan '22 — Dec '22)</p>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• **Re-engineering & Web Pages**: Re-engineered C#/.NET and Django backend services across six enterprise web applications, reducing average API response times by 200ms and boosting page load speeds by 35%.</li>
                <li>• **Database Tuning**: Implemented connection pooling and query optimization using Dapper and Entity Framework Core across Oracle, PostgreSQL, and SQL Server data layers, boosting throughput by 35%.</li>
                <li>• **Analytics & Automation**: Engineered RPA-integrated .NET analytics modules in C# to automate data collation and report generation end-to-end, reducing reporting cycle times by 40%.</li>
                <li>• **Systematic QA**: Strengthened code quality and version control processes with Git and systematic code reviews, reducing the bug backlog by 20%.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-6" data-testid="experience-freelance">
              <h4 className="text-xl font-semibold">Freelance .NET / C# Developer</h4>
              <p className="text-primary mb-2">Self-Employed (Upwork), Remote (Jan '20 — Dec '21)</p>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• **End-to-End Delivery**: Independently designed and delivered full-stack C# / ASP.NET Core applications (EF Core data models, RESTful Web API layers, and Azure deployment pipelines) for fintech and SaaS clients.</li>
                <li>• **Server Administration**: Managed Linux server environments for hosting, deployment monitoring, and performance optimization across client projects.</li>
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
