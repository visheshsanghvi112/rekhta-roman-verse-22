import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Poem } from "@/data/types";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeaturedPoemProps {
  poem: Poem;
}

const FeaturedPoem = ({ poem }: FeaturedPoemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="border-rekhta-gold/20 bg-gradient-to-br from-rekhta-cream to-rekhta-gold/10 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        <CardContent className="pt-8 pb-6 px-6 md:px-10">
          <div className="mb-6">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs uppercase tracking-wider text-rekhta-gold font-medium bg-rekhta-gold/10 px-2 py-1 rounded-full"
            >
              Featured Poetry
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-xl md:text-2xl lg:text-3xl text-rekhta-brown mt-3 mb-4"
            >
              {poem.title ? poem.title : poem.author}
            </motion.h2>
            {poem.title && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-sm text-rekhta-brown/70 italic"
              >
                by {poem.author}
              </motion.p>
            )}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="poetry-text text-xl md:text-2xl lg:text-3xl font-serif font-medium text-rekhta-dark space-y-4 mb-8"
          >
            {poem.content.map((line, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                className="leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
              <Link to={`/poem/${poem.id}`}>
                Read More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
        
        <CardFooter className="bg-rekhta-dark/5 py-3 px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-rekhta-brown/80">
            <span className="font-medium mr-1">Categories:</span>
            {poem.category?.map((cat) => (
              <motion.span 
                key={cat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/60 hover:bg-white/80 py-1 px-2 rounded-full transition-colors cursor-pointer"
              >
                <Link to={`/explore?category=${cat}`}>
                  {cat}
                </Link>
              </motion.span>
            ))}
            {poem.language && (
              <motion.span 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-rekhta-gold/20 hover:bg-rekhta-gold/30 py-1 px-2 rounded-full transition-colors cursor-pointer ml-auto"
              >
                <Link to={`/explore?language=${poem.language}`}>
                  {poem.language}
                </Link>
              </motion.span>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default FeaturedPoem;
