
// Define shared types for the poetry application
export interface Poem {
  id: string;
  title?: string;
  content: string[];
  author: string;
  category?: string[];
  isFeatured?: boolean;
  language?: "urdu" | "hindi" | "english";
}

export interface Category {
  id: string;
  name: string;
}

export interface Poet {
  id: string;
  name: string;
}

export interface Language {
  id: string;
  name: string;
}
