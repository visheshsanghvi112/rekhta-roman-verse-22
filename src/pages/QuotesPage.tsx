
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { quotes, getQuoteOfTheDay } from "@/data/quotes";
import QuoteCard from "@/components/QuoteCard";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import RandomQuoteButton from "@/components/RandomQuoteButton";
import SectionHeading from "@/components/SectionHeading";

const QuotesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quoteOfTheDay = getQuoteOfTheDay();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Inspirational Quotes | Rekhta Poetry</title>
        <meta name="description" content="Explore a collection of inspirational quotes from poets, philosophers, and thinkers throughout history." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif text-rekhta-brown mb-2">Inspirational Quotes</h1>
          <p className="text-rekhta-brown/70 mb-8 max-w-2xl">
            Wisdom and inspiration from poets, philosophers, and thinkers throughout history.
          </p>
        </motion.div>

        <div className="mb-12">
          <QuoteOfTheDay quote={quoteOfTheDay} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <SectionHeading title="Featured Quotes" subtitle="Handpicked inspirational quotes to motivate and inspire" />
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {quotes.slice(0, 5).map((quote) => (
                <motion.div
                  key={quote.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <QuoteCard quote={quote} />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <SectionHeading title="Random Quote Generator" />
            <RandomQuoteButton />
          </div>
        </div>

        <SectionHeading 
          title="All Quotes" 
          subtitle={`Browse our collection of ${quotes.length} inspirational quotes`}  
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.slice(5).map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 1.5) }}
            >
              <QuoteCard quote={quote} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuotesPage;
