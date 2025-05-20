
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/poems";
import { motion } from "framer-motion";

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Link to={`/explore?category=${category.id}`}>
            <Card className="border-rekhta-gold/10 hover:border-rekhta-gold/30 transition-all hover:shadow-md bg-gradient-to-br from-white to-rekhta-cream">
              <CardContent className="flex flex-col items-center justify-center p-6 h-24">
                <span className="font-serif text-lg text-rekhta-brown">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;
