import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Hero from "./pages/Hero";
import CallToAction from "./pages/CallToAction";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Patent from "./pages/Patent";
import LeetCode from "./pages/LeetCode";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<Hero />} />
            <Route path="/cta" element={<CallToAction />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/patent" element={<Patent />} />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/articles" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl">Articles Page Coming Soon</h1></div>} />
            <Route path="/profiles" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl">Coding Profiles Coming Soon</h1></div>} />
            <Route path="/resume" element={<div className="min-h-screen pt-20 flex items-center justify-center"><h1 className="text-4xl">Resume Page Coming Soon</h1></div>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
