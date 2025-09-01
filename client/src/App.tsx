import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Sidebar from "@/components/layout/sidebar";
import MobileMenu from "@/components/layout/mobile-menu";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="flex min-h-screen bg-background text-foreground">
            <MobileMenu 
              isOpen={mobileMenuOpen} 
              onClose={() => setMobileMenuOpen(false)} 
            />
            <Sidebar />
            <div className="flex-1 md:ml-80 ml-0">
              <button
                data-testid="button-mobile-menu"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              <Router />
            </div>
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
