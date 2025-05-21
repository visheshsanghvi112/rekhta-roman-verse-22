
import { englishPoems } from "../englishPoems";
import { Poem, Category, Poet, Language } from "../types";
import { urduPoems } from "./urdu";
import { hindiPoems } from "./hindi";
import { motivationalPoems } from "./motivational";

// Combine all poems
export const poems: Poem[] = [...urduPoems, ...englishPoems, ...hindiPoems, ...motivationalPoems];

// Get featured poems
export const featuredPoems = poems.filter(poem => poem.isFeatured === true);

// Categories
export const categories: Category[] = [
  { id: "love", name: "Love" },
  { id: "life", name: "Life" },
  { id: "nature", name: "Nature" },
  { id: "inspiration", name: "Inspiration" },
  { id: "motivation", name: "Motivation" },
  { id: "philosophy", name: "Philosophy" },
  { id: "spirituality", name: "Spirituality" },
  { id: "memory", name: "Memory" },
  { id: "desire", name: "Desire" },
  { id: "heartbreak", name: "Heartbreak" },
  { id: "relationships", name: "Relationships" },
  { id: "passion", name: "Passion" },
  { id: "solitude", name: "Solitude" },
  { id: "friendship", name: "Friendship" },
  { id: "beauty", name: "Beauty" },
  { id: "courage", name: "Courage" },
  { id: "journey", name: "Journey" },
  { id: "hope", name: "Hope" },
  { id: "dreams", name: "Dreams" },
  { id: "purpose", name: "Purpose" },
  { id: "greatness", name: "Greatness" },
  { id: "perception", name: "Perception" },
  { id: "existentialism", name: "Existentialism" },
  { id: "power", name: "Power" },
  { id: "rebellion", name: "Rebellion" },
  { id: "humanity", name: "Humanity" },
  { id: "wisdom", name: "Wisdom" },
  { id: "devotion", name: "Devotion" },
  { id: "introspection", name: "Introspection" },
  { id: "simplicity", name: "Simplicity" },
  { id: "empowerment", name: "Empowerment" },
  { id: "transience", name: "Transience" },
  { id: "destiny", name: "Destiny" },
  { id: "revolution", name: "Revolution" },
  { id: "stoicism", name: "Stoicism" },
  { id: "resilience", name: "Resilience" },
  { id: "mortality", name: "Mortality" },
  { id: "authentic", name: "Authenticity" },
  { id: "perseverance", name: "Perseverance" },
  { id: "mindset", name: "Mindset" },
  { id: "growth", name: "Growth" },
  { id: "self-reliance", name: "Self-reliance" }
];

// Poets
export const poets: Poet[] = [
  { id: "ghalib", name: "Mirza Ghalib" },
  { id: "faiz", name: "Faiz Ahmed Faiz" },
  { id: "mir", name: "Mir Taqi Mir" },
  { id: "iqbal", name: "Allama Iqbal" },
  { id: "shakir", name: "Parveen Shakir" },
  { id: "faraz", name: "Ahmed Faraz" },
  { id: "gulzar", name: "Gulzar" },
  { id: "azmi", name: "Kaifi Azmi" },
  { id: "sultanpuri", name: "Majrooh Sultanpuri" },
  { id: "shakespeare", name: "William Shakespeare" },
  { id: "frost", name: "Robert Frost" },
  { id: "dickinson", name: "Emily Dickinson" },
  { id: "yeats", name: "W.B. Yeats" },
  { id: "rumi", name: "Rumi" },
  { id: "byron", name: "Lord Byron" },
  { id: "henley", name: "William Ernest Henley" },
  { id: "cummings", name: "E.E. Cummings" },
  { id: "oliver", name: "Mary Oliver" },
  { id: "poe", name: "Edgar Allan Poe" },
  { id: "wordsworth", name: "William Wordsworth" },
  { id: "keats", name: "John Keats" },
  { id: "blake", name: "William Blake" },
  { id: "whitman", name: "Walt Whitman" },
  { id: "kipling", name: "Rudyard Kipling" },
  { id: "eliot", name: "T.S. Eliot" },
  { id: "plath", name: "Sylvia Plath" },
  { id: "angelou", name: "Maya Angelou" },
  { id: "tennyson", name: "Alfred, Lord Tennyson" },
  { id: "shelley", name: "Percy Bysshe Shelley" },
  { id: "rilke", name: "Rainer Maria Rilke" },
  { id: "thoreau", name: "Henry David Thoreau" },
  { id: "gibran", name: "Kahlil Gibran" },
  { id: "emerson", name: "Ralph Waldo Emerson" },
  { id: "tagore", name: "Rabindranath Tagore" },
  { id: "neruda", name: "Pablo Neruda" },
  { id: "wilde", name: "Oscar Wilde" },
  { id: "auden", name: "W.H. Auden" },
  { id: "browning", name: "Elizabeth Barrett Browning" },
  { id: "hughes", name: "Langston Hughes" },
  { id: "sahir", name: "Sahir Ludhianvi" },
  { id: "jaun", name: "Jaun Elia" },
  { id: "nida", name: "Nida Fazli" },
  { id: "bashir", name: "Bashir Badr" },
  { id: "rahat", name: "Rahat Indori" },
  { id: "dushyant", name: "Dushyant Kumar" },
  { id: "nirala", name: "Suryakant Tripathi 'Nirala'" },
  { id: "dinkar", name: "Ramdhari Singh Dinkar" },
  { id: "harivansh", name: "Harivansh Rai Bachchan" },
  { id: "mahadevi", name: "Mahadevi Verma" },
  { id: "kumar", name: "Kumar Vishwas" },
  { id: "wasim", name: "Wasim Barelvi" },
  { id: "amrita", name: "Amrita Pritam" },
  { id: "sumitranandan", name: "Sumitranandan Pant" },
  { id: "kabir", name: "Kabir Das" },
  { id: "tulsidas", name: "Tulsidas" },
  { id: "habib", name: "Habib Jalib" },
  { id: "kafi", name: "Kafi Azmi" },
  { id: "qateel", name: "Qateel Shifai" },
  { id: "javed", name: "Javed Akhtar" },
  { id: "prasad", name: "Jaishankar Prasad" },
  { id: "maithili", name: "Maithilisharan Gupt" },
  { id: "firaq", name: "Firaq Gorakhpuri" },
  { id: "josh", name: "Josh Malihabadi" },
  { id: "longfellow", name: "Henry Wadsworth Longfellow" },
  { id: "keller", name: "Helen Keller" },
  { id: "havlicek", name: "Christian D. Larson" },
  { id: "arnold", name: "Matthew Arnold" },
  { id: "murray", name: "Douglas Malloch" },
  { id: "aurelius", name: "Marcus Aurelius" },
  { id: "williamson", name: "Marianne Williamson" }
];

// Languages
export const languages: Language[] = [
  { id: "urdu", name: "Urdu" },
  { id: "hindi", name: "Hindi" },
  { id: "english", name: "English" }
];
