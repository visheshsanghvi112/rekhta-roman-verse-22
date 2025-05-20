
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const ExplorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedPoet, setSelectedPoet] = useState("");
  const [filteredPoems, setFilteredPoems] = useState(poems);

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
          poem.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (poem) => poem.category?.includes(selectedCategory)
      );
    }

    if (selectedPoet) {
      filtered = filtered.filter(
        (poem) => poem.author.toLowerCase().includes(selectedPoet.toLowerCase())
      );
    }

    setFilteredPoems(filtered);
  }, [searchTerm, selectedCategory, selectedPoet]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    const params = new URLSearchParams();
    if (value) params.set("category", value);
    navigate({ search: params.toString() });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown mb-4">
          Explore Poetry
        </h1>
        <p className="text-rekhta-brown/80">
          Discover the rich tapestry of Urdu and Hindi poetry. Browse by poet, 
          theme, or search for specific verses.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Input
              placeholder="Search poems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-rekhta-gold/20"
            />
          </div>
          <div>
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="border-rekhta-gold/20">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={selectedPoet} onValueChange={setSelectedPoet}>
              <SelectTrigger className="border-rekhta-gold/20">
                <SelectValue placeholder="Select Poet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Poets</SelectItem>
                {poets.map((poet) => (
                  <SelectItem key={poet.id} value={poet.name}>
                    {poet.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-rekhta-brown/70">
          {filteredPoems.length} {filteredPoems.length === 1 ? "poem" : "poems"} found
        </p>
      </div>

      {filteredPoems.length > 0 ? (
        <PoemGrid poems={filteredPoems} columns={3} />
      ) : (
        <div className="text-center py-12">
          <p className="text-rekhta-brown">No poems found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
