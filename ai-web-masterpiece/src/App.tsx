import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import TopNav from "./components/layout/top-nav";
import Blog, { BlogArticle } from "./pages/blog";
import EngineeringLab from "./pages/engineering-lab";
import { ProjectCaseStudy } from "./pages/project-studies";
import { ArchitecturePage, DevOpsPage } from "./pages/engineering-practice";
import {
  WorkPage,
  AboutPage,
  ResumePage,
  ContactPage,
} from "./pages/portfolio-pages";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

function HomeEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.dataset.portfolioContent = String(pathname !== "/");
    return () => {
      delete document.body.dataset.portfolioContent;
    };
  }, [pathname]);
  return pathname === "/" ? (
    <>
      <CustomCursor />
    </>
  ) : null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HomeEffects />
        <TopNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<WorkPage />} />
          <Route
            path="/blockchain"
            element={<WorkPage initialCategory="Blockchain" />}
          />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/devops" element={<DevOpsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lab" element={<EngineeringLab />} />
          <Route
            path="/open-source"
            element={<EngineeringLab openSourceOnly />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
