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
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    category: "languages"
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    category: "languages"
  },
  {
    name: "C#",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    category: "languages"
  },
  {
    name: "SQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
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
  {
    name: "Angular",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    category: "frameworks"
  },
  {
    name: "Vue.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
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
  {
    name: "Django",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
    category: "backend"
  },
  {
    name: "Flask",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
    category: "backend"
  },
  {
    name: "GraphQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
    category: "backend"
  },
  {
    name: ".NET",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
    category: "backend"
  },
  {
    name: "Spring Boot",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
    category: "backend"
  },
  {
    name: "PHP",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    category: "backend"
  },
  {
    name: "Laravel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
    category: "backend"
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
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
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    category: "tools"
  },
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
    category: "tools"
  },
  {
    name: "GCP",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
    category: "tools"
  },
  {
    name: "Azure",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    category: "tools"
  },
  {
    name: "Linux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    category: "tools"
  }
];
