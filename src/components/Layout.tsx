
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuotesSidebar from "./QuotesSidebar";

const Layout = () => {
  const [quoteSidebarOpen, setQuoteSidebarOpen] = useState(false);
  const location = useLocation();
  const isQuotesPage = location.pathname === "/quotes";

  useEffect(() => {
    const handleToggleSidebar = () => {
      setQuoteSidebarOpen(prev => !prev);
    };

    window.addEventListener('toggle-quotes-sidebar', handleToggleSidebar);
    
    return () => {
      window.removeEventListener('toggle-quotes-sidebar', handleToggleSidebar);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-rekhta-cream">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {isQuotesPage && (
        <QuotesSidebar 
          isOpen={quoteSidebarOpen} 
          onClose={() => setQuoteSidebarOpen(false)} 
        />
      )}
      <Footer />
    </div>
  );
};

export default Layout;
