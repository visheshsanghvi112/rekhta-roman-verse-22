
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/poems";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const CategoryGrid = () => {
  // Find the motivation category to highlight it
  const motivationCategory = categories.find(cat => cat.id === "motivation");
  const otherCategories = categories.filter(cat => cat.id !== "motivation");
  
  // Take the first categories, we'll add motivation at the beginning
  const displayedCategories = [
    motivationCategory, 
    ...otherCategories.slice(0, categories.length >= 20 ? 19 : otherCategories.length)
  ].filter(Boolean);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {displayedCategories.map((category, index) => (
        <motion.div
          key={category?.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Link to={`/explore?category=${category?.id}`}>
            <Card className={`border-rekhta-gold/10 hover:border-rekhta-gold/30 transition-all hover:shadow-md ${
              category?.id === "motivation" 
                ? "bg-gradient-to-br from-rekhta-gold/20 to-rekhta-cream" 
                : "bg-gradient-to-br from-white to-rekhta-cream"
            }`}>
              <CardContent className="flex flex-col items-center justify-center p-6 h-24">
                {category?.id === "motivation" && (
                  <div className="mb-2 text-rekhta-gold">
                    <BookOpen size={18} />
                  </div>
                )}
                <span className={`font-serif text-lg ${
                  category?.id === "motivation" 
                    ? "text-rekhta-brown font-medium" 
                    : "text-rekhta-brown"
                }`}>
                  {category?.name}
                </span>
                {category?.id === "motivation" && (
                  <span className="text-xs text-rekhta-brown/70 mt-1">
                    Featured Collection
                  </span>
                )}
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;
