
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Poem } from "@/data/poems";
import { Button } from "@/components/ui/button";

interface FeaturedPoemProps {
  poem: Poem;
}

const FeaturedPoem = ({ poem }: FeaturedPoemProps) => {
  return (
    <Card className="border-rekhta-gold/20 bg-gradient-to-br from-rekhta-cream to-rekhta-gold/10 overflow-hidden">
      <CardContent className="pt-8 pb-6 px-6 md:px-10">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-rekhta-gold font-medium">Featured Poetry</span>
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-rekhta-brown mt-1 mb-4">
            {poem.author}
          </h2>
        </div>
        
        <div className="poetry-text text-xl md:text-2xl lg:text-3xl font-serif font-medium text-rekhta-dark space-y-4 mb-8">
          {poem.content.map((line, index) => (
            <p key={index} className="leading-relaxed">{line}</p>
          ))}
        </div>
        
        <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
          <Link to={`/poem/${poem.id}`}>Read More</Link>
        </Button>
      </CardContent>
      
      <CardFooter className="bg-rekhta-dark/5 py-3 px-6 md:px-10">
        <div className="flex items-center space-x-2 text-xs text-rekhta-brown/80">
          <span className="font-medium">Categories:</span>
          {poem.category?.map((cat) => (
            <span key={cat} className="bg-white/50 py-1 px-2 rounded-full">
              {cat}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeaturedPoem;
