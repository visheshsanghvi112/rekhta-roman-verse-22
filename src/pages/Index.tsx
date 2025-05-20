
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { featuredPoems, poems } from "@/data/poems";
import FeaturedPoem from "@/components/FeaturedPoem";
import SectionHeading from "@/components/SectionHeading";
import PoemGrid from "@/components/PoemGrid";
import CategoryGrid from "@/components/CategoryGrid";
import { Shuffle } from "lucide-react";

const Index = () => {
  const [currentPoem, setCurrentPoem] = useState(featuredPoems[0] || poems[0]);

  const handleRandomPoem = () => {
    const randomIndex = Math.floor(Math.random() * poems.length);
    setCurrentPoem(poems[randomIndex]);
  };

  const recentPoems = poems.slice(0, 6);

  return (
    <div className="container mx-auto py-8 px-4">
      <section className="mb-16">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-rekhta-brown mb-4">
              Discover the Beauty of<br />
              <span className="text-rekhta-gold">Urdu & Hindi Poetry</span>
            </h1>
            <p className="text-rekhta-brown/80 mb-6">
              A calm, focused environment where poetry enthusiasts can explore, 
              read, and emotionally connect with classical and contemporary poems.
            </p>
            <Button 
              onClick={handleRandomPoem} 
              className="bg-rekhta-gold hover:bg-rekhta-gold/90 text-white mb-4"
            >
              <Shuffle className="mr-2" />
              Random Poetry
            </Button>
          </div>
          <FeaturedPoem poem={currentPoem} />
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading 
          title="Recent Poems"
          subtitle="Explore our latest additions"
          action={
            <Button asChild variant="link" className="text-rekhta-brown">
              <Link to="/explore">View All</Link>
            </Button>
          }
        />
        <PoemGrid poems={recentPoems} />
      </section>

      <section className="mb-16">
        <SectionHeading 
          title="Browse by Categories"
          subtitle="Find poetry that speaks to your mood"
        />
        <CategoryGrid />
      </section>

      <section className="text-center py-10 px-4 bg-rekhta-gold/10 rounded-lg">
        <h2 className="font-serif text-2xl md:text-3xl text-rekhta-brown mb-3">
          The Legacy of Urdu & Hindi Poetry
        </h2>
        <p className="text-rekhta-brown/80 max-w-2xl mx-auto mb-6">
          Our mission is to keep the legacy of Urdu and Hindi poetry alive and accessible 
          for new generations in an elegant, digital format.
        </p>
        <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
          <Link to="/explore">Start Exploring</Link>
        </Button>
      </section>
    </div>
  );
};

export default Index;
