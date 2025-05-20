
import { Poem } from "@/data/poems";
import PoemCard from "./PoemCard";

interface PoemGridProps {
  poems: Poem[];
  columns?: number;
}

const PoemGrid = ({ poems, columns = 3 }: PoemGridProps) => {
  let gridClass;
  
  switch (columns) {
    case 1:
      gridClass = "grid-cols-1";
      break;
    case 2:
      gridClass = "grid-cols-1 md:grid-cols-2";
      break;
    case 3:
    default:
      gridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      break;
    case 4:
      gridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      break;
  }

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {poems.map((poem) => (
        <PoemCard key={poem.id} poem={poem} />
      ))}
    </div>
  );
};

export default PoemGrid;
