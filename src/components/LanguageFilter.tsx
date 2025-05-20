
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Language {
  id: string;
  name: string;
}

interface LanguageFilterProps {
  languages: Language[];
  activeLanguage: string | null;
  onLanguageChange: (language: string | null) => void;
}

const LanguageFilter = ({ 
  languages, 
  activeLanguage, 
  onLanguageChange 
}: LanguageFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={activeLanguage === null ? "default" : "outline"}
        size="sm"
        onClick={() => onLanguageChange(null)}
        className={activeLanguage === null 
          ? "bg-rekhta-gold text-white hover:bg-rekhta-gold/90" 
          : "border-rekhta-gold/30 text-rekhta-brown hover:bg-rekhta-gold/10"
        }
      >
        All
      </Button>
      
      {languages.map((language) => (
        <motion.div
          key={language.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeLanguage === language.id ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange(language.id)}
            className={activeLanguage === language.id 
              ? "bg-rekhta-gold text-white hover:bg-rekhta-gold/90" 
              : "border-rekhta-gold/30 text-rekhta-brown hover:bg-rekhta-gold/10"
            }
          >
            {language.name}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageFilter;
