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
        
        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6" data-testid="experience-yugandhara">
              <h4 className="text-xl font-semibold">Software Developer</h4>
              <p className="text-primary mb-2">Yugandhara Technologies (Pune)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Built a full-stack Sports Management App using Next.js, Node.js, AWS Lambda, and DynamoDB.</li>
                <li>• Implemented role-based authentication to provide secure and distinct access flows for Players and Coaches.</li>
                <li>• Developed a scheduling and booking system for coaching sessions and events with Razorpay integration.</li>
                <li>• Implemented an Admin dashboard to approve coach slots, manage bookings, and edit events and courts.</li>
                <li>• Engineered scalable serverless APIs using AWS Lambda and API Gateway, ensuring cost efficiency and high availability.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-primary pl-6" data-testid="experience-bharat-tech">
              <h4 className="text-xl font-semibold">Frontend Developer</h4>
              <p className="text-primary mb-2">Bharat Tech (Remote)</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Played a key role in designing and developing an HRMS web application, ensuring seamless functionality and an exceptional user experience.</li>
                <li>• Led the development of 'Recag' from scratch, contributing to the landing page, dashboard, and all sections.</li>
                <li>• Collaborated with the team to create a robust and user-friendly interface, ensuring a smooth user experience.</li>
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
