
import { categories } from "@/data/poems";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const collectionImages = [
  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", // starry night
  "https://images.unsplash.com/photo-1500673922987-e212871fec22", // water and trees
  "https://images.unsplash.com/photo-1466442929976-97f336a657be", // mosque
];

const Collections = [
  {
    id: "love",
    title: "Expressions of Love",
    description: "Poetry that captures the essence of love in its many forms.",
    image: collectionImages[0],
  },
  {
    id: "nature",
    title: "Reflections on Nature",
    description: "Verses that celebrate the beauty and wisdom of the natural world.",
    image: collectionImages[1],
  },
  {
    id: "spirituality",
    title: "Spiritual Journeys",
    description: "Poetry exploring spiritual awakening, divine connections, and inner peace.",
    image: collectionImages[2],
  },
];

const CollectionsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown mb-4">
          Collections
        </h1>
        <p className="text-rekhta-brown/80">
          Curated collections of poetry organized by themes, moods, and experiences.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="font-serif text-2xl text-rekhta-brown mb-6 pb-2 border-b border-rekhta-gold/20">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Collections.map((collection) => (
            <Link key={collection.id} to={`/explore?category=${collection.id}`}>
              <div className="group overflow-hidden rounded-lg bg-rekhta-cream border border-rekhta-gold/20 h-full hover:shadow-md transition-all">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-rekhta-brown mb-2">{collection.title}</h3>
                  <p className="text-rekhta-brown/80 text-sm">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl text-rekhta-brown mb-6 pb-2 border-b border-rekhta-gold/20">
          All Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/explore?category=${category.id}`}>
              <Card className="border-rekhta-gold/10 hover:border-rekhta-gold/30 transition-all hover:shadow-md bg-rekhta-cream">
                <CardContent className="flex flex-col items-center justify-center p-6 h-24">
                  <span className="font-serif text-lg text-rekhta-brown">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
