
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { poems, categories, poets } from "@/data/poems";
import PoemGrid from "@/components/PoemGrid";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Search, Book, User } from "lucide-react";

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [selectedPoet, setSelectedPoet] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [filteredPoems, setFilteredPoems] = useState(poems);
  
  const languages = [
    { id: "all", name: "All Languages" },
    { id: "urdu", name: "Urdu" },
    { id: "hindi", name: "Hindi" },
    { id: "english", name: "English" }
  ];

  // Get the category name for SEO title
  const categoryName = selectedCategory !== "all" 
    ? categories.find(cat => cat.id === selectedCategory)?.name || selectedCategory 
    : "All Categories";

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = [...poems];

    if (searchTerm) {
      filtered = filtered.filter(
        (poem) =>
          poem.content.some((line) =>
            line.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          poem.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (poem.title && poem.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (poem) => poem.category?.includes(selectedCategory)
      );
    }

    if (selectedPoet && selectedPoet !== "all") {
      filtered = filtered.filter(
        (poem) => poem.author.toLowerCase() === selectedPoet.toLowerCase()
      );
    }
    
    if (selectedLanguage && selectedLanguage !== "all") {
      filtered = filtered.filter(
        (poem) => poem.language === selectedLanguage
      );
    }

    setFilteredPoems(filtered);
  }, [searchTerm, selectedCategory, selectedPoet, selectedLanguage]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    const params = new URLSearchParams();
    if (value && value !== "all") params.set("category", value);
    navigate({ search: params.toString() });
  };
  
  const motionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>{categoryName} Poetry | Explore Rekhta Realms</title>
        <meta 
          name="description" 
          content={`Explore beautiful ${categoryName} poetry in Urdu, Hindi, and English. Find poems by your favorite poets.`} 
        />
      </Helmet>

      <div className="container mx-auto py-8 px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={motionVariants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown mb-4">
            {selectedCategory !== "all" ? `${categoryName} Poetry` : "Explore Poetry"}
          </h1>
          <p className="text-rekhta-brown/80">
            Discover the rich tapestry of Urdu, Hindi, and English poetry. Browse by poet, 
            theme, or search for specific verses.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={motionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rekhta-brown/50" size={16} />
              <Input
                placeholder="Search poems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-rekhta-gold/20 pl-10"
              />
            </div>
            <div className="relative">
              <Book className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rekhta-brown/50" size={16} />
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="border-rekhta-gold/20 pl-10">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rekhta-brown/50" size={16} />
              <Select value={selectedPoet} onValueChange={setSelectedPoet}>
                <SelectTrigger className="border-rekhta-gold/20 pl-10">
                  <SelectValue placeholder="Select Poet" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="all">All Poets</SelectItem>
                  {poets.map((poet) => (
                    <SelectItem key={poet.id} value={poet.name}>
                      {poet.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="border-rekhta-gold/20">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language.id} value={language.id}>
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={motionVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-rekhta-brown/70">
            {filteredPoems.length} {filteredPoems.length === 1 ? "poem" : "poems"} found
            {selectedCategory !== "all" ? ` in ${categoryName}` : ""}
          </p>
        </motion.div>

        {filteredPoems.length > 0 ? (
          <PoemGrid poems={filteredPoems} columns={3} />
        ) : (
          <motion.div 
            className="text-center py-12"
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-rekhta-brown">No poems found matching your criteria.</p>
            <p className="text-rekhta-brown/70 mt-2">Try adjusting your filters or search term.</p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ExplorePage;
