
import { Link } from "react-router-dom";
import { poets } from "@/data/poems";

const PoetsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {poets.map((poet) => (
        <Link key={poet.id} to={`/poet/${poet.id}`} className="block">
          <div className="border border-rekhta-gold/10 rounded-md p-6 hover:bg-rekhta-gold/5 transition-all hover:shadow-sm">
            <h3 className="font-serif text-xl text-rekhta-brown">{poet.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PoetsList;
