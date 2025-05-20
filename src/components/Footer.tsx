
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-rekhta-gold/20 px-4 py-8 bg-rekhta-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl text-rekhta-brown mb-4 flex items-center">
              <Book className="mr-2 text-rekhta-gold" size={20} />
              Rekhta Realms
            </h3>
            <p className="text-rekhta-brown/80 text-sm">
              A thoughtfully crafted digital sanctuary for the timeless beauty of Urdu, 
              Hindi, and English poetry, presented in an elegant format.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-lg text-rekhta-brown mb-4 flex items-center">
              <Heart className="mr-2 text-rekhta-gold" size={18} />
              Explore
            </h3>
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-lg text-rekhta-brown mb-4 flex items-center">
              <Code className="mr-2 text-rekhta-gold" size={18} />
              About
            </h3>
            <p className="text-rekhta-brown/80 text-sm">
              This platform aims to keep the legacy of world poetry alive 
              and accessible for new generations in an elegant, digital format.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 pt-4 border-t border-rekhta-gold/20 text-center text-rekhta-brown/60 text-xs"
        >
          <p>© {currentYear} Rekhta Realms. All rights reserved. Created by <a href="http://visheshsanghvi.me/" className="text-rekhta-gold hover:underline" target="_blank" rel="noopener noreferrer">Vishesh Sanghvi</a></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
