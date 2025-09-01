import { skills } from "@/data/skills";
import SkillIcon from "@/components/skill-icon";

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
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        
        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="border-l-2 border-primary pl-6" data-testid="education-babcock">
            <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
            <p className="text-primary mb-2">Babcock University, Nigeria (GPA: 4.1)</p>
            <p className="text-muted-foreground mb-2">Jan '20 — Jul '24</p>
            <p className="text-muted-foreground">Relevant Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Combinatorics, Machine Learning</p>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6" data-testid="experience-huawei">
              <h4 className="text-xl font-semibold">Software Engineer/Developer</h4>
              <p className="text-primary mb-2">Huawei Technologies (Feb '25 — Present)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Redesigned rebuild of an internal Tech Community application using React.js, Node.js, and AWS services, resulting in a 30% increase in user satisfaction and improved functionality.</li>
                <li>• Developed advanced React components and implemented comprehensive testing strategies using Jest and Postman, accelerating the development process by 20% and ensuring a 95% bug-free release.</li>
                <li>• Collaborated effectively in a 3-person team, conducting peer code reviews and maintaining project quality metrics, which contributed to completing project milestones 10% ahead of schedule.</li>
                <li>• Designed/Developed a Cash Catalogue page by developing a Vue.js component to display different redemption options for installers, improving User Experience.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6" data-testid="experience-vision-forge">
              <h4 className="text-xl font-semibold">Junior Software Engineer</h4>
              <p className="text-primary mb-2">Vision Forge AI Automations, Lagos (Remote) (Jan '24 — Present)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Developed and implemented an API strategy with Spring Boot, integrating 5 microservices to synchronize data updates, reducing data-related errors reported by the QA team by 50%.</li>
                <li>• Optimized system performance by refactoring Java and PL/SQL codebases, reducing system response time by 15%.</li>
                <li>• Applied performance testing methodologies to ensure system stability under load.</li>
                <li>• Utilized RabbitMQ for event-driven communication between system components, enabling real-time data flow and seamless integration.</li>
                <li>• Contributed to feature testing with JUnit, achieving over 85% code coverage and enhancing software reliability.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6" data-testid="experience-schlumberger">
              <h4 className="text-xl font-semibold">Full-Stack Developer Intern</h4>
              <p className="text-primary mb-2">Schlumberger Oil and Gas Servicing Limited, Lagos (Jan '23 — Aug '23)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Developed 7 responsive mobile app screens with real-time interactions, improving user engagement across multiple devices.</li>
                <li>• Deployed a secure user authentication system using Express.js, JWT, and cookies, including automatic token refreshing and expiration handling, enhancing application security.</li>
                <li>• Integrated Twilio API to build a robust OAuth2.0 (2FA) system, adhering to OWASP Top 10 security standards, reducing vulnerabilities such as XSS and SQL injection.</li>
                <li>• Orchestrated cloud infrastructure on GCP, managing PostgreSQL databases, configuring and optimizing cloud storage which reduced cloud costs and enhanced data accessibility and processing speeds.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6" data-testid="experience-intrepid">
              <h4 className="text-xl font-semibold">Software Developer Intern</h4>
              <p className="text-primary mb-2">The Intrepid Technologies Chevron, Lagos (Jan '22 — Dec '22)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Collaborated on redesigning 6 webpages, implementing responsiveness and optimizing image assets, increasing page load speeds by 35% and enhanced user experience across devices.</li>
                <li>• Assisted in migrating backend services to Django and optimizing database queries, which streamlined development and improved API performance, reducing average response times across pages by up to 200ms.</li>
                <li>• Utilized Git for version control and participated in regular code reviews, helping to reduce the bug backlog by 20% over a 3-month period.</li>
                <li>• Employed RPA analytics tools to monitor and evaluate automation performance metrics, producing detailed reports to guide strategy refinements and demonstrate the impact of automation.</li>
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
