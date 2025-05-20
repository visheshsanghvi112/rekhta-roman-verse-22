
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { poems, poets } from "@/data/poems";
import PoemGrid from "@/components/PoemGrid";

const PoetPage = () => {
  const { id } = useParams<{ id: string }>();
  const poet = poets.find((p) => p.id === id);
  const poetPoems = poems.filter((poem) => 
    poem.author.toLowerCase().includes(poet?.name.toLowerCase() || "")
  );

  if (!poet) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link to="/explore" className="text-rekhta-brown hover:text-rekhta-gold text-sm flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Explore
        </Link>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown mb-6">
          {poet.name}
        </h1>
        <div className="bg-rekhta-gold/5 border border-rekhta-gold/10 rounded-lg p-6 mb-8">
          <p className="text-rekhta-brown/80 mb-4">
            {poet.name} is one of the most celebrated poets in the tradition of Urdu and Hindi literature. 
            Their works have captivated readers for generations with profound insights into human emotions, 
            philosophy, and the beauty of language.
          </p>
          <p className="text-rekhta-brown/80">
            The poems presented here in Roman script allow readers from diverse backgrounds 
            to appreciate the depth and beauty of their writing, even without knowledge of 
            the original script.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-serif text-2xl text-rekhta-brown mb-6 pb-2 border-b border-rekhta-gold/20">
          Poems by {poet.name}
        </h2>
      </div>

      {poetPoems.length > 0 ? (
        <PoemGrid poems={poetPoems} columns={3} />
      ) : (
        <div className="text-center py-12">
          <p className="text-rekhta-brown">No poems found for this poet.</p>
        </div>
      )}
    </div>
  );
};

export default PoetPage;
