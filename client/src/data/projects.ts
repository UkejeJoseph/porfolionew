export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  isPrivate?: boolean;
  category: 'web-design' | 'web-development' | 'all';
}

export const projects: Project[] = [
  {
    id: "no-rio",
    title: "No RIO - B2C Rental Website",
    description: "A comprehensive rental platform with responsive frontend and RESTful APIs, featuring user authentication and protected routes",
    image: "https://raw.githubusercontent.com/UkejeJoseph/portfolio-assets/main/no-rio.jpg",
    technologies: ["React.js", "CSS3", "HTML5", "Bootstrap", "Flask", "MongoDB", "OAuth2.0"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://github.com/UkejeJoseph",
    category: "web-development"
  },
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchen Application",
    description: "Responsive Single Page Application with lazy loading, NgRx state management, and RESTful API integration",
    image: "https://raw.githubusercontent.com/UkejeJoseph/portfolio-assets/main/cloud-kitchen.jpg",
    technologies: ["Angular 12", "TypeScript", "SCSS", "Angular Material", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://github.com/UkejeJoseph",
    category: "web-development"
  },
  {
    id: "myc-transit",
    title: "MYC Transit: Fair Estimation Application",
    description: "Machine learning-powered transit fare estimation app with Google Places API integration and XGBoost ML model",
    image: "https://raw.githubusercontent.com/UkejeJoseph/portfolio-assets/main/myc-transit.jpg",
    technologies: ["React.js", "CSS3", "Flask", "Google Places API", "XGBoost", "Machine Learning"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://github.com/UkejeJoseph",
    category: "web-development"
  },
  {
    id: "free-tool",
    title: "Free Tool",
    description: "Collection of free development tools",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/freetool.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://freetool.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "oxy-ui",
    title: "Oxy UI",
    description: "React UI component library with TypeScript support",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/oxy-ui.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "NPM"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://oxyui.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "snippet-vault",
    title: "Snippet Vault",
    description: "Code snippet management platform with authentication",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/snippetvault.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://snippetvault.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "codesnapx",
    title: "CodeSnapx",
    description: "Code screenshot and sharing tool",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/codesnap.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://codesnapx.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "blog-app",
    title: "Blog App",
    description: "Full-featured blogging platform with Firebase backend",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/Next-Blog-App.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://blog9.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "Real-time currency conversion application",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/Currency-Converter.png",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/vishxly/Currency-Converter",
    liveUrl: "https://currencyy-converterr.vercel.app/",
    category: "web-development"
  },
  {
    id: "draw-app",
    title: "Draw App",
    description: "Collaborative drawing application with authentication",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/draw.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Kinde"],
    githubUrl: "https://github.com/vishxly/Draw-App",
    liveUrl: "https://draw-app-seven.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Personal finance management application",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/expense.png",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/vishxly/Expense-Track/tree/main",
    liveUrl: "https://expense-track-iota.vercel.app/",
    category: "web-development"
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "URL shortening service with analytics",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/url-short.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/vishxly/Url-Shortner",
    liveUrl: "https://url-shortnerx.vercel.app/",
    category: "web-development"
  },
  {
    id: "myntra-clone",
    title: "Myntra Clone",
    description: "E-commerce platform clone with full functionality",
    image: "https://raw.githubusercontent.com/vishxly/Myntra-Clone/main/Myntra%20Clone.png",
    technologies: ["React.js", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/vishxly/Myntra-Clone",
    liveUrl: "https://github.com/vishxly/Myntra-Clone",
    category: "web-development"
  },
  {
    id: "job-portal",
    title: "Job Portal",
    description: "Job search and application platform",
    image: "https://raw.githubusercontent.com/vishxly/Job-Portal/main/Job%20Portal.png",
    technologies: ["React.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/vishxly/Job-Portal",
    liveUrl: "https://job-portal-eight-gamma.vercel.app/",
    category: "web-development"
  },
  {
    id: "next-ai-chat",
    title: "Next AI Chat App",
    description: "AI-powered chatbot application with vector search",
    image: "https://raw.githubusercontent.com/vishxly/NextAI-Chatbot/master/Next%20Ai%20App.png",
    technologies: ["Next.js", "Clerk", "OpenAI", "Tailwind CSS", "Shadcn UI", "PineCone"],
    githubUrl: "https://github.com/vishxly/NextAI-Chatbot",
    liveUrl: "https://github.com/vishxly/NextAI-Chatbot",
    category: "web-development"
  },
  {
    id: "file-sharing",
    title: "File Sharing App",
    description: "Secure file sharing platform with Firebase storage",
    image: "https://raw.githubusercontent.com/vishxly/File-Sharing-App/main/File%20Sharing%20App.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/vishxly/File-Sharing-App",
    liveUrl: "https://file-sharing-app-xi.vercel.app/",
    category: "web-development"
  },
  {
    id: "trello-clone",
    title: "Trello",
    description: "Task management application inspired by Trello",
    image: "https://raw.githubusercontent.com/vishxly/Trello/main/src/assets/trello.png",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/vishxly/Trello",
    liveUrl: "https://trello-tau-rosy.vercel.app/",
    category: "web-development"
  },
  {
    id: "bookmark-extension",
    title: "Bookmark Extension",
    description: "Browser extension for bookmark management",
    image: "https://raw.githubusercontent.com/vishxly/Bookmark/main/src/assets/bookmark-ext.png",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/vishxly/Bookmark",
    liveUrl: "https://bookmark-vert.vercel.app/",
    category: "web-development"
  }
];
