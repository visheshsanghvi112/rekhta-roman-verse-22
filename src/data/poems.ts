
export interface Poem {
  id: string;
  title?: string;
  content: string[];
  author: string;
  category?: string[];
  isFeatured?: boolean;
}

export const poems: Poem[] = [
  {
    id: "ghalib-1",
    content: [
      "Hazaaron khwahishen aisi ke har khwahish pe dam nikle,",
      "Bahut nikle mere armaan lekin phir bhi kam nikle."
    ],
    author: "Mirza Ghalib",
    category: ["life", "desire"],
    isFeatured: true
  },
  {
    id: "faiz-1",
    content: [
      "Raat yun dil mein teri khoi hui yaad aayi,",
      "Jaise veerane mein chupke se bahaar aa jaye."
    ],
    author: "Faiz Ahmed Faiz",
    category: ["love", "memory"]
  },
  {
    id: "mir-1",
    content: [
      "Patta patta, boota boota haal hamara jaane hai,",
      "Jaane na jaane gul hi na jaane baagh to saara jaane hai."
    ],
    author: "Mir Taqi Mir",
    category: ["nature", "knowledge"]
  },
  {
    id: "iqbal-1",
    content: [
      "Khudi ko kar buland itna ke har taqdeer se pehle,",
      "Khuda bande se khud pooche, bata teri raza kya hai."
    ],
    author: "Allama Iqbal",
    category: ["inspiration", "spirituality"],
    isFeatured: true
  },
  {
    id: "shakir-1",
    content: [
      "Kuch is tarah teri palkain meri palkon se mila de,",
      "Aansoo tere saare meri palkon pe saja de."
    ],
    author: "Parveen Shakir",
    category: ["love"]
  },
  {
    id: "ghalib-2",
    content: [
      "Dil hi to hai na sang-o-khisht, dard se bhar na aaye kyun,",
      "Royenge hum hazaar baar, koi humein sataaye kyun."
    ],
    author: "Mirza Ghalib",
    category: ["sorrow", "emotion"]
  },
  {
    id: "faraz-1",
    content: [
      "Ranjish hi sahi, dil hi dukhane ke liye aa,",
      "Aa phir se mujhe chhod ke jaane ke liye aa."
    ],
    author: "Ahmed Faraz",
    category: ["heartbreak", "love"]
  },
  {
    id: "gulzar-1",
    content: [
      "Dil dhoondta hai phir wahi fursat ke raat din,",
      "Baithe rahein tasavvur-e-jaan kiye hue."
    ],
    author: "Gulzar",
    category: ["nostalgia", "memory"]
  },
  {
    id: "azmi-1",
    content: [
      "Agar zinda hain to yeh bhi ek bahana hai,",
      "Phir kyun maut ka intezaar karna."
    ],
    author: "Kaifi Azmi",
    category: ["life", "philosophy"]
  },
  {
    id: "sultanpuri-1",
    content: [
      "Chalo ek baar phir se ajnabi ban jaayein hum dono,",
      "Na main tumse koi shikwa na tum mujhse koi shikwa."
    ],
    author: "Majrooh Sultanpuri",
    category: ["relationships", "parting"]
  },
  {
    id: "mir-2",
    content: [
      "Ishq mujh ko nahi wehshat hi sahi,",
      "Meri wehshat teri shamat hi sahi."
    ],
    author: "Mir Taqi Mir",
    category: ["love", "madness"]
  },
  {
    id: "faiz-2",
    content: [
      "Mujh se pehli si muhabbat meri mehboob na maang,",
      "Maine samjha tha ke tu hai to darakhshaan hai hayat."
    ],
    author: "Faiz Ahmed Faiz",
    category: ["love", "disillusionment"],
    isFeatured: true
  },
  // Additional Ghalib couplets
  {
    id: "ghalib-3",
    content: [
      "Ishq par zor nahin hai ye woh aatish Ghalib,",
      "Jo lagaye na lage aur bujhaye na bane."
    ],
    author: "Mirza Ghalib",
    category: ["love", "passion"]
  },
  {
    id: "ghalib-4",
    content: [
      "Nuktacheen hai gham-e-dil usko sunaye na bane,",
      "Kya bane baat jahaan mein tum bhala bataye na bane."
    ],
    author: "Mirza Ghalib",
    category: ["sorrow", "expression"]
  },
  {
    id: "ghalib-5",
    content: [
      "Hazaaron raahen aisi ke manzil na ho,",
      "Sab pe chalna hai phir bhi na koi thakna."
    ],
    author: "Mirza Ghalib",
    category: ["journey", "perseverance"]
  },
  {
    id: "ghalib-6",
    content: [
      "Yeh na thi hamari qismat ke visal-e-yaar hota,",
      "Agar aur jeete rehte yahi intezaar hota."
    ],
    author: "Mirza Ghalib",
    category: ["fate", "longing"]
  },
  {
    id: "ghalib-7",
    content: [
      "Bazeecha-e-atfaal hai duniya mere aage,",
      "Hota hai shab-o-roz tamaasha mere aage."
    ],
    author: "Mirza Ghalib",
    category: ["philosophy", "worldview"]
  },
  {
    id: "ghalib-8",
    content: [
      "Rahiye ab aisi jagah chalien ke jahan,",
      "Koi na ho, koi sun na sake."
    ],
    author: "Mirza Ghalib",
    category: ["solitude", "escape"]
  },
  // Additional Gulzar couplets
  {
    id: "gulzar-2",
    content: [
      "Tere jaise shehar mein, koi aaya hai kahin,",
      "Phir bhi sab kuch puraana lagta hai."
    ],
    author: "Gulzar",
    category: ["nostalgia", "memories"]
  },
  {
    id: "gulzar-3",
    content: [
      "Jab tak hai jaan, main na chhodunga tera saath,",
      "Dil ke taar chhed ke, khelta rahega ye raat."
    ],
    author: "Gulzar",
    category: ["love", "commitment"]
  },
  {
    id: "gulzar-4",
    content: [
      "Koi saath de ya na de, dosti nibhani padti hai,",
      "Dosti karna bhi ek fasana hai."
    ],
    author: "Gulzar",
    category: ["friendship", "loyalty"]
  },
  {
    id: "gulzar-5",
    content: [
      "Mitti ki khushboo lekar, baadal aaye,",
      "Barish ki boondein bhi kuch keh jaayein."
    ],
    author: "Gulzar",
    category: ["nature", "rain"]
  },
  {
    id: "gulzar-6",
    content: [
      "Raat yun dil mein teri khoi hui yaad aayi,",
      "Jaise veerane mein chupke se bahaar aa jaaye."
    ],
    author: "Gulzar",
    category: ["love", "memory"]
  }
];

export const featuredPoems = poems.filter(poem => poem.isFeatured === true);

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
  { id: "friendship", name: "Friendship" }
];

export const poets = [
  { id: "ghalib", name: "Mirza Ghalib" },
  { id: "faiz", name: "Faiz Ahmed Faiz" },
  { id: "mir", name: "Mir Taqi Mir" },
  { id: "iqbal", name: "Allama Iqbal" },
  { id: "shakir", name: "Parveen Shakir" },
  { id: "faraz", name: "Ahmed Faraz" },
  { id: "gulzar", name: "Gulzar" },
  { id: "azmi", name: "Kaifi Azmi" },
  { id: "sultanpuri", name: "Majrooh Sultanpuri" }
];
