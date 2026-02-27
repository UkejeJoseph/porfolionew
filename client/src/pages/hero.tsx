import { Link } from "wouter";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import Home from "./home";
import { motion } from "framer-motion";

export default function Hero() {
    const featuredProjects = projects.slice(0, 5);

    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center relative z-10 px-4">
                {/* Subtle glowing orb behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg mb-4 tracking-wider"
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        Joseph Ukeje
                    </span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-3xl text-primary font-medium mb-12 flex items-center gap-2"
                >
                    Junior Software Engineer<span className="w-1.5 h-8 bg-primary animate-pulse"></span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link href="/projects">
                        <button className="px-8 py-3 bg-primary text-background font-semibold rounded-full hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300">
                            View Projects
                        </button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
                >
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-primary rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            {/* About Section In-Page */}
            <div className="mt-20">
                <Home />
            </div>

            {/* Featured Projects Preview */}
            <div className="p-8 mt-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-bold border-l-4 border-primary pl-4">Featured Projects</h2>
                        <Link href="/projects" className="text-primary hover:underline">View All Projects →</Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
