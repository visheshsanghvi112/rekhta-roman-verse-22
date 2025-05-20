
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-rekhta-gold/20 px-4 py-3 bg-rekhta-cream">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-semibold text-rekhta-brown">
            Rekhta <span className="text-rekhta-gold">Realms</span>
          </span>
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
      {isOpen && (
        <div className="md:hidden p-4 bg-rekhta-cream border-t border-rekhta-gold/20 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: "Home", to: "/" },
    { name: "Explore", to: "/explore" },
    { name: "Collections", to: "/collections" }
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className={`${
            mobile
              ? "block py-2 font-medium text-rekhta-brown hover:text-rekhta-gold transition-colors"
              : "link-underline font-medium text-rekhta-brown hover:text-rekhta-gold transition-colors"
          }`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
