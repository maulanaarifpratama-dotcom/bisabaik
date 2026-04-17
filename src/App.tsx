import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import WhatWeDo from "./pages/WhatWeDo.tsx";
import HowWeWork from "./pages/HowWeWork.tsx";
import Impact from "./pages/Impact.tsx";
import Partners from "./pages/Partners.tsx";
import Projects from "./pages/Projects.tsx";
import Flagship from "./pages/Flagship.tsx";
import Insights from "./pages/Insights.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/flagship" element={<Flagship />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
