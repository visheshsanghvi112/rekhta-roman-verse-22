
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-rekhta-gold/20 px-4 py-6 bg-rekhta-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-rekhta-brown mb-4">Rekhta Realms</h3>
            <p className="text-rekhta-brown/80 text-sm">
              A thoughtfully crafted digital sanctuary for the timeless beauty of Urdu and 
              Hindi poetry, presented uniquely in Roman script.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-rekhta-brown mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-rekhta-brown/80 hover:text-rekhta-gold text-sm transition-colors">
                  All Poems
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-rekhta-brown/80 hover:text-rekhta-gold text-sm transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/poem/ghalib-1" className="text-rekhta-brown/80 hover:text-rekhta-gold text-sm transition-colors">
                  Featured Poem
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-rekhta-brown mb-4">About</h3>
            <p className="text-rekhta-brown/80 text-sm">
              This platform aims to keep the legacy of Urdu and Hindi poetry alive 
              and accessible for new generations in an elegant, digital format.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-rekhta-gold/20 text-center text-rekhta-brown/60 text-xs">
          <p>© {new Date().getFullYear()} Rekhta Realms. All rights reserved. Created by <a href="http://visheshsanghvi.me/" className="text-rekhta-gold hover:underline" target="_blank" rel="noopener noreferrer">Vishesh Sanghvi</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
