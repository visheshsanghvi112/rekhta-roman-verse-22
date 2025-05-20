
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { featuredPoems, poems, languages } from "@/data/poems";
import FeaturedPoem from "@/components/FeaturedPoem";
import SectionHeading from "@/components/SectionHeading";
import PoemGrid from "@/components/PoemGrid";
import CategoryGrid from "@/components/CategoryGrid";
import LanguageFilter from "@/components/LanguageFilter";
import { Shuffle, BookOpen, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [currentPoem, setCurrentPoem] = useState(featuredPoems[0] || poems[0]);
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleRandomPoem = () => {
    const randomIndex = Math.floor(Math.random() * poems.length);
    setCurrentPoem(poems[randomIndex]);
  };

  // Filter poems based on language if selected
  const filteredPoems = activeLanguage 
    ? poems.filter(poem => poem.language === activeLanguage).slice(0, 6)
    : poems.slice(0, 6);

  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
      className="container mx-auto py-8 px-4"
    >
      <motion.section variants={itemVariants} className="mb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-rekhta-brown mb-4"
            >
              Discover the Beauty of<br />
              <span className="text-rekhta-gold">World Poetry</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-rekhta-brown/80 mb-6"
            >
              A calm, focused environment where poetry enthusiasts can explore, 
              read, and emotionally connect with classical and contemporary poems.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
            >
              <Button 
                onClick={handleRandomPoem} 
                className="bg-rekhta-gold hover:bg-rekhta-gold/90 text-white animate-pulse"
              >
                <Shuffle className="mr-2" />
                Random Poetry
              </Button>
              <Button asChild variant="outline" className="border-rekhta-gold text-rekhta-brown hover:bg-rekhta-gold/10">
                <Link to="/explore">
                  <BookOpen className="mr-2" />
                  Browse Collection
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <FeaturedPoem poem={currentPoem} />
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-16">
        <SectionHeading 
          title="Recent Poems"
          subtitle="Explore our latest additions"
          action={
            <div className="flex items-center">
              <LanguageFilter 
                languages={languages}
                activeLanguage={activeLanguage}
                onLanguageChange={setActiveLanguage}
              />
              <Button asChild variant="link" className="text-rekhta-brown ml-2">
                <Link to="/explore">View All</Link>
              </Button>
            </div>
          }
        />
        <PoemGrid poems={filteredPoems} />
      </motion.section>

      <motion.section 
        variants={itemVariants}
        className="mb-16"
      >
        <SectionHeading 
          title="Browse by Categories"
          subtitle="Find poetry that speaks to your mood"
        />
        <CategoryGrid />
      </motion.section>

      <motion.section 
        variants={itemVariants}
        whileInView={{ 
          scale: [0.98, 1],
          opacity: [0.8, 1]
        }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 px-4 bg-gradient-to-r from-rekhta-gold/10 via-rekhta-cream to-rekhta-gold/10 rounded-lg shadow-sm"
      >
        <h2 className="font-serif text-2xl md:text-3xl text-rekhta-brown mb-3">
          The Legacy of World Poetry
        </h2>
        <p className="text-rekhta-brown/80 max-w-2xl mx-auto mb-6">
          Our mission is to keep the legacy of Urdu, Hindi, and English poetry alive and accessible 
          for new generations in an elegant, digital format.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
            <Link to="/explore">
              <TrendingUp className="mr-2" />
              Start Exploring
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-rekhta-brown text-rekhta-brown hover:bg-rekhta-brown/10">
            <Link to="/collections">
              <Heart className="mr-2" />
              Featured Collections
            </Link>
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Index;
