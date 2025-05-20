import { englishPoems, EnglishPoem } from "./englishPoems";

export interface Poem {
  id: string;
  title?: string;
  content: string[];
  author: string;
  category?: string[];
  isFeatured?: boolean;
  language?: "urdu" | "hindi" | "english";
}

// Existing Urdu/Hindi poems
const urduHindiPoems: Poem[] = [
  {
    id: "ghalib-1",
    content: [
      "Hazaaron khwahishen aisi ke har khwahish pe dam nikle,",
      "Bahut nikle mere armaan lekin phir bhi kam nikle."
    ],
    author: "Mirza Ghalib",
    category: ["life", "desire"],
    isFeatured: true,
    language: "urdu"
  },
  {
    id: "faiz-1",
    content: [
      "Raat yun dil mein teri khoi hui yaad aayi,",
      "Jaise veerane mein chupke se bahaar aa jaye."
    ],
    author: "Faiz Ahmed Faiz",
    category: ["love", "memory"],
    language: "urdu"
  },
  {
    id: "mir-1",
    content: [
      "Patta patta, boota boota haal hamara jaane hai,",
      "Jaane na jaane gul hi na jaane baagh to saara jaane hai."
    ],
    author: "Mir Taqi Mir",
    category: ["nature", "knowledge"],
    language: "urdu"
  },
  {
    id: "iqbal-1",
    content: [
      "Khudi ko kar buland itna ke har taqdeer se pehle,",
      "Khuda bande se khud pooche, bata teri raza kya hai."
    ],
    author: "Allama Iqbal",
    category: ["inspiration", "spirituality"],
    isFeatured: true,
    language: "urdu"
  },
  {
    id: "shakir-1",
    content: [
      "Kuch is tarah teri palkain meri palkon se mila de,",
      "Aansoo tere saare meri palkon pe saja de."
    ],
    author: "Parveen Shakir",
    category: ["love"],
    language: "urdu"
  },
  {
    id: "ghalib-2",
    content: [
      "Dil hi to hai na sang-o-khisht, dard se bhar na aaye kyun,",
      "Royenge hum hazaar baar, koi humein sataaye kyun."
    ],
    author: "Mirza Ghalib",
    category: ["sorrow", "emotion"],
    language: "urdu"
  },
  {
    id: "faraz-1",
    content: [
      "Ranjish hi sahi, dil hi dukhane ke liye aa,",
      "Aa phir se mujhe chhod ke jaane ke liye aa."
    ],
    author: "Ahmed Faraz",
    category: ["heartbreak", "love"],
    language: "urdu"
  },
  {
    id: "gulzar-1",
    content: [
      "Dil dhoondta hai phir wahi fursat ke raat din,",
      "Baithe rahein tasavvur-e-jaan kiye hue."
    ],
    author: "Gulzar",
    category: ["nostalgia", "memory"],
    language: "urdu"
  },
  {
    id: "azmi-1",
    content: [
      "Agar zinda hain to yeh bhi ek bahana hai,",
      "Phir kyun maut ka intezaar karna."
    ],
    author: "Kaifi Azmi",
    category: ["life", "philosophy"],
    language: "urdu"
  },
  {
    id: "sultanpuri-1",
    content: [
      "Chalo ek baar phir se ajnabi ban jaayein hum dono,",
      "Na main tumse koi shikwa na tum mujhse koi shikwa."
    ],
    author: "Majrooh Sultanpuri",
    category: ["relationships", "parting"],
    language: "urdu"
  },
  {
    id: "mir-2",
    content: [
      "Ishq mujh ko nahi wehshat hi sahi,",
      "Meri wehshat teri shamat hi sahi."
    ],
    author: "Mir Taqi Mir",
    category: ["love", "madness"],
    language: "urdu"
  },
  {
    id: "faiz-2",
    content: [
      "Mujh se pehli si muhabbat meri mehboob na maang,",
      "Maine samjha tha ke tu hai to darakhshaan hai hayat."
    ],
    author: "Faiz Ahmed Faiz",
    category: ["love", "disillusionment"],
    isFeatured: true,
    language: "urdu"
  },
  // Additional Ghalib couplets
  {
    id: "ghalib-3",
    content: [
      "Ishq par zor nahin hai ye woh aatish Ghalib,",
      "Jo lagaye na lage aur bujhaye na bane."
    ],
    author: "Mirza Ghalib",
    category: ["love", "passion"],
    language: "urdu"
  },
  {
    id: "ghalib-4",
    content: [
      "Nuktacheen hai gham-e-dil usko sunaye na bane,",
      "Kya bane baat jahaan mein tum bhala bataye na bane."
    ],
    author: "Mirza Ghalib",
    category: ["sorrow", "expression"],
    language: "urdu"
  },
  {
    id: "ghalib-5",
    content: [
      "Hazaaron raahen aisi ke manzil na ho,",
      "Sab pe chalna hai phir bhi na koi thakna."
    ],
    author: "Mirza Ghalib",
    category: ["journey", "perseverance"],
    language: "urdu"
  },
  {
    id: "ghalib-6",
    content: [
      "Yeh na thi hamari qismat ke visal-e-yaar hota,",
      "Agar aur jeete rehte yahi intezaar hota."
    ],
    author: "Mirza Ghalib",
    category: ["fate", "longing"],
    language: "urdu"
  },
  {
    id: "ghalib-7",
    content: [
      "Bazeecha-e-atfaal hai duniya mere aage,",
      "Hota hai shab-o-roz tamaasha mere aage."
    ],
    author: "Mirza Ghalib",
    category: ["philosophy", "worldview"],
    language: "urdu"
  },
  {
    id: "ghalib-8",
    content: [
      "Rahiye ab aisi jagah chalien ke jahan,",
      "Koi na ho, koi sun na sake."
    ],
    author: "Mirza Ghalib",
    category: ["solitude", "escape"],
    language: "urdu"
  },
  // Additional Gulzar couplets
  {
    id: "gulzar-2",
    content: [
      "Tere jaise shehar mein, koi aaya hai kahin,",
      "Phir bhi sab kuch puraana lagta hai."
    ],
    author: "Gulzar",
    category: ["nostalgia", "memories"],
    language: "urdu"
  },
  {
    id: "gulzar-3",
    content: [
      "Jab tak hai jaan, main na chhodunga tera saath,",
      "Dil ke taar chhed ke, khelta rahega ye raat."
    ],
    author: "Gulzar",
    category: ["love", "commitment"],
    language: "urdu"
  },
  {
    id: "gulzar-4",
    content: [
      "Koi saath de ya na de, dosti nibhani padti hai,",
      "Dosti karna bhi ek fasana hai."
    ],
    author: "Gulzar",
    category: ["friendship", "loyalty"],
    language: "urdu"
  },
  {
    id: "gulzar-5",
    content: [
      "Mitti ki khushboo lekar, baadal aaye,",
      "Barish ki boondein bhi kuch keh jaayein."
    ],
    author: "Gulzar",
    category: ["nature", "rain"],
    language: "urdu"
  },
  {
    id: "gulzar-6",
    content: [
      "Raat yun dil mein teri khoi hui yaad aayi,",
      "Jaise veerane mein chupke se bahaar aa jaaye."
    ],
    author: "Gulzar",
    category: ["love", "memory"],
    language: "urdu"
  }
];

// Convert English poems to the Poem interface
const convertedEnglishPoems: Poem[] = englishPoems.map(poem => ({
  ...poem,
  language: "english" as const
}));

// Combine all poems
export const poems: Poem[] = [...urduHindiPoems, ...convertedEnglishPoems];

export const featuredPoems = poems.filter(poem => poem.isFeatured === true);

// Add new categories for English poetry
export const categories = [
  { id: "love", name: "Love" },
  { id: "life", name: "Life" },
  { id: "nature", name: "Nature" },
  { id: "inspiration", name: "Inspiration" },
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
  { id: "existentialism", name: "Existentialism" }
];

// Add new poets
export const poets = [
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
  { id: "poe", name: "Edgar Allan Poe" }
];

// Language filter options
export const languages = [
  { id: "urdu", name: "Urdu" },
  { id: "hindi", name: "Hindi" },
  { id: "english", name: "English" }
];
