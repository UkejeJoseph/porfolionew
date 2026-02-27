import GitHubContributions from "@/components/github-contributions";
import { Code2, Users, Briefcase, FileText } from "lucide-react";
import LiveVisitors from "@/components/ui/live-visitors";

export default function Home() {
  const experienceCards = [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description: "Developed end-to-end solutions using React, Node.js, and MongoDB.",
      icon: <Code2 className="w-10 h-10 mb-4 text-primary" />
    },
    {
      id: "community",
      title: "Developer Community",
      description: "I run a developer community platform on daily.dev with over 2 thousand active members.",
      icon: <Users className="w-10 h-10 mb-4 text-primary" />
    },
    {
      id: "freelance",
      title: "Freelancer",
      description: "Designed intuitive user interfaces and built web solutions for various clients.",
      icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />
    },
    {
      id: "blogging",
      title: "Technical Blogging",
      description: "I also write technical blogs with over 1 million views.",
      icon: <FileText className="w-10 h-10 mb-4 text-primary" />
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">About Me</h2>
          <LiveVisitors />
        </div>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed" data-testid="about-description">
          Motivated and adaptable Full-Stack Developer with experience in building scalable web applications.
          Strong front-end development expertise, complemented by growing skills in backend technologies.
          Proficient in JavaScript, TypeScript, React.js, Vue.js, and Node.js. Adept at problem-solving and
          collaborating in dynamic teams. Passionate about continuous learning and contributing to innovative projects.
        </p>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
              data-testid={`experience-card-${card.id}`}
            >
              {card.icon}
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>

        {/* GitHub Contributions */}
        <GitHubContributions />
      </div>
    </div>
  );
}
