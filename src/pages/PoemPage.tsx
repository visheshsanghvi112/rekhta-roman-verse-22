
import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Note, Book } from "lucide-react";
import { poems } from "@/data/poems";
import { useToast } from "@/components/ui/use-toast";

const PoemPage = () => {
  const { id } = useParams<{ id: string }>();
  const poem = poems.find((p) => p.id === id);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const handleSaveNotes = () => {
    localStorage.setItem(`poem_notes_${id}`, notes);
    toast({
      title: "Notes saved",
      description: "Your notes have been saved successfully.",
    });
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  if (!poem) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="font-serif text-3xl text-rekhta-brown mb-6">Poem not found</h1>
        <p className="text-rekhta-brown/80 mb-8">
          The poem you're looking for could not be found.
        </p>
        <Button asChild className="bg-rekhta-brown hover:bg-rekhta-brown/90 text-white">
          <Link to="/explore">Browse Poems</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link to="/explore" className="text-rekhta-brown hover:text-rekhta-gold text-sm flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Poems
          </Link>
        </div>

        <div className="mb-10">
          <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="font-serif text-3xl md:text-4xl text-rekhta-brown">{poem.author}</h1>
            <div className="flex items-center mt-2 sm:mt-0">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-rekhta-brown" 
                onClick={() => setShowNotes(!showNotes)}
              >
                <Note size={16} className="mr-2" />
                {showNotes ? "Hide Notes" : "Add Notes"}
              </Button>
            </div>
          </div>

          {poem.category && (
            <div className="flex flex-wrap gap-2 mb-6">
              {poem.category.map((cat) => (
                <span key={cat} className="text-xs bg-rekhta-gold/10 text-rekhta-brown/80 py-1 px-2 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>

        <Card className="mb-8 border-rekhta-gold/10">
          <CardContent className="pt-6">
            <div className="poetry-text text-xl md:text-2xl font-serif text-rekhta-dark space-y-6">
              {poem.content.map((line, index) => (
                <p key={index} className="leading-relaxed">{line}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {showNotes && (
          <Card className="mb-8 border-rekhta-gold/10 bg-rekhta-gold/5">
            <CardContent className="pt-6">
              <h3 className="font-serif text-xl text-rekhta-brown mb-4 flex items-center">
                <Note size={20} className="mr-2" /> Your Notes
              </h3>
              <textarea
                ref={textareaRef}
                value={notes}
                onChange={handleNoteChange}
                className="w-full p-3 rounded-md border border-rekhta-gold/20 bg-white min-h-[150px] focus:outline-none focus:ring-2 focus:ring-rekhta-gold/30"
                placeholder="Write your thoughts and reflections here..."
              />
              <Button 
                onClick={handleSaveNotes} 
                className="mt-4 bg-rekhta-brown hover:bg-rekhta-brown/90 text-white"
              >
                Save Notes
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="mb-8 p-6 rounded-md bg-rekhta-gold/5 border border-rekhta-gold/10">
          <h3 className="font-serif text-xl text-rekhta-brown mb-4 flex items-center">
            <Book size={20} className="mr-2" /> About the Poet
          </h3>
          <p className="text-rekhta-brown/80">
            {poem.author} is one of the most celebrated poets in the tradition of Urdu and Hindi literature. 
            Their works have captivated readers for generations with profound insights into human emotions, 
            philosophy, and the beauty of language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemPage;
