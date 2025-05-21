
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { poems, poets } from "@/data/poems";
import PoemGrid from "@/components/PoemGrid";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const PoetPage = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const poet = poets.find((p) => p.id === id);

  // Filter by poet and search query if any
  const poetPoems = poems.filter((poem) => {
    const matchesPoet = poem.author.toLowerCase().includes(poet?.name.toLowerCase() || "");
    const matchesSearch = searchQuery.length > 0 ? 
      (poem.content.some(line => line.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (poem.title && poem.title.toLowerCase().includes(searchQuery.toLowerCase()))) :
      true;
    return matchesPoet && matchesSearch;
  });

  if (!poet) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <Helmet>
          <title>Poet Not Found | Rekhta Realms</title>
          <meta name="description" content="The poet you're looking for could not be found." />
        </Helmet>
        <h1 className="font-serif text-3xl text-rekhta-brown mb-6">Poet not found</h1>
        <p className="text-rekhta-brown/80 mb-8">
          The poet you're looking for could not be found.
        </p>
        <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
          <Link to="/explore">Browse Poems</Link>
        </Button>
      </div>
    );
  }

  // Determine language for SEO
  const poetLanguage = 
    poet.id.includes("ghalib") || 
    poet.id.includes("faiz") || 
    poet.id.includes("mir") || 
    poet.id.includes("iqbal") ? "Urdu" :
    poet.id.includes("shakespeare") || 
    poet.id.includes("frost") || 
    poet.id.includes("dickinson") ? "English" : "Hindi";

  // Get few sample poem lines for meta description
  const sampleLines = poetPoems.length > 0 
    ? poetPoems[0].content.slice(0, 2).join(' ') 
    : `Explore the beautiful poetry of ${poet.name}`;

  return (
    <>
      <Helmet>
        <title>{poet.name} | Famous {poetLanguage} Poet | Rekhta Realms</title>
        <meta name="description" content={`Explore the beautiful poetry of ${poet.name}. Sample: "${sampleLines}"`} />
        <meta name="keywords" content={`${poet.name}, ${poetLanguage} poetry, shayari, poems, classic literature`} />
        <meta property="og:title" content={`${poet.name} | Famous ${poetLanguage} Poet`} />
        <meta property="og:description" content={`Explore the beautiful poetry of ${poet.name}.`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-8 px-4"
      >
        <div className="mb-6">
          <Link to="/poets" className="text-rekhta-brown hover:text-rekhta-gold text-sm flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Poets
          </Link>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown mb-6">
            {poet.name}
          </h1>
          <div className="bg-rekhta-gold/5 border border-rekhta-gold/10 rounded-lg p-6 mb-8">
            <p className="text-rekhta-brown/80 mb-4">
              {poet.name} is one of the most celebrated poets in the tradition of {poetLanguage} literature. 
              Their works have captivated readers for generations with profound insights into human emotions, 
              philosophy, and the beauty of language.
            </p>
            <p className="text-rekhta-brown/80">
              The poems presented here in Roman script allow readers from diverse backgrounds 
              to appreciate the depth and beauty of their writing, even without knowledge of 
              the original script.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <h2 className="font-serif text-2xl text-rekhta-brown pb-2 border-b border-rekhta-gold/20">
              Poems by {poet.name}
            </h2>
            
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rekhta-brown/60" size={18} />
              <Input
                type="text"
                placeholder="Search in poems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-rekhta-gold/20 focus:border-rekhta-gold focus:ring-1 focus:ring-rekhta-gold"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-rekhta-brown/70 text-sm">
              Found {poetPoems.length} poem{poetPoems.length !== 1 ? 's' : ''} by {poet.name}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {poetPoems.length > 0 ? (
            <PoemGrid poems={poetPoems} columns={3} />
          ) : (
            <div className="text-center py-12">
              <p className="text-rekhta-brown">No poems found for this poet{searchQuery && ' matching your search'}.</p>
              {searchQuery && (
                <Button 
                  onClick={() => setSearchQuery("")} 
                  variant="outline" 
                  className="mt-4 border-rekhta-gold/30 text-rekhta-brown hover:bg-rekhta-gold/10"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default PoetPage;
