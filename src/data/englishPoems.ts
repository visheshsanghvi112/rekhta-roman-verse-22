export interface EnglishPoem {
  id: string;
  title?: string;
  content: string[];
  author: string;
  category?: string[];
  isFeatured?: boolean;
}

// Shakespeare poems
export const shakespearePoems: EnglishPoem[] = [
  {
    id: "shakespeare-1",
    title: "As You Like It (excerpt)",
    content: [
      "All the world's a stage, and all the men and women merely players."
    ],
    author: "William Shakespeare",
    category: ["life", "philosophy"],
    isFeatured: true
  },
  {
    id: "shakespeare-2",
    title: "Hamlet (excerpt)",
    content: [
      "To be, or not to be: that is the question."
    ],
    author: "William Shakespeare",
    category: ["philosophy", "existentialism"]
  },
  {
    id: "shakespeare-3",
    title: "Sonnet 18",
    content: [
      "Shall I compare thee to a summer's day?",
      "Thou art more lovely and more temperate."
    ],
    author: "William Shakespeare",
    category: ["love", "beauty"],
    isFeatured: true
  },
  {
    id: "shakespeare-4",
    title: "A Midsummer Night's Dream (excerpt)",
    content: [
      "The course of true love never did run smooth."
    ],
    author: "William Shakespeare",
    category: ["love", "relationships"]
  },
  {
    id: "shakespeare-5",
    title: "A Midsummer Night's Dream (excerpt)",
    content: [
      "Love looks not with the eyes, but with the mind,",
      "And therefore is winged Cupid painted blind."
    ],
    author: "William Shakespeare",
    category: ["love", "perception"]
  },
  {
    id: "shakespeare-6",
    title: "Twelfth Night (excerpt)",
    content: [
      "Some are born great, some achieve greatness,",
      "And some have greatness thrust upon them."
    ],
    author: "William Shakespeare",
    category: ["destiny", "greatness"]
  },
  {
    id: "shakespeare-7",
    title: "Julius Caesar (excerpt)",
    content: [
      "Cowards die many times before their deaths;",
      "The valiant never taste of death but once."
    ],
    author: "William Shakespeare",
    category: ["courage", "death"]
  },
  {
    id: "shakespeare-8",
    title: "Hamlet (excerpt)",
    content: [
      "There is nothing either good or bad, but thinking makes it so."
    ],
    author: "William Shakespeare",
    category: ["philosophy", "perception"]
  },
  {
    id: "shakespeare-9",
    title: "Twelfth Night (excerpt)",
    content: [
      "If music be the food of love, play on."
    ],
    author: "William Shakespeare",
    category: ["love", "music"],
    isFeatured: true
  },
  {
    id: "shakespeare-10",
    title: "Romeo and Juliet (excerpt)",
    content: [
      "What's in a name? That which we call a rose",
      "By any other name would smell as sweet."
    ],
    author: "William Shakespeare",
    category: ["identity", "perception"]
  }
];

// Other English poetry classics
export const classicEnglishPoems: EnglishPoem[] = [
  {
    id: "frost-1",
    title: "The Road Not Taken (excerpt)",
    content: [
      "Two roads diverged in a wood, and I—",
      "I took the one less traveled by,",
      "And that has made all the difference."
    ],
    author: "Robert Frost",
    category: ["choice", "journey"],
    isFeatured: true
  },
  {
    id: "dickinson-1",
    title: "Hope is the Thing with Feathers",
    content: [
      "Hope is the thing with feathers",
      "That perches in the soul",
      "And sings the tune without the words",
      "And never stops at all."
    ],
    author: "Emily Dickinson",
    category: ["hope", "inspiration"]
  },
  {
    id: "yeats-1",
    title: "He Wishes for the Cloths of Heaven",
    content: [
      "I have spread my dreams under your feet;",
      "Tread softly because you tread on my dreams."
    ],
    author: "W.B. Yeats",
    category: ["dreams", "love"]
  },
  {
    id: "rumi-1",
    title: "The Wound",
    content: [
      "The wound is the place where the Light enters you."
    ],
    author: "Rumi",
    category: ["suffering", "spirituality"],
    isFeatured: true
  },
  {
    id: "byron-1",
    title: "She Walks in Beauty",
    content: [
      "She walks in beauty, like the night",
      "Of cloudless climes and starry skies."
    ],
    author: "Lord Byron",
    category: ["beauty", "admiration"]
  },
  {
    id: "henley-1",
    title: "Invictus (excerpt)",
    content: [
      "I am the master of my fate,",
      "I am the captain of my soul."
    ],
    author: "William Ernest Henley",
    category: ["determination", "courage"]
  },
  {
    id: "cummings-1",
    title: "I Carry Your Heart With Me",
    content: [
      "I carry your heart with me (I carry it in my heart)",
      "I am never without it (anywhere I go you go, my dear)."
    ],
    author: "E.E. Cummings",
    category: ["love", "devotion"]
  },
  {
    id: "oliver-1",
    title: "The Summer Day (excerpt)",
    content: [
      "Tell me, what is it you plan to do",
      "With your one wild and precious life?"
    ],
    author: "Mary Oliver",
    category: ["life", "purpose"]
  },
  {
    id: "frost-2",
    title: "Stopping by Woods on a Snowy Evening (excerpt)",
    content: [
      "And miles to go before I sleep,",
      "And miles to go before I sleep."
    ],
    author: "Robert Frost",
    category: ["journey", "commitment"]
  },
  {
    id: "poe-1",
    title: "Annabel Lee (excerpt)",
    content: [
      "We loved with a love that was more than love."
    ],
    author: "Edgar Allan Poe",
    category: ["love", "devotion"],
    isFeatured: true
  }
];

export const englishPoems = [...shakespearePoems, ...classicEnglishPoems];
