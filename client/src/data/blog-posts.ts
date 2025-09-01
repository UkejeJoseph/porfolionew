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
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffq943c6ufzm592mcvg0y.jpg",
    url: "https://dev.to/vyan/12-essential-web-apis-every-developer-should-know-1m28"
  },
  {
    id: "react-19",
    title: "React 19: A Game-Changer for Modern Web Development",
    category: "Development",
    date: "July 27, 2024",
    views: 56795,
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fko42x3apigcvt27hdf3p.jpg",
    url: "https://dev.to/vyan/react-19-a-game-changer-for-modern-web-development-1bih"
  },
  {
    id: "backend-structure",
    title: "How to Structure Your Backend Code in Node.js (Express.js)",
    category: "Development",
    date: "Jul 17, 2024",
    views: 52085,
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwspa5varghey5vc2tmfx.jpg",
    url: "https://dev.to/vyan/how-to-structure-your-backend-code-in-nodejs-expressjs-2bdd"
  },
  {
    id: "react-ui-libraries",
    title: "9 Must-Try React UI Component Libraries for Stunning Web Apps in 2024",
    category: "Development",
    date: "Aug 4, 2024",
    views: 31532,
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5hv8axjpny1i5ou6yiit.jpg",
    url: "https://medium.com/stackademic/how-to-structure-your-backend-code-in-node-js-express-js-9b423becae3c"
  },
  {
    id: "jwt-auth",
    title: "Understanding JWT Authentication: A Comprehensive Guide with Examples",
    category: "Development",
    date: "Jun 21, 2024",
    views: 30855,
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Few9k1u4eiyook2pgqvvq.png",
    url: "https://dev.to/vyan/the-most-commonly-used-databases-with-nodejs-and-express-1koe"
  },
  {
    id: "react-best-practices",
    title: "7 Best Practices for ReactJS Development in 2024",
    category: "Development",
    date: "July 01, 2024",
    views: 21772,
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz2hsv27obmmzmblaox3n.png",
    url: "https://dev.to/vyan/handling-cors-errors-in-reactjs-42pl"
  },
  {
    id: "react-styling",
    title: "Styling in ReactJS: Exploring the Best Libraries",
    category: "Design",
    date: "June 03, 2024",
    views: 736,
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/styling.png",
    url: "https://dev.to/vyan/styling-in-reactjs-exploring-the-best-libraries-j42"
  },
  {
    id: "git-commands",
    title: "Essential Git Commands for Beginners",
    category: "Development",
    date: "Feb 23, 2022",
    views: 1247,
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/gitb.png",
    url: "https://dev.to/vyan/essential-github-commands-for-beginners-34ia"
  },
  {
    id: "nextjs-tips",
    title: "5 Essential Tips and Tricks for Mastering Next.js",
    category: "Development",
    date: "Feb 23, 2022",
    views: 953,
    image: "https://raw.githubusercontent.com/vishxly/Certification/main/nextjsb.webp",
    url: "https://dev.to/vyan/5-essential-tips-and-tricks-for-mastering-nextjs-1p7g"
  }
];
