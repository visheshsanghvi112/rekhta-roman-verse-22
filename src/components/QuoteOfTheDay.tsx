
import { motion } from "framer-motion";
import { Quote } from "@/data/types/quote";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface QuoteOfTheDayProps {
  quote: Quote;
}

const QuoteOfTheDay = ({ quote }: QuoteOfTheDayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="border-rekhta-gold border-2 bg-gradient-to-br from-rekhta-cream to-rekhta-gold/10 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
        <CardContent className="pt-6 pb-4 px-6">
          <div className="flex items-center mb-4">
            <Calendar className="text-rekhta-gold mr-2" size={18} />
            <h3 className="text-rekhta-brown text-lg font-medium">Quote of the Day</h3>
          </div>
          <blockquote className="border-l-4 pl-4 border-rekhta-gold italic">
            <p className="text-xl md:text-2xl font-serif text-rekhta-brown leading-relaxed">
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
    </motion.div>
  );
};

export default QuoteOfTheDay;
