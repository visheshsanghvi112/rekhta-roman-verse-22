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
  },
  
  // Additional Urdu/Hindi poems
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
    id: "dushyant-1",
    content: [
      "Kaun kehta hai ki aasmaan mein suraakh nahin ho sakta",
      "Ek patthar to tabiyat se uchaalo yaaron."
    ],
    author: "Dushyant Kumar",
    category: ["revolution", "courage"],
    language: "hindi"
  },
  {
    id: "nirala-1",
    content: [
      "Tod do tod do tod do",
      "Tod do andhkaar ke bandhan",
      "Door karo prabhu dukh ke saadhan."
    ],
    author: "Suryakant Tripathi 'Nirala'",
    category: ["freedom", "liberation"],
    language: "hindi"
  },
  {
    id: "dinkar-1",
    content: [
      "Kshama shobhti us bhujang ko jiske paas garal ho",
      "Usko kya jo dantheen vishrahit vineet saral ho."
    ],
    author: "Ramdhari Singh Dinkar",
    category: ["power", "forgiveness"],
    language: "hindi"
  },
  {
    id: "harivansh-1",
    content: [
      "Aaj phir jeene ki tamanna hai,",
      "Aaj phir marne ka iraada hai."
    ],
    author: "Harivansh Rai Bachchan",
    category: ["life", "determination"],
    isFeatured: true,
    language: "hindi"
  },
  {
    id: "mahadevi-1",
    content: [
      "Bikharne do anchal mein sitaaron ki tarah gum",
      "Har ek aansu moti ki tarah maanga hai tumne."
    ],
    author: "Mahadevi Verma",
    category: ["tears", "emotion"],
    language: "hindi"
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
    id: "kumar-1",
    content: [
      "Jo tum aa jate ek baar,",
      "Toh achchha ho jaata."
    ],
    author: "Kumar Vishwas",
    category: ["longing", "hope"],
    language: "hindi"
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
    id: "amrita-1",
    content: [
      "Main toot jaana chahti hoon",
      "Tumhaare saath jud jaane ke liye."
    ],
    author: "Amrita Pritam",
    category: ["love", "union"],
    isFeatured: true,
    language: "hindi"
  },
  {
    id: "sumitranandan-1",
    content: [
      "Jeevan kya hai teen din ka mela",
      "Do din ka khela, ek din ka mela."
    ],
    author: "Sumitranandan Pant",
    category: ["life", "transience"],
    language: "hindi"
  },
  {
    id: "kabir-1",
    content: [
      "Bura jo dekhan main chala, bura na milya koye",
      "Jo mann khoja apna, to mujhse bura na koye."
    ],
    author: "Kabir Das",
    category: ["introspection", "wisdom"],
    isFeatured: true,
    language: "hindi"
  },
  {
    id: "tulsidas-1",
    content: [
      "Jai Hanuman gyan gun sagar",
      "Jai kapis tihu lok ujagar."
    ],
    author: "Tulsidas",
    category: ["devotion", "prayer"],
    language: "hindi"
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
    id: "prasad-1",
    content: [
      "Beeti vibhavari jaag ri,",
      "Ambar panghat mein doobo rahi tara-ghat."
    ],
    author: "Jaishankar Prasad",
    category: ["dawn", "nature"],
    language: "hindi"
  },
  {
    id: "maithili-1",
    content: [
      "Aaj ke is manahoos daur mein",
      "Insaan ki awaaz hona chahiye insaan."
    ],
    author: "Maithilisharan Gupt",
    category: ["humanity", "voice"],
    language: "hindi"
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

// Convert English poems to the Poem interface
const convertedEnglishPoems: Poem[] = englishPoems.map(poem => ({
  ...poem,
  language: "english" as const
}));

// Add motivational poems
const motivationalPoems: Poem[] = [
  {
    id: "motivation-1",
    title: "Don't Quit",
    content: [
      "When things go wrong as they sometimes will,",
      "When the road you're trudging seems all up hill,",
      "When the funds are low and the debts are high",
      "And you want to smile, but you have to sigh,",
      "When care is pressing you down a bit,",
      "Rest if you must, but don't you quit."
    ],
    author: "John Greenleaf Whittier",
    category: ["motivation", "perseverance", "courage"],
    isFeatured: true,
    language: "english"
  },
  {
    id: "motivation-2",
    title: "Invictus",
    content: [
      "Out of the night that covers me,",
      "Black as the pit from pole to pole,",
      "I thank whatever gods may be",
      "For my unconquerable soul."
    ],
    author: "William Ernest Henley",
    category: ["motivation", "courage", "resilience"],
    isFeatured: true,
    language: "english"
  },
  {
    id: "motivation-3",
    title: "If",
    content: [
      "If you can keep your head when all about you",
      "Are losing theirs and blaming it on you,",
      "If you can trust yourself when all men doubt you,",
      "But make allowance for their doubting too;"
    ],
    author: "Rudyard Kipling",
    category: ["motivation", "resilience", "wisdom"],
    language: "english"
  },
  {
    id: "motivation-4",
    title: "Dream Big",
    content: [
      "Dream big and dare to fail,",
      "For in the daring grows the courage",
      "And in courage destiny awaits."
    ],
    author: "Norman Vaughan",
    category: ["motivation", "dreams", "courage"],
    language: "english"
  },
  {
    id: "motivation-5",
    title: "The Road Not Taken",
    content: [
      "Two roads diverged in a wood, and I—",
      "I took the one less traveled by,",
      "And that has made all the difference."
    ],
    author: "Robert Frost",
    category: ["motivation", "choices", "journey"],
    language: "english"
  },
  {
    id: "motivation-6",
    title: "Rise Up",
    content: [
      "Rise up when life knocks you down,",
      "When shadows creep and darkness falls,",
      "Stand tall, with courage in your heart,",
      "For inner strength never falls apart."
    ],
    author: "Anonymous",
    category: ["motivation", "resilience", "strength"],
    language: "english"
  },
  {
    id: "motivation-7",
    title: "A New Day",
    content: [
      "Every morning brings new hope,",
      "Every sunrise a fresh start,",
      "Yesterday's failures left behind,",
      "Today's victories waiting in your heart."
    ],
    author: "Catherine Pulsifer",
    category: ["motivation", "hope", "new beginnings"],
    language: "english"
  },
  {
    id: "motivation-8",
    title: "Your Mountain",
    content: [
      "Every mountain top is within reach",
      "If you just keep climbing,",
      "Every obstacle can be overcome",
      "With persistence and good timing."
    ],
    author: "Barry Finlay",
    category: ["motivation", "perseverance", "goals"],
    language: "english"
  },
  {
    id: "motivation-9",
    title: "Success Awaits",
    content: [
      "Success isn't just about greatness,",
      "It's about consistency.",
      "Hard work gains success,",
      "Consistency creates history."
    ],
    author: "Dwayne Johnson",
    category: ["motivation", "success", "consistency"],
    language: "english"
  },
  {
    id: "motivation-10",
    title: "Within You",
    content: [
      "The power to change your life",
      "Has always been within you,",
      "The strength to overcome all odds",
      "Is waiting to begin anew."
    ],
    author: "Anonymous",
    category: ["motivation", "empowerment", "change"],
    language: "english"
  },
  {
    id: "motivation-11",
    title: "Unwritten",
    content: [
      "Today is where your book begins,",
      "The rest is still unwritten,",
      "Staring at the blank page before you,",
      "Open up the dirty window."
    ],
    author: "Natasha Bedingfield",
    category: ["motivation", "new beginnings", "potential"],
    language: "english"
  },
  {
    id: "motivation-12",
    title: "Seeds of Greatness",
    content: [
      "Within every setback lie seeds of greatness,",
      "In every failure hides a lesson,",
      "Plant these seeds with determination,",
      "And watch as your success blossoms."
    ],
    author: "Anonymous",
    category: ["motivation", "growth", "success"],
    language: "english"
  },
  {
    id: "motivation-13",
    title: "Keep Moving",
    content: [
      "Life is like riding a bicycle,",
      "To keep your balance, you must keep moving,",
      "Through valleys low and mountains high,",
      "Keep pedaling, never stop trying."
    ],
    author: "Albert Einstein",
    category: ["motivation", "perseverance", "progress"],
    language: "english"
  },
  {
    id: "motivation-14",
    title: "The Champion in You",
    content: [
      "The champion isn't the one who always wins,",
      "But the one who never stops trying,",
      "Who faces defeat with head held high,",
      "And rises stronger, never dying."
    ],
    author: "Anonymous",
    category: ["motivation", "resilience", "champions"],
    language: "english"
  },
  {
    id: "motivation-15",
    title: "Light in Darkness",
    content: [
      "When darkness seems to close around,",
      "And hope seems far from sight,",
      "Remember that within yourself,",
      "Burns an ever-glowing light."
    ],
    author: "Anonymous",
    category: ["motivation", "hope", "inner strength"],
    language: "english"
  },
  {
    id: "motivation-16",
    title: "Mountains and Molehills",
    content: [
      "Some see mountains where others see molehills,",
      "The difference lies in perception alone,",
      "Change your view, change your reality,",
      "Claim the summit as your throne."
    ],
    author: "Anonymous",
    category: ["motivation", "perception", "mindset"],
    language: "english"
  },
  {
    id: "motivation-17",
    title: "The Oak and the Wind",
    content: [
      "The mighty oak stands strong and tall,",
      "Not because it never faced the wind,",
      "But because it bent and swayed and grew,",
      "Finding strength in challenges within."
    ],
    author: "Anonymous",
    category: ["motivation", "resilience", "growth"],
    language: "english"
  },
  {
    id: "motivation-18",
    title: "Today's Victory",
    content: [
      "Yesterday's defeats are gone forever,",
      "Tomorrow's victories not yet won,",
      "Today's battle is all that matters,",
      "Focus here until the day is done."
    ],
    author: "Anonymous",
    category: ["motivation", "focus", "present"],
    language: "english"
  },
  {
    id: "motivation-19",
    title: "Wings to Fly",
    content: [
      "They told me I couldn't, so I did,",
      "They said I would fail, so I flew,",
      "The limits others place upon you,",
      "Are nothing compared to what you can do."
    ],
    author: "Anonymous",
    category: ["motivation", "determination", "overcoming"],
    language: "english"
  },
  {
    id: "motivation-20",
    title: "The Climb",
    content: [
      "The struggles I'm facing,",
      "The chances I'm taking,",
      "Sometimes might knock me down but,",
      "No I'm not breaking."
    ],
    author: "Miley Cyrus",
    category: ["motivation", "perseverance", "journey"],
    language: "english"
  },
  {
    id: "motivation-21",
    title: "हौसला",
    content: [
      "हौसले से जीने वाले को कभी हार नहीं होती,",
      "क्योंकि समंदर में तैरने वाले को प्यास नहीं होती।"
    ],
    author: "Anonymous",
    category: ["motivation", "courage", "determination"],
    language: "hindi"
  },
  {
    id: "motivation-22",
    title: "सफलता का मंत्र",
    content: [
      "कर्म करते चले जाओ फल की चिंता मत करो,",
      "नदियां बहती रहती हैं समुद्र बनने के लिए नहीं।"
    ],
    author: "Anonymous",
    category: ["motivation", "karma", "duty"],
    language: "hindi"
  },
  {
    id: "motivation-23",
    title: "मंज़िल",
    content: [
      "जिद है एक सूरज की तरह उगने की,",
      "एक जुनून है आसमाँ छूने का।",
      "हमसे हमारी मंज़िलें कितना भी दूर क्यों न हो,",
      "हम फिर भी उनको हासिल करने की ठान लेते हैं।"
    ],
    author: "Anonymous",
    category: ["motivation", "determination", "goals"],
    language: "hindi"
  },
  {
    id: "motivation-24",
    title: "हिम्मत",
    content: [
      "हिम्मत करने वालों की कभी हार नहीं होती,",
      "कोशिश करने वालों की कभी हार नहीं होती।"
    ],
    author: "Harivansh Rai Bachchan",
    category: ["motivation", "courage", "perseverance"],
    language: "hindi"
  },
  {
    id: "motivation-25",
    title: "उम्मीद",
    content: [
      "जब घने बादल छाए हों तब दिल में यह आशा रखना,",
      "बारिश के बिना बादल कभी नहीं जाते।"
    ],
    author: "Anonymous",
    category: ["motivation", "hope", "optimism"],
    language: "hindi"
  },
  {
    id: "motivation-26",
    title: "हुनर",
    content: [
      "नादां हैं वो जो समझते हैं, किस्मत से सब कुछ मिलता है,",
      "हुनर हो जिसके पास अपना, उसे जमाना मिलता है।"
    ],
    author: "Anonymous",
    category: ["motivation", "skill", "destiny"],
    language: "urdu"
  },
  {
    id: "motivation-27",
    title: "वक्त",
    content: [
      "वक्त के साथ सब कुछ बदल जाता है,",
      "जिसे आज नहीं पा सके हैं वो कल मिल जाएगा।"
    ],
    author: "Anonymous",
    category: ["motivation", "time", "patience"],
    language: "hindi"
  },
  {
    id: "motivation-28",
    title: "कर्म",
    content: [
      "कर्म कर, फल की चिंता मत कर,",
      "जहाँ राह मुश्किल हो, वहीं मंज़िल होती है।"
    ],
    author: "Anonymous",
    category: ["motivation", "karma", "action"],
    language: "hindi"
  },
  {
    id: "motivation-29",
    title: "सफलता",
    content: [
      "सफलता की सीढ़ी कोई नहीं चढ़ सकता,",
      "हाथ में हाथ डालकर बैठे रहने से।"
    ],
    author: "Anonymous",
    category: ["motivation", "success", "effort"],
    language: "hindi"
  },
  {
    id: "motivation-30",
    title: "डगर",
    content: [
      "मुश्किल वक्त में हिम्मत न हारना,",
      "क्योंकि हर अँधेरी रात के बाद सवेरा होता है।"
    ],
    author: "Anonymous",
    category: ["motivation", "hope", "perseverance"],
    language: "hindi"
  },
  {
    id: "motivation-31",
    title: "जज़्बा",
    content: [
      "हौसला हो बुलंद तो पत्थर भी तैर जाते हैं,",
      "जज़्बा हो मजबूत तो लक्ष्य खुद चलकर आते हैं।"
    ],
    author: "Anonymous",
    category: ["motivation", "determination", "goals"],
    language: "urdu"
  },
  {
    id: "motivation-32",
    title: "हिम्मत का नाम",
    content: [
      "हिम्मत का नाम जिन्दगी है,",
      "हार मान लेना मौत है।"
    ],
    author: "Anonymous",
    category: ["motivation", "courage", "life"],
    language: "hindi"
  },
  {
    id: "motivation-33",
    title: "नई सुबह",
    content: [
      "सुबह होती है, शाम होती है,",
      "जिंदगी खत्म नहीं, बस थम होती है।",
      "कल फिर नई सुबह होगी,",
      "नई उमंग, नए अरमां के साथ।"
    ],
    author: "Anonymous",
    category: ["motivation", "hope", "new beginnings"],
    language: "hindi"
  },
  {
    id: "motivation-34",
    title: "अपनी राह",
    content: [
      "अपनी राह खुद बनानी होगी,",
      "दुनिया तो सिर्फ बताती है,",
      "मंजिल तक पहुंचने के लिए,",
      "खुद को खुद ही साथ देना होगा।"
    ],
    author: "Anonymous",
    category: ["motivation", "self-reliance", "journey"],
    language: "hindi"
  },
  {
    id: "motivation-35",
    title: "Dreams",
    content: [
      "Hold fast to dreams",
      "For if dreams die",
      "Life is a broken-winged bird",
      "That cannot fly."
    ],
    author: "Langston Hughes",
    category: ["motivation", "dreams", "hope"],
    language: "english"
  },
  {
    id: "motivation-36",
    title: "Still I Rise",
    content: [
      "You may write me down in history",
      "With your bitter, twisted lies,",
      "You may trod me in the very dirt",
      "But still, like dust, I'll rise."
    ],
    author: "Maya Angelou",
    category: ["motivation", "resilience", "empowerment"],
    isFeatured: true,
    language: "english"
  },
  {
    id: "motivation-37",
    title: "Footprints",
    content: [
      "When you saw only one set of footprints,",
      "It was then that I carried you."
    ],
    author: "Mary Stevenson",
    category: ["motivation", "faith", "support"],
    language: "english"
  },
  {
    id: "motivation-38",
    title: "उठो",
    content: [
      "उठो, जागो और तब तक रुको मत जब तक लक्ष्य पूरा न हो जाए।",
      "हिम्मत हारकर कभी मत बैठो, क्योंकि हिम्मत ही जीत की पहली सीढ़ी है।"
    ],
    author: "Swami Vivekananda",
    category: ["motivation", "determination", "perseverance"],
    language: "hindi"
  },
  {
    id: "motivation-39",
    title: "The Obstacle In Our Path",
    content: [
      "The obstacle in our path becomes the path.",
      "Never forget, within every obstacle is an opportunity",
      "to improve our condition."
    ],
    author: "Ryan Holiday",
    category: ["motivation", "obstacles", "opportunity"],
    language: "english"
  },
  {
    id: "motivation-40",
    title: "मुश्किलें",
    content: [
      "मुश्किलें मुझे कितना भी तोड़ दें,",
      "मेरे इरादे फिर भी जीत जाएंगे।"
    ],
    author: "Anonymous",
    category: ["motivation", "resilience", "determination"],
    language: "hindi"
  },
  {
    id: "motivation-41",
    title: "Just One",
    content: [
      "One song can spark a moment,",
      "One flower can wake the dream,",
      "One tree can start a forest,",
      "One bird can herald spring."
    ],
    author: "Anonymous",
    category: ["motivation", "impact", "beginnings"],
    language: "english"
  },
  {
    id: "motivation-42",
    title: "Don't Stop",
    content: [
      "Don't stop when you're tired.",
      "Stop when you're done."
    ],
    author: "Anonymous",
    category: ["motivation", "perseverance", "determination"],
    language: "english"
  },
  {
    id: "motivation-43",
    title: "The Will To Win",
    content: [
      "The will to win,",
      "The desire to succeed,",
      "The urge to reach your full potential...",
      "These are the keys that will unlock the door to personal excellence."
    ],
    author: "Confucius",
    category: ["motivation", "success", "excellence"],
    language: "english"
  },
  {
    id: "motivation-44",
    title: "It Couldn't Be Done",
    content: [
      "Somebody said that it couldn't be done,",
      "But he with a chuckle replied",
      "That maybe it couldn't, but he would be one",
      "Who wouldn't say so till he'd tried."
    ],
    author: "Edgar Albert Guest",
    category: ["motivation", "perseverance", "achievement"],
    language: "english"
  },
  {
    id: "motivation-45",
    title: "अपनी राह",
    content: [
      "राह बनाओ, राह चुनो मत,",
      "जिंदगी खुद ही एक मुकाम है।"
    ],
    author: "Anonymous",
    category: ["motivation", "path", "life"],
    language: "hindi"
  },
  {
    id: "motivation-46",
    title: "Aim for the Stars",
    content: [
      "Aim for the stars,",
      "If you miss, you might hit the moon.",
      "But if you aim for the fence,",
      "You'll only hit the ground."
    ],
    author: "Les Brown",
    category: ["motivation", "ambition", "goals"],
    language: "english"
  },
  {
    id: "motivation-47",
    title: "शौक",
    content: [
      "जिसे उड़ने का शौक हो,",
      "उसे आसमान की तलाश नहीं करनी पड़ती।"
    ],
    author: "Anonymous",
    category: ["motivation", "passion", "ambition"],
    language: "hindi"
  },
  {
    id: "motivation-48",
    title: "Rise and Shine",
    content: [
      "Rise and shine, the world is waiting,",
      "For the gift that you have within,",
      "Your light is needed in the darkness,",
      "So let your journey begin."
    ],
    author: "Anonymous",
    category: ["motivation", "purpose", "dawn"],
    language: "english"
  },
  {
    id: "motivation-49",
    title: "सपने",
    content: [
      "सपने वो नहीं जो नींद में आते हैं,",
      "सपने वो हैं जो नींद उड़ा देते हैं।"
    ],
    author: "Dr. APJ Abdul Kalam",
    category: ["motivation", "dreams", "ambition"],
    language: "hindi"
  },
  {
    id: "motivation-50",
    title: "The Victor",
    content: [
      "If you think you are beaten, you are.",
      "If you think you dare not, you don't.",
      "If you like to win but think you can't,",
      "It's almost a cinch you won't."
    ],
    author: "C.W. Longenecker",
    category: ["motivation", "mindset", "victory"],
    language: "english"
  }
];

// Combine all poems
export const poems: Poem[] = [...urduHindiPoems, ...convertedEnglishPoems, ...motivationalPoems];

export const featuredPoems = poems.filter(poem => poem.isFeatured === true);

// Update categories for English poetry
export const categories = [
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

// Language filter options
export const languages = [
  { id: "urdu", name: "Urdu" },
  { id: "hindi", name: "Hindi" },
  { id: "english", name: "English" }
];
