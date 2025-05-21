
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import PoemPage from "./pages/PoemPage";
import ExplorePage from "./pages/ExplorePage";
import CollectionsPage from "./pages/CollectionsPage";
import PoetPage from "./pages/PoetPage";
import PoetsListPage from "./pages/PoetsListPage";
import QuotesPage from "./pages/QuotesPage";
import { SidebarProvider } from "./components/ui/sidebar";
import { useState } from "react";

const App = () => {
  // Create a client
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <SidebarProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Index />} />
                  <Route path="/poem/:id" element={<PoemPage />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="/collections" element={<CollectionsPage />} />
                  <Route path="/poet/:id" element={<PoetPage />} />
                  <Route path="/poets" element={<PoetsListPage />} />
                  <Route path="/quotes" element={<QuotesPage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SidebarProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
