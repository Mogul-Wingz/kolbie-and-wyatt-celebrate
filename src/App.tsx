
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeddingDay from "./pages/WeddingDay";
import RSVP from "./pages/RSVP";
import Vendors from "./pages/Vendors";
import QA from "./pages/QA";
import Travel from "./pages/Travel";
import ThingsToDo from "./pages/ThingsToDo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding-day" element={<WeddingDay />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
