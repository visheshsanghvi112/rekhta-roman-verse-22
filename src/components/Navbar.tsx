
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Search, Home, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled 
          ? "bg-rekhta-cream/95 backdrop-blur-sm shadow-sm" 
          : "bg-rekhta-cream border-b border-rekhta-gold/20"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-serif text-2xl font-semibold text-rekhta-brown"
          >
            Rekhta <span className="text-rekhta-gold">Realms</span>
          </motion.span>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden p-4 bg-rekhta-cream border-t border-rekhta-gold/20 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const location = useLocation();
  
  const links = [
    { name: "Home", to: "/", icon: Home },
    { name: "Explore", to: "/explore", icon: Search },
    { name: "Collections", to: "/collections", icon: BookOpen },
    { name: "Poets", to: "/poets", icon: Users }
  ];

  return (
    <>
      {links.map((link, index) => {
        const isActive = location.pathname === link.to;
        const LinkIcon = link.icon;
        
        return mobile ? (
          <motion.div
            key={link.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={link.to}
              className={`flex items-center py-2 font-medium transition-colors ${
                isActive 
                  ? "text-rekhta-gold" 
                  : "text-rekhta-brown hover:text-rekhta-gold"
              }`}
              onClick={onClick}
            >
              <LinkIcon size={18} className="mr-2" />
              {link.name}
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key={link.name}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            <Link
              to={link.to}
              className={`link-underline font-medium transition-colors relative ${
                isActive 
                  ? "text-rekhta-gold after:scale-x-100 after:origin-bottom-left" 
                  : "text-rekhta-brown hover:text-rekhta-gold"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

export default Navbar;
