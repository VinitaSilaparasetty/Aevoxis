import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import EuAiActEngineering from "./pages/EuAiActEngineering.tsx";
import Moved from "./pages/Moved.tsx";
import About from "./pages/About.tsx";
import EarlyAccess from "./pages/EarlyAccess.tsx";
import CaseStudyChatbot from "./pages/CaseStudyChatbot.tsx";
import IllustrativeScenarios from "./pages/IllustrativeScenarios.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ScrollToTop } from "./components/ScrollToTop";
import { HeadManager } from "./components/HeadManager";
import { PERSONAL_SITE_URL } from "./seo/meta";

export const AppRoutes = () => (
  <>
    <HeadManager />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/eu-ai-act-engineering" element={<EuAiActEngineering />} />
      <Route
        path="/services/technical-writing-curriculum"
        element={<Moved to={`${PERSONAL_SITE_URL}/services.html`} label="Vinita Silaparasetty's site" />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/early-access" element={<EarlyAccess />} />
      <Route path="/work/in-house-ai-support-chatbot" element={<CaseStudyChatbot />} />
      <Route path="/work/illustrative-scenarios" element={<IllustrativeScenarios />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/insights" element={<Blog />} />
      <Route path="/insights/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ScrollToTop />
  </>
);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const App = () => (
  <Providers>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Providers>
);

export default App;
