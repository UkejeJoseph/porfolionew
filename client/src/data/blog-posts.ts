export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  views: number;
  image: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "web-apis",
    title: "12 Essential Web APIs Every Developer Should Know",
    category: "Development",
    date: "Sep 26, 2024",
    views: 58329,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/12-essential-web-apis-every-developer-should-know-1m28"
  },
  {
    id: "react-19",
    title: "React 19: A Game-Changer for Modern Web Development",
    category: "Development",
    date: "July 27, 2024",
    views: 56795,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/react-19-a-game-changer-for-modern-web-development-1bih"
  },
  {
    id: "backend-structure",
    title: "How to Structure Your Backend Code in Node.js (Express.js)",
    category: "Development",
    date: "Jul 17, 2024",
    views: 52085,
    image: "https://images.unsplash.com/photo-1627398240444-cd732b1df400?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/how-to-structure-your-backend-code-in-nodejs-expressjs-2bdd"
  },
  {
    id: "react-ui-libraries",
    title: "9 Must-Try React UI Component Libraries for Stunning Web Apps in 2024",
    category: "Development",
    date: "Aug 4, 2024",
    views: 31532,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    url: "https://medium.com/stackademic/how-to-structure-your-backend-code-in-node-js-express-js-9b423becae3c"
  },
  {
    id: "jwt-auth",
    title: "Understanding JWT Authentication: A Comprehensive Guide with Examples",
    category: "Development",
    date: "Jun 21, 2024",
    views: 30855,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/the-most-commonly-used-databases-with-nodejs-and-express-1koe"
  },
  {
    id: "react-best-practices",
    title: "7 Best Practices for ReactJS Development in 2024",
    category: "Development",
    date: "July 01, 2024",
    views: 21772,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/handling-cors-errors-in-reactjs-42pl"
  },
  {
    id: "react-styling",
    title: "Styling in ReactJS: Exploring the Best Libraries",
    category: "Design",
    date: "June 03, 2024",
    views: 736,
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/styling-in-reactjs-exploring-the-best-libraries-j42"
  },
  {
    id: "git-commands",
    title: "Essential Git Commands for Beginners",
    category: "Development",
    date: "Feb 23, 2022",
    views: 1247,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/essential-github-commands-for-beginners-34ia"
  },
  {
    id: "nextjs-tips",
    title: "5 Essential Tips and Tricks for Mastering Next.js",
    category: "Development",
    date: "Feb 23, 2022",
    views: 953,
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000",
    url: "https://dev.to/vyan/5-essential-tips-and-tricks-for-mastering-nextjs-1p7g"
  }
];
