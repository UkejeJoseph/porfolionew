import GitHubContributions from "@/components/github-contributions";

export default function Home() {
  const experienceCards = [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description: "Developed end-to-end solutions using React, Node.js, and MongoDB.",
      icon: "https://www.vshall.me/images/exp1.svg"
    },
    {
      id: "community",
      title: "Developer Community",
      description: "I run a developer community platform on daily.dev with over 2 thousand active members.",
      icon: "https://www.vshall.me/images/exp2.svg"
    },
    {
      id: "freelance",
      title: "Freelancer",
      description: "Designed intuitive user interfaces and built web solutions for various clients.",
      icon: "https://www.vshall.me/images/exp3.svg"
    },
    {
      id: "blogging",
      title: "Technical Blogging",
      description: "I also write technical blogs with over 1 million views.",
      icon: "https://www.vshall.me/images/exp4.svg"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="text-muted-foreground text-sm mb-8" data-testid="page-views-about">
          (247 views)
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
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              data-testid={`experience-card-${card.id}`}
            >
              <img 
                src={card.icon} 
                alt={card.title} 
                className="w-12 h-12 mb-4"
              />
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
