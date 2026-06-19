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
    id: "stablex",
    title: "StableX - Stablecoin Wallet & Exchange",
    description: "Engineered a comprehensive stablecoin wallet and exchange platform for transacting stablecoins. Built full-stack features integrating gRPC (.NET) blockchain RPC validation, Socket.IO customer support chat, and Solidity smart contracts.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "C#", "gRPC", "Solidity", "MongoDB", "Express", "Socket.IO"],
    githubUrl: "https://github.com/UkejeJoseph/StableXv1",
    liveUrl: "#",
    category: "blockchain"
  },
  {
    id: "crypto-legions",
    title: "CryptoLegions",
    description: "Developed a highly successful play-to-earn NFT game on the BSC network. Implemented 8 unique features to drive user engagement and ROI, establishing it as a top-performing game in 2022.",
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
    description: "Built a Solana Raydium Token Launchpad enabling users to seamlessly create custom SPL Tokens on the Solana blockchain.",
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
    description: "Architected an AI-powered pre-production SaaS workflow platform. Streamlined script coverage and scheduling by designing RESTful backend APIs and implementing OAuth 2.0 role-based access control.",
    image: "/rivetai.png",
    technologies: ["ReactJS", "C#", ".NET Core", "Flask", "MongoDB", "OAuth 2.0", "AI/ML"],
    githubUrl: "#",
    liveUrl: "https://rivetai.com/",
    isPrivate: true,
    category: "ai-ml"
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet & Swap",
    description: "Engineered a secure crypto wallet application for seamless token swaps on the blockchain, featuring real-time market data integration.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Solidity", "Web3.js", "TypeScript"],
    githubUrl: "https://github.com/UkejeJoseph/Crypto-Dashboard",
    liveUrl: "#",
    category: "blockchain"
  },
  {
    id: "neurafeed",
    title: "NeuraFeed - AI Customer Insights",
    description: "Developed an AI-powered customer insights software that analyzes feedback and sentiment in real-time using machine learning pipelines and message queuing.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    technologies: ["TypeScript", "Next.js", "Redis", "RabbitMQ", "Node.js", "AI/ML"],
    githubUrl: "https://github.com/UkejeJoseph/Neurafeedfinal",
    liveUrl: "https://neurafeedfinal.vercel.app",
    category: "ai-ml"
  },
  {
    id: "next-ai-chat",
    title: "Next AI Chat App",
    description: "Built an AI-powered chatbot application utilizing PineCone for vector search to provide intelligent and context-aware responses.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Clerk", "OpenAI", "Tailwind CSS", "Shadcn UI", "PineCone"],
    githubUrl: "https://github.com/UkejeJoseph/NextAI-Chatbot",
    liveUrl: "https://github.com/UkejeJoseph/NextAI-Chatbot",
    category: "ai-ml"
  },
  {
    id: "trackcel",
    title: "TrackCel",
    description: "Engineered an AI-driven job application tracking app to efficiently schedule, track, and manage user tasks.",
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
    description: "Created an intelligent chatbot utilizing Natural Language Processing to automate customer service and provide real-time support.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    technologies: ["Python", "Flask", "NLP", "TensorFlow", "SQLAlchemy", "WebSocket", "React.js"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://ai-support-chatbot.vercel.app",
    category: "ai-ml"
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-commerce Platform",
    description: "Engineered a complete e-commerce solution featuring secure payment integration, robust inventory management, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Stripe API", "Redux", "JWT"],
    githubUrl: "https://github.com/UkejeJoseph/ECommerce-NextJS-Sanity-Stripe",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    category: "web-development"
  },
  {
    id: "task-management",
    title: "Team Task Management System",
    description: "Developed a collaborative project management tool equipped with real-time updates, file sharing capabilities, and team coordination features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Firebase", "Vuex"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://task-management-system.vercel.app",
    category: "web-development"
  },
  {
    id: "weather-app",
    title: "Smart Weather Analytics Dashboard",
    description: "Built a smart weather forecasting application providing rich data visualization, historical analysis, and location-based recommendations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "D3.js", "OpenWeather API", "Chart.js", "TypeScript"],
    githubUrl: "https://github.com/UkejeJoseph/WeatherApp-NextJSxTypescript-main",
    liveUrl: "https://weather-analytics-dashboard.vercel.app",
    category: "web-development"
  },
  {
    id: "mobile-expense",
    title: "Mobile Expense Tracker",
    description: "Engineered a cross-platform mobile application for personal finance management, offering budget tracking and expense categorization.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React Native", "Firebase", "SQLite", "Redux", "Chart.js"],
    githubUrl: "https://github.com/UkejeJoseph/Expense-Tracker",
    liveUrl: "https://mobile-expense-tracker.vercel.app",
    category: "mobile-development"
  },
  {
    id: "no-rio",
    title: "No RIO - B2C Rental Website",
    description: "Developed a comprehensive rental platform featuring a responsive frontend and RESTful APIs, with secure user authentication and protected routes.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "CSS3", "HTML5", "Bootstrap", "Flask", "MongoDB", "OAuth2.0"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://no-rio-rental.vercel.app",
    category: "web-development"
  },
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchen Application",
    description: "Built a responsive Single Page Application implementing lazy loading, NgRx state management, and robust RESTful API integrations.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
    technologies: ["Angular 12", "TypeScript", "SCSS", "Angular Material", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://cloud-kitchen-app.vercel.app",
    category: "web-development"
  },
  {
    id: "myc-transit",
    title: "MYC Transit: Fair Estimation Application",
    description: "Engineered a machine learning-powered transit fare estimation app using the XGBoost ML model and Google Places API integration.",
    image: "/transport.png",
    technologies: ["React.js", "CSS3", "Flask", "Google Places API", "XGBoost", "Machine Learning"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://myc-transit-app.vercel.app",
    category: "web-development"
  },
  {
    id: "free-tool",
    title: "Free Tool",
    description: "Created a comprehensive collection of free development tools and utilities to assist developers in everyday tasks.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://freetool.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "oxy-ui",
    title: "Oxy UI",
    description: "Developed a highly customizable React UI component library featuring extensive TypeScript support and modular design tokens.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "NPM"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://oxyui.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "snippet-vault",
    title: "Snippet Vault",
    description: "Engineered a secure code snippet management platform equipped with robust authentication and organizational features.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://snippetvault.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "codesnapx",
    title: "CodeSnapx",
    description: "Built a streamlined code screenshot and sharing tool enabling developers to quickly share beautifully formatted code snippets.",
    image: "https://images.unsplash.com/photo-1627398240444-cd732b1df400?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/UkejeJoseph",
    liveUrl: "https://codesnapx.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "blog-app",
    title: "Blog App",
    description: "Developed a full-featured blogging platform powered by a Firebase backend, featuring rich text editing and dynamic content delivery.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/UkejeJoseph/appwrite-blog",
    liveUrl: "https://blog9.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "Built a responsive, real-time currency conversion application providing up-to-date exchange rates and historical trend analysis.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/UkejeJoseph/Currency-Converter",
    liveUrl: "https://currencyy-converterr.vercel.app/",
    category: "web-development"
  },
  {
    id: "draw-app",
    title: "Draw App",
    description: "Engineered a collaborative drawing application leveraging secure authentication to allow teams to ideate visually in real time.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Kinde"],
    githubUrl: "https://github.com/UkejeJoseph/Draw-App",
    liveUrl: "https://draw-app-seven.vercel.app/",
    isPrivate: true,
    category: "web-development"
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Developed a comprehensive personal finance management application enabling users to seamlessly track expenses and analyze spending habits.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://expense-track-iota.vercel.app/",
    category: "web-development"
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "Engineered a scalable URL shortening service providing deep analytics and link management functionalities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://url-shortnerx.vercel.app/",
    category: "web-development"
  },
  {
    id: "myntra-clone",
    title: "Myntra Clone",
    description: "Built a highly responsive e-commerce platform clone modeling core functionalities, complete with a dynamic product catalog and shopping cart.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Node.js", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://myntra-clone-liard.vercel.app/",
    category: "web-development"
  },
  {
    id: "job-portal",
    title: "Job Portal",
    description: "Engineered a comprehensive job search and application platform connecting employers with prospective candidates seamlessly.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://job-portal-eight-gamma.vercel.app/",
    category: "web-development"
  },
  {
    id: "file-sharing",
    title: "File Sharing App",
    description: "Developed a highly secure file sharing platform utilizing Firebase storage for reliable and fast document distribution.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "https://file-sharing-app-xi.vercel.app/",
    category: "web-development"
  },
  {
    id: "trello-clone",
    title: "Trello",
    description: "Architected a task management application inspired by Trello, featuring interactive drag-and-drop boards and real-time collaboration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "https://trello-tau-rosy.vercel.app/",
    category: "web-development"
  },
  {
    id: "bookmark-extension",
    title: "Bookmark Extension",
    description: "Engineered a lightweight browser extension designed for efficient and cross-device bookmark management.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "#",
    liveUrl: "https://bookmark-vert.vercel.app/",
    category: "web-development"
  }
];

