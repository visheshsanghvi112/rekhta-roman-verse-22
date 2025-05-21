
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Poem } from "@/data/poems";
import { motion } from "framer-motion";
import { BookOpen, Heart } from "lucide-react";

interface PoemCardProps {
  poem: Poem;
  featured?: boolean;
}

const PoemCard = ({ poem, featured = false }: PoemCardProps) => {
  // Determine if this is a motivational poem
  const isMotivational = poem.category?.includes("motivation");
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/poem/${poem.id}`}>
        <Card className={`poetry-card overflow-hidden h-full border-rekhta-gold/10 shadow-sm hover:shadow-md transition-all duration-300 ${
          featured ? 'bg-gradient-to-br from-rekhta-cream to-rekhta-gold/10' : 
          isMotivational ? 'bg-gradient-to-br from-rekhta-gold/10 to-rekhta-cream/90' : ''
        }`}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-serif text-lg text-rekhta-brown">
                  {poem.title ? poem.title : poem.author}
                </div>
                {poem.title && (
                  <div className="text-sm text-rekhta-brown/70 italic -mt-1">
                    by {poem.author}
                  </div>
                )}
              </div>
              {isMotivational && (
                <div className="text-rekhta-gold">
                  <Heart size={16} />
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="poetry-text pb-6">
            <div className="line-clamp-4 text-rekhta-dark/90">
              {poem.content.map((line, index) => (
                <div key={index} className="mb-1">{line}</div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-2 border-t border-rekhta-gold/10">
            <div className="flex flex-wrap items-center gap-2 text-xs text-rekhta-brown/60 w-full">
              {poem.category?.slice(0, 2).map((cat) => (
                <span key={cat} className={`py-1 px-2 rounded-full ${
                  cat === "motivation" 
                    ? "bg-rekhta-gold/10 text-rekhta-brown/70" 
                    : "bg-rekhta-cream"
                }`}>
                  {cat}
                </span>
              ))}
              {poem.language && (
                <span className="bg-rekhta-gold/10 py-1 px-2 rounded-full ml-auto">
                  {poem.language}
                </span>
              )}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PoemCard;
