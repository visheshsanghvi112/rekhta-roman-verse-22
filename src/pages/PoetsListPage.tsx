
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { poets, languages } from "@/data/poems";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const PoetsListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  
  // Filter poets based on search query and language filter
  const filteredPoets = poets.filter(poet => {
    const matchesSearch = poet.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!filter) return matchesSearch;
    
    // This is a simplification - in a real app, you'd have language data for each poet
    const poetLanguage = 
      poet.id.includes("ghalib") || 
      poet.id.includes("faiz") || 
      poet.id.includes("mir") || 
      poet.id.includes("iqbal") || 
      poet.id.includes("shakir") || 
      poet.id.includes("faraz") || 
      poet.id.includes("gulzar") || 
      poet.id.includes("azmi") || 
      poet.id.includes("sultanpuri") ? "urdu" :
      poet.id.includes("shakespeare") || 
      poet.id.includes("frost") || 
      poet.id.includes("dickinson") || 
      poet.id.includes("yeats") || 
      poet.id.includes("byron") || 
      poet.id.includes("henley") || 
      poet.id.includes("cummings") || 
      poet.id.includes("oliver") || 
      poet.id.includes("poe") ? "english" : "hindi";
    
    return matchesSearch && poetLanguage === filter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown mb-4">Explore Poets</h1>
          <p className="text-rekhta-brown/80">
            Discover the literary geniuses behind our collection of timeless poetry.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rekhta-brown/60" size={18} />
            <Input
              type="text"
              placeholder="Search poets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-rekhta-gold/20 focus:border-rekhta-gold focus:ring-1 focus:ring-rekhta-gold"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className={filter === null 
                ? "bg-rekhta-gold hover:bg-rekhta-gold/90 text-white" 
                : "border-rekhta-gold/30 text-rekhta-brown hover:bg-rekhta-gold/10"
              }
            >
              All
            </Button>
            {languages.map(language => (
              <Button
                key={language.id}
                variant={filter === language.id ? "default" : "outline"}
                onClick={() => setFilter(language.id)}
                className={filter === language.id 
                  ? "bg-rekhta-gold hover:bg-rekhta-gold/90 text-white" 
                  : "border-rekhta-gold/30 text-rekhta-brown hover:bg-rekhta-gold/10"
                }
              >
                {language.name}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
      
      <SectionHeading 
        title={`${filteredPoets.length} Poets Found`}
        subtitle="Click on a poet to explore their work"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredPoets.map((poet) => (
          <motion.div key={poet.id} variants={itemVariants}>
            <Link to={`/poet/${poet.id}`}>
              <Card className="overflow-hidden h-full border-rekhta-gold/10 hover:border-rekhta-gold/30 transition-all hover:shadow-md bg-gradient-to-br from-white to-rekhta-cream/50 hover-lift hover-glow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-rekhta-gold/10 flex items-center justify-center mb-4">
                    <User className="text-rekhta-gold" size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-rekhta-brown mb-2">{poet.name}</h3>
                  <p className="text-rekhta-brown/70 text-sm">
                    {poet.id.includes("shakespeare") || 
                     poet.id.includes("frost") || 
                     poet.id.includes("dickinson") ? "English Poet" : 
                     poet.id.includes("ghalib") || 
                     poet.id.includes("faiz") ? "Urdu Poet" : "Classical Poet"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      {filteredPoets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-rekhta-brown/70">No poets found matching your search criteria.</p>
          <Button 
            onClick={() => {
              setSearchQuery("");
              setFilter(null);
            }} 
            variant="outline" 
            className="mt-4 border-rekhta-gold/30 text-rekhta-brown hover:bg-rekhta-gold/10"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default PoetsListPage;
