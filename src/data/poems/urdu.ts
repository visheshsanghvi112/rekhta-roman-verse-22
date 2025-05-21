import { Poem } from "../types";

// Existing Urdu poems
export const urduPoems: Poem[] = [
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
  },
  
  // Additional Urdu poems
  {
    id: "sahir-1",
    content: [
      "Ye duniya agar mil bhi jaye to kya hai,",
      "Insaan ko insaan se bhi pyaar nahi."
    ],
    author: "Sahir Ludhianvi",
    category: ["humanity", "society"],
    language: "urdu"
  },
  {
    id: "jaun-1",
    content: [
      "Maut aati hai woh shaam koi tanhaa to nahi",
      "Dil to bachcha hai jee chahta hai har cheez ko haath lagaaye"
    ],
    author: "Jaun Elia",
    category: ["mortality", "innocence"],
    language: "urdu"
  },
  {
    id: "iqbal-2",
    content: [
      "Sitaron se aage jahaan aur bhi hain,",
      "Abhi ishq ke imtihaan aur bhi hain."
    ],
    author: "Allama Iqbal",
    category: ["ambition", "exploration"],
    isFeatured: true,
    language: "urdu"
  },
  {
    id: "ghalib-9",
    content: [
      "Na tha kuch toh khuda tha, kuch na hota toh khuda hota,",
      "Duboya mujhko hone ne, na hota main toh kya hota."
    ],
    author: "Mirza Ghalib",
    category: ["existence", "philosophy"],
    language: "urdu"
  },
  {
    id: "nida-1",
    content: [
      "Koi haath bhi na milayega jo gale miloge tapaak se",
      "Yeh naye mizaaj ka shahr hai zara faasle se mila karo."
    ],
    author: "Nida Fazli",
    category: ["society", "distance"],
    language: "urdu"
  },
  {
    id: "bashir-1",
    content: [
      "Dil ke arman aansuon mein beh gaye,",
      "Ham wafa karke bhi tanha reh gaye."
    ],
    author: "Bashir Badr",
    category: ["heartbreak", "loneliness"],
    language: "urdu"
  },
  {
    id: "rahat-1",
    content: [
      "Tujhe apna nahi bana sakte,",
      "Tere bina reh bhi nahi sakte."
    ],
    author: "Rahat Indori",
    category: ["love", "dilemma"],
    language: "urdu"
  },
  {
    id: "shakir-2",
    content: [
      "Woh toh khushboo hai hawa mein bikhar jayega,",
      "Masla phoolon ka hai phool kidhar jayega."
    ],
    author: "Parveen Shakir",
    category: ["beauty", "transience"],
    language: "urdu"
  },
  {
    id: "faraz-2",
    content: [
      "Aaj bhi jab woh mujhse milte hain,",
      "Nazar jhuka lete hain, baat karta hai koi aur."
    ],
    author: "Ahmed Faraz",
    category: ["meeting", "awkwardness"],
    language: "urdu"
  },
  {
    id: "wasim-1",
    content: [
      "Gulon mein rang bhare baad-e-naubahaar chale",
      "Chale bhi aao ki gulshan ka kaarobaar chale."
    ],
    author: "Wasim Barelvi",
    category: ["spring", "renewal"],
    language: "urdu"
  },
  {
    id: "habib-1",
    content: [
      "Main akela hi chala tha janib-e-manzil magar",
      "Log saath aate gaye aur karvan banta gaya."
    ],
    author: "Habib Jalib",
    category: ["journey", "community"],
    language: "urdu"
  },
  {
    id: "kafi-1",
    content: [
      "Najane kis gali mein zindagi ki shaam ho jaye",
      "Abhi to din hai baaki, aao kuch baatein ho jaye."
    ],
    author: "Kafi Azmi",
    category: ["life", "conversation"],
    language: "urdu"
  },
  {
    id: "sahir-2",
    content: [
      "Kabhi kabhi mere dil mein khayal aata hai",
      "Ki jaise tujhko banaya gaya hai mere liye."
    ],
    author: "Sahir Ludhianvi",
    category: ["love", "destiny"],
    language: "urdu"
  },
  {
    id: "qateel-1",
    content: [
      "Mujhe kuch aisi lagan lagi ki main kya karoon",
      "Teri soorat se hai aalam mein bahaar."
    ],
    author: "Qateel Shifai",
    category: ["infatuation", "beauty"],
    language: "urdu"
  },
  {
    id: "javed-1",
    content: [
      "Tu idhar udhar ki na baat kar,",
      "Ye bata ki kafila kyun luta."
    ],
    author: "Javed Akhtar",
    category: ["accountability", "questioning"],
    language: "urdu"
  },
  {
    id: "firaq-1",
    content: [
      "Ye husn ka jalwa karishma hai koi,",
      "Nazar aata hai, dikhta nahi."
    ],
    author: "Firaq Gorakhpuri",
    category: ["beauty", "perception"],
    language: "urdu"
  },
  {
    id: "josh-1",
    content: [
      "Aaj bazaar mein pabajolan chalo",
      "Chashm-e-num, jaan-e-shoridaa kaafee nahin."
    ],
    author: "Josh Malihabadi",
    category: ["rebellion", "courage"],
    language: "urdu"
  },
];
