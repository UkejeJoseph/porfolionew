import { Switch, Route } from "wouter";
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
import Blog, { BlogArticle } from "./pages/blog";
import EngineeringLab from "./pages/engineering-lab";
import TopNav from "@/components/layout/top-nav";
import Contact from "./pages/contact";
import CustomCursor from "@/components/ui/custom-cursor";
import AiChat from "@/components/ui/ai-chat";
import PageTransition from "@/components/layout/page-transition";
import Preloader from "@/components/ui/preloader";
import StarBackground from "@/components/ui/star-background";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

// ─── Top Navigation (Atharv-style) ───────────────────────────────────────────
function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <PageTransition id="hero">
            <Hero />
          </PageTransition>
        </Route>
        <Route path="/about">
          <PageTransition id="home">
            <Home />
          </PageTransition>
        </Route>
        <Route path="/resume">
          <PageTransition id="resume">
            <Resume />
          </PageTransition>
        </Route>
        <Route path="/projects">
          <PageTransition id="projects">
            <Projects />
          </PageTransition>
        </Route>
        <Route path="/certifications">
          <PageTransition id="certifications">
            <Certifications />
          </PageTransition>
        </Route>
        <Route path="/lab">
          <PageTransition id="lab">
            <EngineeringLab />
          </PageTransition>
        </Route>
        <Route path="/open-source">
          <PageTransition id="open-source">
            <EngineeringLab openSourceOnly />
          </PageTransition>
        </Route>
        <Route path="/blog/:slug">
          <PageTransition id="article">
            <BlogArticle />
          </PageTransition>
        </Route>
        <Route path="/blog">
          <PageTransition id="blog">
            <Blog />
          </PageTransition>
        </Route>
        <Route path="/contact">
          <PageTransition id="contact">
            <Contact />
          </PageTransition>
        </Route>
        <Route>
          <PageTransition id="notfound">
            <NotFound />
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [location] = useLocation();
  const engineeringPage =
    location.startsWith("/blog") ||
    location === "/lab" ||
    location === "/open-source";

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {!preloaderDone && (
            <Preloader onComplete={() => setPreloaderDone(true)} />
          )}
          <div
            className="min-h-screen bg-background text-foreground"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {!engineeringPage && (
              <>
                <CustomCursor />
                <StarBackground />
              </>
            )}
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
