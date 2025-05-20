
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/poems";

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link key={category.id} to={`/explore?category=${category.id}`}>
          <Card className="border-rekhta-gold/10 hover:border-rekhta-gold/30 transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-6 h-24">
              <span className="font-serif text-lg text-rekhta-brown">{category.name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
