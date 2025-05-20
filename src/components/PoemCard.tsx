
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Poem } from "@/data/poems";

interface PoemCardProps {
  poem: Poem;
  featured?: boolean;
}

const PoemCard = ({ poem, featured = false }: PoemCardProps) => {
  return (
    <Link to={`/poem/${poem.id}`}>
      <Card className={`poetry-card overflow-hidden h-full border-rekhta-gold/10 ${featured ? 'bg-gradient-to-br from-rekhta-cream to-rekhta-gold/10' : ''}`}>
        <CardHeader className="pb-2">
          <div className="font-serif text-lg text-rekhta-brown">{poem.author}</div>
        </CardHeader>
        <CardContent className="poetry-text pb-6">
          <div className="line-clamp-4 text-rekhta-dark/90">
            {poem.content.map((line, index) => (
              <div key={index} className="mb-1">{line}</div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-2 border-t border-rekhta-gold/10">
          <div className="flex items-center space-x-2 text-xs text-rekhta-brown/60">
            {poem.category?.slice(0, 2).map((cat) => (
              <span key={cat} className="bg-rekhta-cream py-1 px-2 rounded-full">
                {cat}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PoemCard;
