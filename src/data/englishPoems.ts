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
  },
  {
    id: "shakespeare-11",
    title: "Sonnet 116",
    content: [
      "Let me not to the marriage of true minds",
      "Admit impediments. Love is not love",
      "Which alters when it alteration finds."
    ],
    author: "William Shakespeare",
    category: ["love", "constancy"]
  },
  {
    id: "shakespeare-12",
    title: "Macbeth (excerpt)",
    content: [
      "Life's but a walking shadow, a poor player",
      "That struts and frets his hour upon the stage",
      "And then is heard no more."
    ],
    author: "William Shakespeare",
    category: ["life", "transience"]
  },
  {
    id: "shakespeare-13",
    title: "Sonnet 29",
    content: [
      "When, in disgrace with fortune and men's eyes,",
      "I all alone beweep my outcast state."
    ],
    author: "William Shakespeare",
    category: ["despair", "hope"]
  },
  {
    id: "shakespeare-14",
    title: "Sonnet 130",
    content: [
      "My mistress' eyes are nothing like the sun;",
      "Coral is far more red than her lips' red."
    ],
    author: "William Shakespeare",
    category: ["love", "reality"]
  },
  {
    id: "shakespeare-15",
    title: "The Tempest (excerpt)",
    content: [
      "Our revels now are ended. These our actors,",
      "As I foretold you, were all spirits and",
      "Are melted into air, into thin air."
    ],
    author: "William Shakespeare",
    category: ["illusion", "reality"]
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
  },
  {
    id: "wordsworth-1",
    title: "Daffodils",
    content: [
      "I wandered lonely as a cloud",
      "That floats on high o'er vales and hills,",
      "When all at once I saw a crowd,",
      "A host, of golden daffodils."
    ],
    author: "William Wordsworth",
    category: ["nature", "joy"],
    isFeatured: true
  },
  {
    id: "keats-1",
    title: "Ode to a Nightingale (excerpt)",
    content: [
      "My heart aches, and a drowsy numbness pains",
      "My sense, as though of hemlock I had drunk."
    ],
    author: "John Keats",
    category: ["beauty", "mortality"]
  },
  {
    id: "blake-1",
    title: "The Tyger",
    content: [
      "Tyger Tyger, burning bright,",
      "In the forests of the night;",
      "What immortal hand or eye,",
      "Could frame thy fearful symmetry?"
    ],
    author: "William Blake",
    category: ["creation", "divinity"],
    isFeatured: true
  },
  {
    id: "whitman-1",
    title: "O Captain! My Captain!",
    content: [
      "O Captain! my Captain! our fearful trip is done,",
      "The ship has weather'd every rack, the prize we sought is won."
    ],
    author: "Walt Whitman",
    category: ["loss", "tribute"]
  },
  {
    id: "kipling-1",
    title: "If",
    content: [
      "If you can keep your head when all about you",
      "Are losing theirs and blaming it on you."
    ],
    author: "Rudyard Kipling",
    category: ["inspiration", "perseverance"],
    isFeatured: true
  },
  {
    id: "eliot-1",
    title: "The Waste Land (excerpt)",
    content: [
      "April is the cruellest month, breeding",
      "Lilacs out of the dead land, mixing",
      "Memory and desire, stirring",
      "Dull roots with spring rain."
    ],
    author: "T.S. Eliot",
    category: ["modernism", "disillusionment"]
  },
  {
    id: "plath-1",
    title: "Lady Lazarus",
    content: [
      "Out of the ash",
      "I rise with my red hair",
      "And I eat men like air."
    ],
    author: "Sylvia Plath",
    category: ["rebirth", "power"]
  },
  {
    id: "angelou-1",
    title: "Still I Rise",
    content: [
      "You may write me down in history",
      "With your bitter, twisted lies,",
      "You may trod me in the very dirt",
      "But still, like dust, I'll rise."
    ],
    author: "Maya Angelou",
    category: ["resilience", "strength"],
    isFeatured: true
  },
  {
    id: "tennyson-1",
    title: "Ulysses (excerpt)",
    content: [
      "To strive, to seek, to find, and not to yield."
    ],
    author: "Alfred, Lord Tennyson",
    category: ["determination", "journey"]
  },
  {
    id: "shelley-1",
    title: "Ozymandias",
    content: [
      "Look on my Works, ye Mighty, and despair!",
      "Nothing beside remains. Round the decay",
      "Of that colossal Wreck, boundless and bare",
      "The lone and level sands stretch far away."
    ],
    author: "Percy Bysshe Shelley",
    category: ["impermanence", "hubris"]
  },
  {
    id: "rilke-1",
    title: "Letters to a Young Poet (excerpt)",
    content: [
      "Be patient toward all that is unsolved in your heart",
      "and try to love the questions themselves."
    ],
    author: "Rainer Maria Rilke",
    category: ["growth", "questioning"],
    isFeatured: true
  },
  {
    id: "thoreau-1",
    title: "Walden (excerpt)",
    content: [
      "I went to the woods because I wished to live deliberately,",
      "to front only the essential facts of life."
    ],
    author: "Henry David Thoreau",
    category: ["nature", "simplicity"]
  },
  {
    id: "gibran-1",
    title: "The Prophet (on Love)",
    content: [
      "Love gives naught but itself and takes naught but from itself.",
      "Love possesses not nor would it be possessed."
    ],
    author: "Kahlil Gibran",
    category: ["love", "freedom"]
  },
  {
    id: "emerson-1",
    title: "Self-Reliance (excerpt)",
    content: [
      "To be yourself in a world that is constantly trying",
      "to make you something else is the greatest accomplishment."
    ],
    author: "Ralph Waldo Emerson",
    category: ["individuality", "authenticity"],
    isFeatured: true
  },
  {
    id: "tagore-1",
    title: "Gitanjali (excerpt)",
    content: [
      "Where the mind is without fear and the head is held high,",
      "Where knowledge is free."
    ],
    author: "Rabindranath Tagore",
    category: ["freedom", "wisdom"]
  },
  {
    id: "neruda-1",
    title: "Sonnet XVII",
    content: [
      "I love you without knowing how, or when, or from where.",
      "I love you straightforwardly, without complexities or pride."
    ],
    author: "Pablo Neruda",
    category: ["love", "simplicity"]
  },
  {
    id: "wilde-1",
    title: "The Ballad of Reading Gaol (excerpt)",
    content: [
      "Yet each man kills the thing he loves,",
      "By each let this be heard."
    ],
    author: "Oscar Wilde",
    category: ["love", "paradox"]
  },
  {
    id: "auden-1",
    title: "Funeral Blues",
    content: [
      "Stop all the clocks, cut off the telephone,",
      "Prevent the dog from barking with a juicy bone."
    ],
    author: "W.H. Auden",
    category: ["grief", "loss"]
  },
  {
    id: "browning-1",
    title: "How Do I Love Thee? (Sonnet 43)",
    content: [
      "How do I love thee? Let me count the ways.",
      "I love thee to the depth and breadth and height",
      "My soul can reach."
    ],
    author: "Elizabeth Barrett Browning",
    category: ["love", "devotion"],
    isFeatured: true
  },
  {
    id: "hughes-1",
    title: "Dreams",
    content: [
      "Hold fast to dreams",
      "For if dreams die",
      "Life is a broken-winged bird",
      "That cannot fly."
    ],
    author: "Langston Hughes",
    category: ["dreams", "perseverance"]
  },
  {
    id: "kerouac-1",
    title: "On the Road (excerpt)",
    content: [
      "The only people for me are the mad ones,",
      "the ones who are mad to live, mad to talk."
    ],
    author: "Jack Kerouac",
    category: ["adventure", "passion"]
  },
  {
    id: "bukowski-1",
    title: "Roll the Dice",
    content: [
      "If you're going to try, go all the way.",
      "Otherwise, don't even start."
    ],
    author: "Charles Bukowski",
    category: ["commitment", "passion"]
  },
  {
    id: "ginsberg-1",
    title: "Howl (excerpt)",
    content: [
      "I saw the best minds of my generation destroyed by madness,",
      "starving hysterical naked."
    ],
    author: "Allen Ginsberg",
    category: ["beat generation", "rebellion"]
  },
  {
    id: "eliot-2",
    title: "The Love Song of J. Alfred Prufrock (excerpt)",
    content: [
      "I have measured out my life with coffee spoons."
    ],
    author: "T.S. Eliot",
    category: ["alienation", "indecision"]
  },
  {
    id: "frost-3",
    title: "Nothing Gold Can Stay",
    content: [
      "Nature's first green is gold,",
      "Her hardest hue to hold.",
      "Her early leaf's a flower;",
      "But only so an hour."
    ],
    author: "Robert Frost",
    category: ["impermanence", "nature"],
    isFeatured: true
  },
  {
    id: "millay-1",
    title: "First Fig",
    content: [
      "My candle burns at both ends;",
      "It will not last the night;",
      "But ah, my foes, and oh, my friends—",
      "It gives a lovely light!"
    ],
    author: "Edna St. Vincent Millay",
    category: ["vitality", "intensity"]
  },
  {
    id: "stevenson-1",
    title: "Requiem",
    content: [
      "Under the wide and starry sky,",
      "Dig the grave and let me lie.",
      "Glad did I live and gladly die,",
      "And I laid me down with a will."
    ],
    author: "Robert Louis Stevenson",
    category: ["death", "fulfillment"]
  },
  {
    id: "merton-1",
    title: "No Man Is An Island",
    content: [
      "No man is an island,",
      "Entire of itself,",
      "Every man is a piece of the continent,",
      "A part of the main."
    ],
    author: "John Donne",
    category: ["interconnection", "humanity"]
  },
  {
    id: "levertov-1",
    title: "The Secret",
    content: [
      "Two girls discover",
      "the secret of life",
      "in a sudden line of",
      "poetry."
    ],
    author: "Denise Levertov",
    category: ["discovery", "poetry"]
  }
];

// Motivational quotes formatted as poems
export const motivationalPoems: EnglishPoem[] = [
  {
    id: "mandela-1",
    title: "Our Deepest Fear",
    content: [
      "Our deepest fear is not that we are inadequate.",
      "Our deepest fear is that we are powerful beyond measure.",
      "It is our light, not our darkness, that most frightens us."
    ],
    author: "Marianne Williamson",
    category: ["empowerment", "fear"],
    isFeatured: true
  },
  {
    id: "roosevelt-1",
    title: "The Man in the Arena",
    content: [
      "It is not the critic who counts;",
      "Not the man who points out how the strong man stumbles,",
      "Or where the doer of deeds could have done them better."
    ],
    author: "Theodore Roosevelt",
    category: ["courage", "action"]
  },
  {
    id: "aurelius-1",
    title: "Meditations",
    content: [
      "You have power over your mind - not outside events.",
      "Realize this, and you will find strength."
    ],
    author: "Marcus Aurelius",
    category: ["stoicism", "control"],
    isFeatured: true
  },
  {
    id: "bronte-1",
    title: "Life",
    content: [
      "Life, believe, is not a dream",
      "So dark as sages say;",
      "Oft a little morning rain",
      "Foretells a pleasant day."
    ],
    author: "Charlotte Brontë",
    category: ["hope", "optimism"]
  },
  {
    id: "anon-1",
    title: "Don't Quit",
    content: [
      "When things go wrong as they sometimes will,",
      "When the road you're trudging seems all up hill,",
      "When the funds are low and the debts are high",
      "And you want to smile, but you have to sigh."
    ],
    author: "Anonymous",
    category: ["perseverance", "resilience"],
    isFeatured: true
  },
  {
    id: "longfellow-1",
    title: "A Psalm of Life",
    content: [
      "Lives of great men all remind us",
      "We can make our lives sublime,",
      "And, departing, leave behind us",
      "Footprints on the sands of time."
    ],
    author: "Henry Wadsworth Longfellow",
    category: ["legacy", "inspiration"]
  },
  {
    id: "keller-1",
    title: "Optimism",
    content: [
      "Be of good cheer. Do not think of today's failures,",
      "But of the success that may come tomorrow."
    ],
    author: "Helen Keller",
    category: ["optimism", "perseverance"]
  },
  {
    id: "havlicek-1",
    title: "Promise Yourself",
    content: [
      "Promise yourself to be so strong that nothing can disturb your peace of mind.",
      "To talk health, happiness, and prosperity to every person you meet."
    ],
    author: "Christian D. Larson",
    category: ["self-improvement", "positivity"],
    isFeatured: true
  },
  {
    id: "arnold-1",
    title: "Self-Dependence",
    content: [
      "Weary of myself, and sick of asking",
      "What I am, and what I ought to be,",
      "At this vessel's prow I stand, which bears me",
      "Forwards, forwards, o'er the starlit sea."
    ],
    author: "Matthew Arnold",
    category: ["self-reliance", "journey"]
  },
  {
    id: "murray-1",
    title: "Your Mission",
    content: [
      "If you can't be a highway, then just be a trail,",
      "If you can't be the sun, be a star;",
      "It isn't by size that you win or you fail —",
      "Be the best of whatever you are!"
    ],
    author: "Douglas Malloch",
    category: ["purpose", "contentment"],
    isFeatured: true
  }
];

export const englishPoems = [...shakespearePoems, ...classicEnglishPoems, ...motivationalPoems];
