
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRandomQuote } from "@/data/quotes";
import { Button } from "@/components/ui/button";
import { Random } from "lucide-react";
import QuoteCard from "./QuoteCard";

const RandomQuoteButton = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [key, setKey] = useState(0); // For animation reset

  const handleRandomQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote);
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className="space-y-4">
      <Button 
        onClick={handleRandomQuote}
        className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white gentle-pulse"
      >
        <Random className="mr-2 h-5 w-5" />
        Random Quote
      </Button>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <QuoteCard quote={quote} animate={false} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RandomQuoteButton;
