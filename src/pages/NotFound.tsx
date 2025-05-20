
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Rekhta Realms</title>
        <meta name="description" content="The page you are looking for does not exist. Explore our poetry collection instead." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-[70vh] flex items-center justify-center bg-rekhta-cream">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-5xl font-serif font-bold text-rekhta-brown mb-4">404</h1>
          <p className="text-xl text-rekhta-brown/80 mb-6">
            "The verse you seek exists not on this page,<br />
            Like a poet's unwritten thoughts, still waiting to engage."
          </p>
          <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
