import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NotFound from "./pages/not-found";
import Hero from "./pages/hero";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Certifications from "./pages/certifications";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import CustomCursor from "@/components/ui/custom-cursor";
import AiChat from "@/components/ui/ai-chat";
import PageTransition from "@/components/layout/page-transition";
import Preloader from "@/components/ui/preloader";
import StarBackground from "@/components/ui/star-background";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";

// ─── Top Navigation (Atharv-style) ───────────────────────────────────────────
const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center h-20">
          {/* Logo / Name */}
          <Link href="/">
            <a
              className="flex items-center gap-3 mr-12"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="text-foreground">
                <path d="M18 4L6 10V18L12 22L18 18L24 22L30 18V10L18 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M18 18V32" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 22V28L18 32L24 28V22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="text-sm font-light tracking-widest uppercase text-foreground/80">
                Joseph Ukeje
              </span>
            </a>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={`text-sm transition-colors duration-200 ${
                    location === item.href
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex-1" />

          {/* Blog link on desktop */}
          <Link href="/blog">
            <a
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-all"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Blog <ArrowUpRight size={14} />
            </a>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                className="text-base text-foreground/80 hover:text-foreground transition-colors py-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Link href="/blog">
            <a
              className="inline-flex items-center gap-1 text-sm text-foreground mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Blog <ArrowUpRight size={14} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Router ───────────────────────────────────────────────────────────────────
function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <PageTransition id="hero"><Hero /></PageTransition>
        </Route>
        <Route path="/about">
          <PageTransition id="home"><Home /></PageTransition>
        </Route>
        <Route path="/resume">
          <PageTransition id="resume"><Resume /></PageTransition>
        </Route>
        <Route path="/projects">
          <PageTransition id="projects"><Projects /></PageTransition>
        </Route>
        <Route path="/certifications">
          <PageTransition id="certifications"><Certifications /></PageTransition>
        </Route>
        <Route path="/blog">
          <PageTransition id="blog"><Blog /></PageTransition>
        </Route>
        <Route path="/contact">
          <PageTransition id="contact"><Contact /></PageTransition>
        </Route>
        <Route>
          <PageTransition id="notfound"><NotFound /></PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
          <div
            className="min-h-screen bg-background text-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <CustomCursor />
            <StarBackground />
            <TopNav />
            {/* Full-width content — no sidebar, no padded card */}
            <main className="w-full">
              <Router />
            </main>
            <Toaster />
            <AiChat />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
