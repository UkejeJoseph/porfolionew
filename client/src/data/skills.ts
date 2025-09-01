export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'backend' | 'tools';
}

export const skills: Skill[] = [
  // Languages
  {
    name: "HTML",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/html.png",
    category: "languages"
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/css.png",
    category: "languages"
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/js.png",
    category: "languages"
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/ts.png",
    category: "languages"
  },
  
  // Frameworks & Libraries
  {
    name: "React.js",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/react.png",
    category: "frameworks"
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/7e3324af30104ddae7f7ccad115c03b512db8644/nextjs.svg",
    category: "frameworks"
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/7e3324af30104ddae7f7ccad115c03b512db8644/redux.svg",
    category: "frameworks"
  },
  {
    name: "Bootstrap",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/bootstrap.png",
    category: "frameworks"
  },
  {
    name: "Tailwind CSS",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/7e3324af30104ddae7f7ccad115c03b512db8644/tailwind-css.svg",
    category: "frameworks"
  },
  {
    name: "Material UI",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/materialui.png",
    category: "frameworks"
  },

  // Backend & Databases
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/node.png",
    category: "backend"
  },
  {
    name: "Express.js",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/7e3324af30104ddae7f7ccad115c03b512db8644/express.svg",
    category: "backend"
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/7e3324af30104ddae7f7ccad115c03b512db8644/mongodb.svg",
    category: "backend"
  },
  {
    name: "JWT",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/jwt.png",
    category: "backend"
  },
  {
    name: "Firebase",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/firebase.png",
    category: "backend"
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/postgresql.png",
    category: "backend"
  },

  // Tools & DevOps
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/git.png",
    category: "tools"
  },
  {
    name: "GitHub",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/githubb.png",
    category: "tools"
  },
  {
    name: "Postman",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/postman.png",
    category: "tools"
  },
  {
    name: "VS Code",
    icon: "https://raw.githubusercontent.com/vishxly/Certification/main/vscode.png",
    category: "tools"
  },
  {
    name: "Prisma",
    icon: "https://img.icons8.com/?size=512&id=aqb9SdV9P8oC&format=png",
    category: "tools"
  },
  {
    name: "Drizzle",
    icon: "https://console.dev/img/favicons/orm.drizzle.team.jpg",
    category: "tools"
  }
];
