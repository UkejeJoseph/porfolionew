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
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import MobileMenu from "@/components/layout/mobile-menu";
import StarBackground from "@/components/ui/star-background";
import CustomCursor from "@/components/ui/custom-cursor";
import AiChat from "@/components/ui/ai-chat";
import PageTransition from "@/components/layout/page-transition";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="flex justify-center min-h-screen bg-transparent text-foreground p-4 md:p-8 overflow-hidden">
            <CustomCursor />
            <StarBackground />
            <MobileMenu
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            />
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1440px] relative">
              <div className="hidden md:block w-80 shrink-0">
                <Sidebar />
              </div>
              <div className="flex-1 bg-card/60 backdrop-blur-xl rounded-2xl border border-border min-h-[calc(100vh-4rem)] relative overflow-hidden flex flex-col">
                <button
                  data-testid="button-mobile-menu"
                  onClick={() => setMobileMenuOpen(true)}
                  className="md:hidden fixed top-4 right-4 z-50 p-2 bg-card border border-border text-foreground rounded-lg shadow-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                <div className="flex-1 overflow-y-auto w-full relative">
                  <div className="pt-8 pr-8 flex justify-end w-full">
                    <Navbar />
                  </div>
                  <div className="-mt-8">
                    <Router />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Toaster />
          <AiChat />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
