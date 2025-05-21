
import { motion } from "framer-motion";
import { Quote } from "@/data/types/quote";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface QuoteCardProps {
  quote: Quote;
  animate?: boolean;
}

const QuoteCard = ({ quote, animate = true }: QuoteCardProps) => {
  const cardContent = (
    <Card className="border-rekhta-gold/20 bg-gradient-to-br from-rekhta-cream to-rekhta-gold/5 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-8 pb-4 px-6">
        <blockquote className="border-l-4 pl-4 border-rekhta-gold/60 italic">
          <p className="text-lg md:text-xl font-serif text-rekhta-brown leading-relaxed">
            "{quote.text}"
          </p>
        </blockquote>
        <div className="mt-4 text-right">
          <p className="text-sm text-rekhta-brown/80">— {quote.author}</p>
        </div>
      </CardContent>
      {quote.categories && (
        <CardFooter className="bg-rekhta-dark/5 py-3 px-6 flex flex-wrap gap-1">
          {quote.categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline"
              className="bg-white/60 text-rekhta-brown/80 hover:bg-white/80"
            >
              {category}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default QuoteCard;
