import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [location] = useLocation();

    const navigation = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Resume", path: "/resume" },
        { name: "Projects", path: "/projects" },
        { name: "Certifications", path: "/certifications" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="hidden md:flex items-center gap-1 p-2 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-sm">
            {navigation.map((item) => (
                <Link key={item.path} href={item.path}>
                    <div
                        data-testid={`top-nav-${item.name.toLowerCase()}`}
                        data-cursor-hover
                        className={cn(
                            "px-5 py-2 rounded-full cursor-pointer transition-all text-sm font-medium whitespace-nowrap relative overflow-hidden",
                            location === item.path
                                ? "bg-foreground text-background shadow-md glow-pulse"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                            (item.name === "Projects" || item.name === "Certifications") && "glow-blink"
                        )}
                    >
                        {location === item.path && (
                            <div className="absolute inset-0 bg-primary/20 blur-md -z-10" />
                        )}
                        {item.name}
                    </div>
                </Link>
            ))}
        </nav>
    );
}
