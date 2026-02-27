export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  isPrivate?: boolean;
  category: 'web-design' | 'web-development' | 'mobile-development' | 'ai-ml' | 'data-science' | 'blockchain' | 'all';
}

export const projects: Project[] = [
  // === FEATURED PROJECTS (shown on Hero page) ===
  {
    id: "crypto-legions",
    title: "CryptoLegions",
    description: "Crypto Legions v2 was the longest-lasting play-to-earn NFT game on the BSC network in 2022 with a lucrative ROI for players. Our game has 8 unique features that no other lucrative play-to-earn game on the BSC network has.",
    image: "/cryptolegions.png",
    technologies: ["React", "Animation", "GSAP", "TailwindCSS", "Solidity"],
    githubUrl: "#",
    liveUrl: "https://cryptolegions.app",
    isPrivate: true,
    category: "blockchain"
  },
  {
    id: "mirage-launchpad",
    title: "Mirage Launchpad",
    description: "Solana Raydium Token Launchpad. Creating an SPL Token on the Solana blockchain. This application allows you to easily create a custom token on Solana.",
    image: "/mirage-launchpad.png",
    technologies: ["Next.js", "React", "Web3"],
    githubUrl: "#",
    liveUrl: "https://rusty-tokenlaunchpad-demo.vercel.app/",
    isPrivate: true,
    category: "blockchain"
  },
  {
    id: "rivet-ai",
    title: "RivetAI",
    description: "An AI-powered workflow platform designed to help writers, producers, and directors streamline their script coverage, scheduling, and budgeting processes. With next-generation tools provided by RivetAI, writers can finally focus on writing and producers can focus on pushing out great content.",
    image: "/rivetai.png",
    technologies: ["Next.js", "Node.js", "AI/ML"],
    githubUrl: "#",
    liveUrl: "https://rivetai.com/",
    isPrivate: true,
    category: "ai-ml"
  },
  {
    id: "stablex",
    title: "StableX - Stablecoin Wallet",
    description: "A stablecoin wallet and exchange platform for merchants and users to transact stablecoins with integrated chat customer support",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Web3.js", "Socket.IO"],
    githubUrl: "https://github.com/UkejeJoseph/buck-swap-demo",
    liveUrl: "#",
    category: "blockchain"
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet & Swap",
    description: "A crypto wallet application for basic token swaps built on the blockchain, featuring secure transactions and real-time market data",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Solidity", "Web3.js", "TypeScript"],
    githubUrl: "https://github.com/UkejeJoseph/Crypto-app",
    liveUrl: "#",
    category: "blockchain"
  },
  {
    id: "neurafeed",
    title: "NeuraFeed - AI Customer Insights",
    description: "AI-powered customer insights software that analyzes feedback and sentiment in real-time using machine learning pipelines and message queuing",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    technologies: ["TypeScript", "Next.js", "Redis", "RabbitMQ", "Node.js", "AI/ML"],
    githubUrl: "https://github.com/UkejeJoseph/Neurafeedfinal",
    liveUrl: "https://neurafeedfinal.vercel.app",
    category: "ai-ml"
  },
  {
    id: "next-ai-chat",
    title: "Next AI Chat App",
    description: "AI-powered chatbot application with vector search",
    image: "https://raw.githubusercontent.com/vishxly/NextAI-Chatbot/master/Next%20Ai%20App.png",
    technologies: ["Next.js", "Clerk", "OpenAI", "Tailwind CSS", "Shadcn UI", "PineCone"],
    githubUrl: "https://github.com/UkejeJoseph/NextAI-Chatbot",
    liveUrl: "https://github.com/UkejeJoseph/NextAI-Chatbot",
    category: "ai-ml"
  },
  {
    id: "trackcel",
    title: "TrackCel",
    description: "An AI job application tracking app that schedules, tracks, and manages your work tasks.",
    image: "/trackcel.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    githubUrl: "#",
    liveUrl: "https://trackcel.app/",
    isPrivate: true,
    category: "web-development"
  },
  // === OTHER PROJECTS ===
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support Chatbot",
    description: "Intelligent chatbot with Natural Language Processing for customer service automation and real-time support",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "Flask", "NLP", "TensorFlow", "SQLAlchemy", "WebSocket", "React.js"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://ai-support-chatbot.vercel.app",
    category: "ai-ml"
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-commerce Platform",
    description: "Complete e-commerce solution with payment integration, inventory management, and admin dashboard",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Stripe API", "Redux", "JWT"],
    githubUrl: "https://github.com/UkejeJoseph/ECommerce-NextJS-Sanity-Stripe",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    category: "web-development"
  },
  {
    id: "task-management",
    title: "Team Task Management System",
    description: "Collaborative project management tool with real-time updates, file sharing, and team collaboration features",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Firebase", "Vuex"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://task-management-system.vercel.app",
    category: "web-development"
  },
  {
    id: "weather-app",
    title: "Smart Weather Analytics Dashboard",
    description: "Weather forecasting application with data visualization, historical analysis, and location-based recommendations",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "D3.js", "OpenWeather API", "Chart.js", "TypeScript"],
    githubUrl: "https://github.com/UkejeJoseph/WeatherApp-NextJSxTypescript-main",
    liveUrl: "https://weather-analytics-dashboard.vercel.app",
    category: "web-development"
  },
  {
    id: "mobile-expense",
    title: "Mobile Expense Tracker",
    description: "Cross-platform mobile app for personal finance management with budget tracking and expense categorization",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React Native", "Firebase", "SQLite", "Redux", "Chart.js"],
    githubUrl: "https://github.com/UkejeJoseph/Expense-Tracker",
    liveUrl: "https://mobile-expense-tracker.vercel.app",
    category: "mobile-development"
  },
  {
    id: "no-rio",
    title: "No RIO - B2C Rental Website",
    description: "A comprehensive rental platform with responsive frontend and RESTful APIs, featuring user authentication and protected routes",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "CSS3", "HTML5", "Bootstrap", "Flask", "MongoDB", "OAuth2.0"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://no-rio-rental.vercel.app",
    category: "web-development"
  },
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchen Application",
    description: "Responsive Single Page Application with lazy loading, NgRx state management, and RESTful API integration",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
    technologies: ["Angular 12", "TypeScript", "SCSS", "Angular Material", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://cloud-kitchen-app.vercel.app",
    category: "web-development"
  },
  {
    id: "myc-transit",
    title: "MYC Transit: Fair Estimation Application",
    description: "Machine learning-powered transit fare estimation app with Google Places API integration and XGBoost ML model",
    image: "/transport.png",
    technologies: ["React.js", "CSS3", "Flask", "Google Places API", "XGBoost", "Machine Learning"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://myc-transit-app.vercel.app",
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
    githubUrl: "https://github.com/UkejeJoseph/appwrite-blog",
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
    githubUrl: "https://github.com/UkejeJoseph/Currency-Converter",
    liveUrl: "https://currencyy-converterr.vercel.app/",
    category: "web-development"
  },
  {
    id: "draw-app",
    title: "Draw App",
    description: "Collaborative drawing application with authentication",
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/draw.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Kinde"],
    githubUrl: "https://github.com/UkejeJoseph/Draw-App",
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

