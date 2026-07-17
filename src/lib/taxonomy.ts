export type FaqItem = { question: string; answer: string };

export type HubEntity = {
  slug: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  status: "published" | "draft";
  intro: string[];
  howTo: string[];
  faqs: FaqItem[];
  relatedClassSlugs?: string[];
  relatedActivitySlugs?: string[];
  relatedThemeSlugs?: string[];
};

export type CrossHub = {
  slug: string;
  name: string;
  title: string;
  description: string;
  classSlug?: string;
  activitySlug?: string;
  status: "published" | "draft";
  intro: string[];
  howTo: string[];
  faqs: FaqItem[];
};

export type GuideEntity = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  status: "published" | "draft";
  sections: { heading: string; paragraphs: string[] }[];
  faqs: FaqItem[];
};

export type ToolEntity = {
  slug: string;
  name: string;
  title: string;
  description: string;
  status: "published" | "draft";
  intro: string[];
  howTo: string[];
  faqs: FaqItem[];
};

export type WorksheetSeed = {
  slug: string;
  classSlug: string;
  name: string;
  title: string;
  description: string;
  activitySlug: string;
  themeSlug: string;
  status: "published" | "draft";
  /** Public path to free sample PDF, e.g. /worksheets/class-1-....pdf */
  pdfPath: string;
  intro: string[];
  faqs: FaqItem[];
};

const sharedParentTips = [
  "Keep sessions short — 10 to 20 minutes works better than long drills for young children.",
  "Print on plain A4 paper and use a calm corner of the home with good light.",
  "Celebrate effort, not speed. Praise when your child tries a new word, sum, or drawing.",
  "You can also generate fresh printable worksheets instantly with the Homework Buddy Android app.",
];

export const classes: HubEntity[] = [
  {
    slug: "nursery",
    name: "Nursery",
    title: "Nursery printable worksheets & easy homework activities",
    description:
      "Gentle Nursery worksheets for tracing, colours, matching, and early listening — printable PDFs for Indian preschool parents.",
    icon: "/classes/nursery.png",
    status: "published",
    intro: [
      "Nursery learning should feel like play with a little structure. Parents searching for easy homework for preschool usually need short printable sheets that build pencil grip, listening, and confidence — not exam pressure.",
      "This Nursery hub gathers printable worksheet ideas and homework activity patterns that fit 10–15 minute evenings. Focus on tracing lines, colour recognition, simple matching, and picture talk.",
      "Use themes your child already loves — animals, fruits, or festivals — so practice feels familiar. Pair any sheet with a warm conversation: “What do you see?” beats rushing to finish every box.",
      ...sharedParentTips,
    ],
    howTo: [
      "Pick one skill for the day: tracing, colours, or matching.",
      "Print a single sheet and sit beside your child for the first few minutes.",
      "Stop while energy is still good; save the rest for tomorrow.",
      "Rotate themes weekly so Nursery practice stays fresh.",
    ],
    faqs: [
      {
        question: "How long should Nursery homework take?",
        answer:
          "Aim for 10–15 minutes. Short, happy sessions build habits better than long worksheets that end in tears.",
      },
      {
        question: "Do Nursery children need daily worksheets?",
        answer:
          "Not every day. Three to four short printable sessions a week plus free play is a healthy rhythm for most Nursery kids.",
      },
      {
        question: "What printable worksheets work best for Nursery?",
        answer:
          "Large-line tracing, colour-and-say sheets, simple matching, and picture-based listening activities work well.",
      },
    ],
    relatedActivitySlugs: ["coloring", "reading", "life-skills"],
    relatedThemeSlugs: ["animals", "fruits", "festivals"],
  },
  {
    slug: "jr-kg",
    name: "Jr KG",
    title: "Jr KG worksheets — printable homework for junior kindergarten",
    description:
      "Jr KG printable worksheets for letters, numbers, patterns, and early reading readiness for busy parents.",
    icon: "/classes/jr_kg.png",
    status: "published",
    intro: [
      "Junior KG sits between playful Nursery work and more structured Class 1 expectations. Parents often look for easy homework for kindergarten that still feels kind and age-appropriate.",
      "Jr KG printable worksheets can cover letter recognition, counting to 20, patterns, and beginning sounds without turning evenings into tuition class.",
      "Keep instructions visual. If a sheet needs a long paragraph of adult explanation, simplify it or swap for a clearer printable.",
      ...sharedParentTips,
    ],
    howTo: [
      "Choose letter or number focus for the week — not both every night.",
      "Use one printable plus five minutes of oral practice.",
      "Add a theme (animals, transport) to keep motivation high.",
      "Review yesterday’s sheet briefly before starting a new one.",
    ],
    faqs: [
      {
        question: "What is the difference between Nursery and Jr KG worksheets?",
        answer:
          "Jr KG sheets usually introduce clearer letter and number practice while still staying playful and short.",
      },
      {
        question: "Should Jr KG homework include writing lines?",
        answer:
          "Yes, but keep lines large and limit writing volume. Quality of formation matters more than filling a page.",
      },
    ],
    relatedActivitySlugs: ["writing", "maths", "reading"],
    relatedThemeSlugs: ["animals", "transport", "nature"],
  },
  {
    slug: "sr-kg",
    name: "Sr KG",
    title: "Sr KG printable worksheets & kindergarten homework ideas",
    description:
      "Senior KG worksheets for reading readiness, writing practice, and early maths — print-ready for home.",
    icon: "/classes/sr_kg.png",
    status: "published",
    intro: [
      "Sr KG prepares children for Class 1 without copying Class 1 pressure. Printable worksheets should stretch attention gently: short stories, CVC words, number bonds, and neat writing practice.",
      "Parents searching for kindergarten worksheets often want PDFs they can print tonight. Keep a small folder of favourites by theme so you are never starting from zero after a long workday.",
      ...sharedParentTips,
    ],
    howTo: [
      "Alternate reading and maths nights to avoid fatigue.",
      "Use colouring or creative thinking as a cool-down after writing.",
      "Ask your child to explain one answer aloud — it builds comprehension.",
    ],
    faqs: [
      {
        question: "Are Sr KG printable worksheets enough for school readiness?",
        answer:
          "They help when paired with conversation, play, and consistent routines. Worksheets alone are not a full readiness plan.",
      },
    ],
    relatedActivitySlugs: ["reading", "writing", "maths"],
    relatedThemeSlugs: ["stories", "space", "festivals"],
  },
  {
    slug: "class-1",
    name: "Class 1",
    title: "Class 1 worksheets — printable reading, writing & maths",
    description:
      "Class 1 printable worksheets for reading, writing, maths, and creative practice. Easy homework ideas for parents in India.",
    icon: "/classes/class1.png",
    status: "published",
    intro: [
      "Class 1 is where many families first feel “real homework.” The goal is calm practice, not completing five sheets a night. Class 1 worksheets should reinforce school topics with clear language and familiar themes.",
      "This hub focuses on printable Class 1 worksheets for reading comprehension, neat handwriting, addition/subtraction basics, and creative thinking prompts parents can finish in one sitting.",
      "If evenings are packed, choose one activity type per day. Consistency beats volume for Class 1 learners.",
      ...sharedParentTips,
    ],
    howTo: [
      "Match the sheet to today’s school topic when possible.",
      "Time-box: 15–20 minutes, then stop.",
      "Use animals, festivals, or stories themes to keep engagement high.",
      "Save completed sheets so your child can see progress.",
    ],
    faqs: [
      {
        question: "Where can I find free Class 1 printable worksheets?",
        answer:
          "This site lists Class 1 worksheet ideas by activity and theme. You can also generate fresh PDFs in the Homework Buddy app.",
      },
      {
        question: "How much Class 1 homework is too much?",
        answer:
          "If your child is exhausted or arguing every night, reduce volume. One focused printable is better than three rushed ones.",
      },
      {
        question: "What Class 1 maths worksheets help most?",
        answer:
          "Number sense, addition within 20, subtraction stories, and simple word problems with pictures.",
      },
    ],
    relatedActivitySlugs: ["reading", "writing", "maths", "creative-thinking"],
    relatedThemeSlugs: ["animals", "festivals", "stories"],
  },
  {
    slug: "class-2",
    name: "Class 2",
    title: "Class 2 worksheets — printable homework activities",
    description:
      "Class 2 printable worksheets for reading passages, writing paragraphs, and maths practice at home.",
    icon: "/classes/class2.png",
    status: "published",
    intro: [
      "Class 2 learners can handle slightly richer passages and multi-step maths — still with warmth and clarity. Printable Class 2 worksheets should invite thinking, not copying.",
      "Parents looking for easy homework for Class 2 often need reading comprehension, grammar practice, multiplication readiness, and life-skills scenarios that feel relevant.",
      ...sharedParentTips,
    ],
    howTo: [
      "Start with a short reading or warm-up question.",
      "Keep maths sheets mixed: fluency plus one word problem.",
      "End with a creative or colouring cool-down when energy dips.",
    ],
    faqs: [
      {
        question: "What makes a good Class 2 printable worksheet?",
        answer:
          "Clear instructions, age-fit vocabulary, and a mix of recall plus light reasoning — finished in about 20 minutes.",
      },
    ],
    relatedActivitySlugs: ["reading", "maths", "life-skills"],
    relatedThemeSlugs: ["nature", "transport", "space"],
  },
  {
    slug: "class-3",
    name: "Class 3",
    title: "Class 3 worksheets — printable PDFs for home practice",
    description:
      "Class 3 printable worksheets covering reading, writing, maths, and higher-order thinking for after-school practice.",
    icon: "/classes/class3.png",
    status: "published",
    intro: [
      "Class 3 worksheets can introduce longer reading, structured writing, and stronger maths without turning home into a coaching centre. Choose printables that explain why, not only what.",
      "Indian parents often search for Class 3 worksheet PDFs they can print after office hours. Keep a weekly plan: reading, maths, writing, and one creative or life-skills sheet.",
      ...sharedParentTips,
    ],
    howTo: [
      "Plan four short sessions weekly instead of daily overload.",
      "Use themes to connect school topics with curiosity.",
      "Discuss one mistake kindly — learning lives in revision.",
    ],
    faqs: [
      {
        question: "Are printable Class 3 worksheets enough for exams?",
        answer:
          "They support practice and confidence. Pair them with school notes and teacher guidance for exam preparation.",
      },
    ],
    relatedActivitySlugs: ["reading", "writing", "maths", "creative-thinking"],
    relatedThemeSlugs: ["stories", "professions", "monsoon"],
  },
];

export const activities: HubEntity[] = [
  {
    slug: "reading",
    name: "Reading Fun",
    title: "Reading worksheets for kids — printable comprehension practice",
    description:
      "Printable reading worksheets for Nursery to Class 3: picture talk, short passages, and comprehension questions.",
    icon: "/activities/reading.png",
    status: "published",
    intro: [
      "Reading worksheets help children move from pictures to print with confidence. For younger kids, that means naming, matching, and listening; for Class 1–3, short passages with clear questions.",
      "Parents searching for reading worksheets want printables that do not require a tutor script. Keep passages short, vocabulary familiar, and questions concrete.",
      "Theme-based reading — jungle animals, festivals, monsoon — makes comprehension feel like a story night instead of a test.",
      ...sharedParentTips,
    ],
    howTo: [
      "Read the passage aloud together the first time.",
      "Let your child answer orally before writing.",
      "Underline key words instead of rushing every blank.",
    ],
    faqs: [
      {
        question: "How do I choose reading worksheets by class?",
        answer:
          "Nursery–KG: pictures and words. Class 1: short sentences. Class 2–3: short paragraphs with 3–5 questions.",
      },
      {
        question: "Can reading worksheets improve vocabulary?",
        answer:
          "Yes when you pause on new words, use them in a sentence, and revisit them the next day.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "sr-kg", "class-1", "class-2", "class-3"],
    relatedThemeSlugs: ["animals", "stories", "festivals"],
  },
  {
    slug: "writing",
    name: "Writing Fun",
    title: "Writing worksheets — printable handwriting & sentence practice",
    description:
      "Writing worksheets for tracing, handwriting, sentences, and short paragraphs for young learners.",
    icon: "/activities/writing.png",
    status: "published",
    intro: [
      "Writing practice works best in small doses with clear models. Printable writing worksheets should show letter formation, then move to words and sentences at the right class level.",
      "Avoid sheets that cram too many lines. Tired hands produce messy writing and frustrated evenings.",
      ...sharedParentTips,
    ],
    howTo: [
      "Warm up with two minutes of air writing or tracing.",
      "Focus on posture and pencil grip before speed.",
      "Pick themes so writing prompts feel fun (“My favourite animal”).",
    ],
    faqs: [
      {
        question: "My child hates writing worksheets. What should I do?",
        answer:
          "Shorten the task, add a theme they love, and alternate with colouring or reading on some nights.",
      },
    ],
    relatedClassSlugs: ["jr-kg", "sr-kg", "class-1", "class-2", "class-3"],
    relatedThemeSlugs: ["fruits", "festivals", "stories"],
  },
  {
    slug: "maths",
    name: "Maths Play",
    title: "Maths worksheets for kids — printable practice PDFs",
    description:
      "Printable maths worksheets for counting, addition, subtraction, and word problems for Nursery to Class 3.",
    icon: "/activities/maths.png",
    status: "published",
    intro: [
      "Maths worksheets should build number sense, not fear. Start with concrete counting and pictures, then move to numerals and word problems as confidence grows.",
      "Parents looking for maths worksheets often need tonight’s printable that matches school pace. Keep difficulty honest: one challenging problem is enough after fluency practice.",
      ...sharedParentTips,
    ],
    howTo: [
      "Begin with a quick oral warm-up (count objects on the table).",
      "Do fluency first, then one story sum.",
      "Use drawings for word problems before abstract numbers.",
    ],
    faqs: [
      {
        question: "How often should kids do maths worksheets at home?",
        answer:
          "Three short sessions a week is enough for many families, plus real-life maths while shopping or cooking.",
      },
    ],
    relatedClassSlugs: ["jr-kg", "sr-kg", "class-1", "class-2", "class-3"],
    relatedThemeSlugs: ["transport", "space", "fruits"],
  },
  {
    slug: "coloring",
    name: "Coloring",
    title: "Coloring worksheets & printable colouring activities for kids",
    description:
      "Printable coloring worksheets that build fine motor skills, focus, and calm — great easy homework ideas.",
    icon: "/activities/coloring.png",
    status: "published",
    intro: [
      "Coloring is not “just play.” It strengthens fine motor control, attention, and emotional regulation — all useful for writing later.",
      "Use themed colouring worksheets after a harder reading or maths sheet, or as a gentle Nursery/KG homework option.",
      ...sharedParentTips,
    ],
    howTo: [
      "Offer 4–6 colours to start; add more later.",
      "Talk about colours and objects while they colour.",
      "Display finished pages — pride fuels the next session.",
    ],
    faqs: [
      {
        question: "Are coloring worksheets good homework?",
        answer:
          "Yes for younger learners and as a cool-down. Pair with a short oral question so learning stays intentional.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "sr-kg", "class-1"],
    relatedThemeSlugs: ["animals", "festivals", "nature"],
  },
  {
    slug: "creative-thinking",
    name: "Creative Thinking",
    title: "Creative thinking worksheets for kids",
    description:
      "Printable creative thinking activities: imagination prompts, what-if questions, and open-ended tasks.",
    icon: "/activities/creative.png",
    status: "published",
    intro: [
      "Creative thinking worksheets invite children to invent, compare, and explain — skills that support school and life. They are excellent when you want homework that feels lighter but still purposeful.",
      ...sharedParentTips,
    ],
    howTo: [
      "Read the prompt together and brainstorm aloud.",
      "Accept unusual answers if your child can explain them.",
      "Save favourite ideas in a “thinking journal.”",
    ],
    faqs: [
      {
        question: "What age is right for creative thinking worksheets?",
        answer:
          "With picture support, even KG children can try. Class 1–3 can handle short written or drawn responses.",
      },
    ],
    relatedClassSlugs: ["sr-kg", "class-1", "class-2", "class-3"],
    relatedThemeSlugs: ["space", "stories", "professions"],
  },
  {
    slug: "life-skills",
    name: "Life Skills",
    title: "Life skills worksheets for children",
    description:
      "Printable life skills activities for kindness, routines, safety awareness, and everyday responsibility.",
    icon: "/activities/life_skills.png",
    status: "published",
    intro: [
      "Life skills worksheets help children practise sharing, routines, hygiene habits, and simple decision-making through stories and scenarios.",
      "These printables are perfect weekend homework: meaningful, discussable, and calm.",
      ...sharedParentTips,
    ],
    howTo: [
      "Connect each scenario to your home routine.",
      "Role-play the situation after the sheet.",
      "Keep language positive and practical.",
    ],
    faqs: [
      {
        question: "Can life skills count as homework?",
        answer:
          "Absolutely. Many schools welcome social-emotional practice, and parents value the conversations these sheets start.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "class-1", "class-2"],
    relatedThemeSlugs: ["festivals", "professions", "nature"],
  },
];

export const themes: HubEntity[] = [
  {
    slug: "animals",
    name: "Animals",
    title: "Animals worksheets — printable animal-themed learning",
    description:
      "Animal-themed printable worksheets for reading, writing, maths, and colouring from Nursery to Class 3.",
    icon: "/themes/animals.png",
    status: "published",
    intro: [
      "Animals are a universal theme for kids. Animal worksheets make vocabulary, counting, and stories stick because children already care about lions, elephants, and pets.",
      "Use animal themes across activities: reading passages about zoo friends, maths with animal counters, and colouring of jungle scenes.",
      ...sharedParentTips,
    ],
    howTo: [
      "Pick one animal focus for the week.",
      "Mix reading + colouring on the same theme.",
      "Visit a park or look at animal books to extend learning.",
    ],
    faqs: [
      {
        question: "Are animals worksheets only for colouring?",
        answer:
          "No. They work for reading, writing prompts, maths story sums, and creative thinking too.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "class-1"],
    relatedActivitySlugs: ["reading", "coloring", "maths"],
  },
  {
    slug: "transport",
    name: "Transport",
    title: "Transport worksheets for kids",
    description:
      "Printable transport-themed worksheets: vehicles, counting, and reading for young learners.",
    icon: "/themes/transport.png",
    status: "published",
    intro: [
      "Buses, trains, and planes capture attention quickly. Transport worksheets support vocabulary, sequencing, and maths with real-world hooks.",
      ...sharedParentTips,
    ],
    howTo: [
      "Talk about vehicles you see on the school run.",
      "Use transport pictures for counting and sorting.",
    ],
    faqs: [
      {
        question: "Which classes benefit from transport worksheets?",
        answer:
          "All early years classes — especially Nursery to Class 2 — enjoy vehicle themes for literacy and maths.",
      },
    ],
    relatedClassSlugs: ["jr-kg", "class-1", "class-2"],
    relatedActivitySlugs: ["maths", "reading", "coloring"],
  },
  {
    slug: "nature",
    name: "Nature",
    title: "Nature worksheets — printable outdoor learning themes",
    description:
      "Nature-themed printable worksheets for plants, weather talk, and mindful observation activities.",
    icon: "/themes/nature.png",
    status: "published",
    intro: [
      "Nature themes connect homework to the world outside the window. Nature worksheets can cover observation, vocabulary, and gentle science talk for young children.",
      ...sharedParentTips,
    ],
    howTo: [
      "Pair a printable with a five-minute balcony or park observation.",
      "Collect fallen leaves for a real-life sorting game.",
    ],
    faqs: [
      {
        question: "Can nature worksheets support life skills?",
        answer:
          "Yes — care for plants, noticing weather, and respecting outdoor spaces are natural life-skills links.",
      },
    ],
    relatedClassSlugs: ["nursery", "class-1", "class-2"],
    relatedActivitySlugs: ["life-skills", "coloring", "creative-thinking"],
  },
  {
    slug: "space",
    name: "Space",
    title: "Space worksheets for kids — planets & imagination",
    description:
      "Space-themed printable worksheets for curiosity, reading, and creative thinking.",
    icon: "/themes/space.png",
    status: "published",
    intro: [
      "Space themes unlock wonder. Use space worksheets for vocabulary, imaginative writing, and simple counting with stars and rockets.",
      ...sharedParentTips,
    ],
    howTo: [
      "Start with a picture talk about the night sky.",
      "Keep science facts light and age-fit.",
    ],
    faqs: [
      {
        question: "Are space worksheets suitable for Class 1?",
        answer:
          "Yes with simple language and lots of pictures. Save denser facts for Class 2–3.",
      },
    ],
    relatedClassSlugs: ["sr-kg", "class-1", "class-3"],
    relatedActivitySlugs: ["creative-thinking", "reading", "maths"],
  },
  {
    slug: "festivals",
    name: "Festivals",
    title: "Festival worksheets — printable cultural learning for kids",
    description:
      "Festival-themed printable worksheets celebrating Indian festivals with reading, colouring, and kindness prompts.",
    icon: "/themes/festival.png",
    status: "published",
    intro: [
      "Festival worksheets help children connect learning with family celebrations — Diwali lights, Holi colours, Eid kindness, Christmas giving, and more — with respect and joy.",
      ...sharedParentTips,
    ],
    howTo: [
      "Choose a festival your family is celebrating or learning about.",
      "Combine colouring with a short kindness or gratitude prompt.",
    ],
    faqs: [
      {
        question: "How do festival worksheets support learning?",
        answer:
          "They build vocabulary, cultural awareness, fine motor skills, and conversation — all valuable for early learners.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "class-1"],
    relatedActivitySlugs: ["coloring", "life-skills", "writing"],
  },
  {
    slug: "stories",
    name: "Stories",
    title: "Story worksheets — printable reading adventures",
    description:
      "Story-themed printable worksheets with short narratives and comprehension for young readers.",
    icon: "/themes/stories.png",
    status: "published",
    intro: [
      "Story worksheets turn practice into adventure. Short, illustrated narratives help Class 1–3 readers build comprehension and writing responses.",
      ...sharedParentTips,
    ],
    howTo: [
      "Predict the ending before reading.",
      "Ask who/what/where questions after the story.",
    ],
    faqs: [
      {
        question: "Can story worksheets replace bedtime books?",
        answer:
          "No — they complement books. Keep bedtime reading joyful and separate from homework pressure.",
      },
    ],
    relatedClassSlugs: ["sr-kg", "class-1", "class-2", "class-3"],
    relatedActivitySlugs: ["reading", "writing", "creative-thinking"],
  },
  {
    slug: "fruits",
    name: "Fruits",
    title: "Fruits worksheets for preschool & primary kids",
    description:
      "Fruit-themed printable worksheets for colours, counting, vocabulary, and healthy habits.",
    icon: "/themes/fruits.png",
    status: "published",
    intro: [
      "Fruits are colourful, countable, and perfect for Nursery–Class 1 vocabulary. Fruit worksheets support sorting, tracing, and simple maths.",
      ...sharedParentTips,
    ],
    howTo: [
      "Use real fruit for a matching game after the printable.",
      "Talk about colours, tastes, and healthy choices.",
    ],
    faqs: [
      {
        question: "Are fruits worksheets good for Nursery?",
        answer:
          "Yes — large pictures, colouring, and matching make excellent Nursery printables.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "class-1"],
    relatedActivitySlugs: ["coloring", "maths", "life-skills"],
  },
  {
    slug: "monsoon",
    name: "Monsoon",
    title: "Monsoon worksheets — rainy day printable activities",
    description:
      "Monsoon-themed printable worksheets for rainy-day learning: weather talk, reading, and indoor activities.",
    icon: "/themes/monsoon.png",
    status: "published",
    intro: [
      "Monsoon worksheets turn rainy days into learning time. Weather vocabulary, safety reminders, and cosy indoor reading prompts fit Indian seasons perfectly.",
      ...sharedParentTips,
    ],
    howTo: [
      "Watch the rain for one minute, then open the printable.",
      "Discuss staying safe and dry as a life-skills moment.",
    ],
    faqs: [
      {
        question: "What activities pair with monsoon worksheets?",
        answer:
          "Indoor colouring, story reading, and simple weather journals work well.",
      },
    ],
    relatedClassSlugs: ["class-1", "class-2", "class-3"],
    relatedActivitySlugs: ["reading", "life-skills", "creative-thinking"],
  },
  {
    slug: "professions",
    name: "Professions",
    title: "Professions worksheets — community helpers printables",
    description:
      "Printable professions worksheets about community helpers, careers, and gratitude.",
    icon: "/themes/professions.png",
    status: "published",
    intro: [
      "Professions themes help children appreciate community helpers — doctors, teachers, drivers, farmers — while practising reading and writing.",
      ...sharedParentTips,
    ],
    howTo: [
      "Talk about people who help in your neighbourhood.",
      "Write a thank-you sentence as a writing extension.",
    ],
    faqs: [
      {
        question: "Are professions worksheets suitable for Class 2–3?",
        answer:
          "Yes. Older children can handle longer descriptions and opinion questions about jobs they admire.",
      },
    ],
    relatedClassSlugs: ["class-1", "class-2", "class-3"],
    relatedActivitySlugs: ["reading", "writing", "life-skills"],
  },
];

export const crossHubs: CrossHub[] = [
  {
    slug: "class-1-reading",
    name: "Class 1 Reading Worksheets",
    title: "Class 1 reading worksheets — printable comprehension PDFs",
    description:
      "Class 1 reading worksheets with short passages, picture support, and simple questions for home practice.",
    classSlug: "class-1",
    activitySlug: "reading",
    status: "published",
    intro: [
      "Class 1 reading worksheets should feel like shared story time with a light pencil task. Look for short lines, familiar words, and 3–4 clear questions.",
      "Parents searching specifically for Class 1 reading worksheets usually need printables tonight — not a full curriculum overhaul.",
      "Pair each sheet with oral reading. Listening to your child decode builds fluency faster than silent worksheet completion alone.",
      ...sharedParentTips,
    ],
    howTo: [
      "Preview tricky words before reading.",
      "Answer one question orally first.",
      "Celebrate finishing the passage, not only perfect scores.",
    ],
    faqs: [
      {
        question: "How long should a Class 1 reading worksheet take?",
        answer: "About 15 minutes including reading aloud and answering questions.",
      },
      {
        question: "What themes work well for Class 1 reading?",
        answer: "Animals, festivals, school stories, and simple adventures with clear pictures.",
      },
    ],
  },
  {
    slug: "class-1-maths",
    name: "Class 1 Maths Worksheets",
    title: "Class 1 maths worksheets — printable addition & number sense",
    description:
      "Printable Class 1 maths worksheets for counting, addition, subtraction, and picture word problems.",
    classSlug: "class-1",
    activitySlug: "maths",
    status: "published",
    intro: [
      "Class 1 maths worksheets work best when they mix fluency with one thinking problem. Avoid dense pages of identical sums.",
      "Use themes — fruits to count, buses to add — so number practice feels concrete.",
      ...sharedParentTips,
    ],
    howTo: [
      "Warm up with mental maths for one minute.",
      "Use objects for the first word problem.",
      "Check two answers together, then let your child finish.",
    ],
    faqs: [
      {
        question: "Which Class 1 maths topics should home worksheets cover?",
        answer:
          "Number sense to 100, addition/subtraction within 20, shapes, and simple word problems.",
      },
    ],
  },
  {
    slug: "class-2-reading",
    name: "Class 2 Reading Worksheets",
    title: "Class 2 reading worksheets — printable passages",
    description:
      "Class 2 reading comprehension worksheets with short paragraphs and thoughtful questions.",
    classSlug: "class-2",
    activitySlug: "reading",
    status: "published",
    intro: [
      "Class 2 reading worksheets can introduce slightly longer paragraphs while keeping language friendly. Ask “why” and “how” questions sparingly alongside factual ones.",
      ...sharedParentTips,
    ],
    howTo: [
      "Have your child retell the passage in their own words.",
      "Underline evidence for one answer.",
    ],
    faqs: [
      {
        question: "How many questions should Class 2 reading sheets include?",
        answer: "Four to six is usually enough for a calm evening session.",
      },
    ],
  },
  {
    slug: "preschool-worksheets",
    name: "Preschool Worksheets",
    title: "Preschool worksheets — printable easy homework for nursery & KG",
    description:
      "Preschool printable worksheets for Nursery, Jr KG, and Sr KG: tracing, colours, matching, and play-based learning.",
    status: "published",
    intro: [
      "Preschool worksheets should protect play. The best easy homework for preschool is short, visual, and optional — a bridge between school and home, not a second school day.",
      "This hub points parents toward Nursery and KG printables that build readiness skills without drilling.",
      ...sharedParentTips,
    ],
    howTo: [
      "Offer worksheets after outdoor play or snack.",
      "Stop at the first sign of fatigue.",
      "Rotate colouring, tracing, and matching through the week.",
    ],
    faqs: [
      {
        question: "What age are preschool worksheets for?",
        answer:
          "Typically Nursery to Sr KG (roughly ages 3–6), depending on your school system.",
      },
      {
        question: "Should preschoolers write on lines every day?",
        answer:
          "No. Large tracing and free drawing matter more than daily lined writing at this stage.",
      },
    ],
  },
  {
    slug: "kindergarten-worksheets",
    name: "Kindergarten Worksheets",
    title: "Kindergarten worksheets — printable Jr KG & Sr KG practice",
    description:
      "Kindergarten printable worksheets for letters, numbers, reading readiness, and fine motor practice.",
    status: "published",
    intro: [
      "Kindergarten worksheets bridge play and primary school. Focus on letter-sound awareness, counting, patterns, and pencil control with themes children love.",
      ...sharedParentTips,
    ],
    howTo: [
      "Keep a visible weekly rhythm: letters, numbers, story, colour.",
      "Use Jr KG and Sr KG hubs for class-specific ideas.",
    ],
    faqs: [
      {
        question: "Are kindergarten worksheets the same as Class 1?",
        answer:
          "No. Kindergarten sheets should stay shorter, more visual, and less exam-oriented than Class 1.",
      },
    ],
  },
];

export const tools: ToolEntity[] = [
  {
    slug: "worksheet-generator",
    name: "Worksheet Generator",
    title: "Free worksheet generator ideas for parents",
    description:
      "Learn how a worksheet generator helps busy parents create printable PDFs — plus use Homework Buddy on Android.",
    status: "published",
    intro: [
      "A worksheet generator saves parents from hunting random PDFs every evening. Instead of scrolling endlessly, you choose class, activity, theme, and time — then print.",
      "On this site we explain how worksheet generators work, what to look for, and how to keep generated practice age-appropriate. For instant generation on your phone, Homework Buddy creates printable activities for Nursery to Class 3.",
      "Good generators respect attention spans. A 15-minute sheet with clear instructions beats a dense packet that causes stress.",
      "When you evaluate any worksheet generator or app, check: class fit, theme variety, printable quality, and whether kids can finish without tears.",
      ...sharedParentTips,
    ],
    howTo: [
      "Decide the class and skill you need tonight.",
      "Pick a theme your child already likes.",
      "Choose a short duration (10–20 minutes).",
      "Preview before printing; adjust difficulty if needed.",
      "Save favourites so next week starts easier.",
    ],
    faqs: [
      {
        question: "What is the best worksheet generator for Class 1–3?",
        answer:
          "Look for class-aware content, printable PDFs, and themes kids enjoy. Homework Buddy is built for Nursery to Class 3 on Android.",
      },
      {
        question: "Are AI worksheet generators safe for young kids?",
        answer:
          "Use parent-controlled tools, preview every page, and keep sessions short. Avoid anything that replaces conversation with endless drills.",
      },
    ],
  },
  {
    slug: "reading-generator",
    name: "Reading Generator",
    title: "Reading worksheet generator for kids",
    description:
      "How to generate reading worksheets and comprehension practice for early readers at home.",
    status: "published",
    intro: [
      "A reading generator helps you produce short passages matched to your child’s class. That matters because Class 1 readers need different text than Class 3.",
      "Use reading generators to create theme-based stories, then ask a few clear questions. Preview vocabulary and read aloud together.",
      ...sharedParentTips,
    ],
    howTo: [
      "Select reading as the activity type.",
      "Choose a familiar theme.",
      "Generate, preview, and print one passage.",
      "Discuss answers before writing.",
    ],
    faqs: [
      {
        question: "Can I generate reading worksheets offline?",
        answer:
          "Homework Buddy focuses on creating printables you can save and reuse. Check the app for current offline/save options after generation.",
      },
    ],
  },
  {
    slug: "math-worksheet-generator",
    name: "Math Worksheet Generator",
    title: "Math worksheet generator — printable practice",
    description:
      "Create printable maths worksheets for counting, sums, and word problems with class-fit difficulty.",
    status: "published",
    intro: [
      "Math worksheet generators should let you control difficulty. Random hard sums frustrate Class 1 children; endless easy sums bore Class 3.",
      "Aim for mixed practice: fluency plus one story problem. Themes help word problems feel concrete.",
      ...sharedParentTips,
    ],
    howTo: [
      "Pick maths and your child’s class.",
      "Keep duration short.",
      "Print and sit nearby for the first word problem.",
    ],
    faqs: [
      {
        question: "How do I avoid maths worksheet overload?",
        answer:
          "Limit to one printable session and add real-life maths during chores or shopping.",
      },
    ],
  },
  {
    slug: "homework-planner",
    name: "Homework Planner",
    title: "Homework planner for parents — weekly routine ideas",
    description:
      "Plan calm weekly homework routines for Nursery to Class 3 with printable-friendly schedules.",
    status: "published",
    intro: [
      "A homework planner reduces nightly decision fatigue. When you know Monday is reading and Wednesday is maths, evenings feel lighter.",
      "Use this guide to sketch a weekly plan, then fill slots with printable worksheets or app-generated PDFs.",
      ...sharedParentTips,
    ],
    howTo: [
      "Block four short sessions per week.",
      "Assign activity types to days.",
      "Leave one buffer day for rest or catch-up.",
      "Review the plan every Sunday night.",
    ],
    faqs: [
      {
        question: "What if school already gives homework?",
        answer:
          "Use printables only as light practice or on free days. Never double the load on busy school nights.",
      },
    ],
  },
];

export const guides: GuideEntity[] = [
  {
    slug: "homework-routine",
    title: "How to build a calm homework routine for young children",
    description:
      "A practical parent guide to evening homework routines for Nursery to Class 3 — timing, printables, and kindness.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-17",
    status: "published",
    sections: [
      {
        heading: "Why routines beat random worksheets",
        paragraphs: [
          "Children feel safer when evenings are predictable. A simple routine — snack, short printable, free play — reduces battles more effectively than buying more books.",
          "Parents in India often juggle office hours, tuition, and dinner. A 15-minute homework window is realistic; a 90-minute grind is not.",
        ],
      },
      {
        heading: "A sample weekly rhythm",
        paragraphs: [
          "Monday: reading worksheet. Tuesday: rest or school homework only. Wednesday: maths printable. Thursday: writing or creative thinking. Friday: colouring or life skills. Weekend: optional theme project.",
          "Adjust freely. The point is fewer decisions at 8 p.m., not perfection.",
        ],
      },
      {
        heading: "Using printable worksheets without pressure",
        paragraphs: [
          "Print one sheet, not five. Sit nearby. Stop early if needed. Save progress so your child sees growth.",
          "Homework Buddy can generate fresh printable activities when you need variety without more scrolling.",
        ],
      },
    ],
    faqs: [
      {
        question: "What time should homework start?",
        answer:
          "After a snack and a short break from school — often early evening works better than late night.",
      },
      {
        question: "How long should homework last for Class 1?",
        answer: "About 15–20 focused minutes is enough for many Class 1 children.",
      },
    ],
  },
  {
    slug: "printable-worksheets-guide",
    title: "Printable worksheets for kids: a parent’s complete guide",
    description:
      "Everything Indian parents need to know about printable worksheets — choosing, printing, and using them well.",
    datePublished: "2026-07-01",
    dateModified: "2026-07-17",
    status: "published",
    sections: [
      {
        heading: "What makes a worksheet worth printing",
        paragraphs: [
          "Clear instructions, age-fit difficulty, readable layout, and a finishable length. Fancy graphics mean nothing if the task overwhelms your child.",
          "Prefer PDFs designed for A4 home printers. Preview on screen before you waste ink.",
        ],
      },
      {
        heading: "Match worksheets to search intent — and to your child",
        paragraphs: [
          "If you searched for Class 1 maths worksheets, stay on maths for Class 1. Mixing Class 3 reading into a tired Class 1 evening helps nobody.",
          "Browse class hubs and activity hubs on this site to stay organised.",
        ],
      },
      {
        heading: "From static PDFs to generated practice",
        paragraphs: [
          "Libraries of static worksheets are useful. Generators add freshness. Use both: keep favourites, generate new themes when curiosity fades.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are free printable worksheets good enough?",
        answer:
          "Many are. Always preview for accuracy, language, and age fit. Free does not automatically mean appropriate.",
      },
    ],
  },
  {
    slug: "class-1-reading-at-home",
    title: "Class 1 reading at home: worksheets and gentle practice",
    description:
      "Help your Class 1 child read at home with short passages, printable worksheets, and confidence-building tips.",
    datePublished: "2026-07-05",
    dateModified: "2026-07-17",
    status: "published",
    sections: [
      {
        heading: "Start smaller than you think",
        paragraphs: [
          "One short passage done happily beats three pages of struggle. Class 1 reading grows through repetition and encouragement.",
        ],
      },
      {
        heading: "Use themes your child loves",
        paragraphs: [
          "Animals, festivals, and school stories keep motivation high. Pair reading worksheets with conversation and picture walks.",
        ],
      },
      {
        heading: "When to try a worksheet generator",
        paragraphs: [
          "If your printed stash feels stale, generate a fresh Class 1 reading activity in Homework Buddy and preview before printing.",
        ],
      },
    ],
    faqs: [
      {
        question: "My Class 1 child guesses words. What should I do?",
        answer:
          "Slow down, point to each word, and praise sounding out. Choose easier passages for a week to rebuild confidence.",
      },
    ],
  },
  {
    slug: "easy-homework-ideas",
    title: "Easy homework ideas for busy parents (Nursery to Class 3)",
    description:
      "Easy homework ideas that fit real evenings — short printables, oral practice, and calm routines.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-17",
    status: "published",
    sections: [
      {
        heading: "Easy does not mean low value",
        paragraphs: [
          "Easy homework ideas respect energy limits while still practising reading, writing, maths, and life skills.",
        ],
      },
      {
        heading: "Ten ideas you can use this week",
        paragraphs: [
          "1) One animal reading sheet. 2) Five addition facts orally. 3) Trace four letters. 4) Colour a festival page. 5) Retell a school story. 6) Count fruit at snack time. 7) Write three gratitude words. 8) Sort objects by size. 9) A monsoon picture talk. 10) A 10-minute app-generated printable.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if the teacher gives lots of homework already?",
        answer:
          "Skip optional printables. Protect sleep and mood first; enrichment can wait for lighter days.",
      },
    ],
  },
];

export const worksheetSeeds: WorksheetSeed[] = [
  {
    slug: "animals-reading-adventure",
    classSlug: "class-1",
    name: "Animals Reading Adventure",
    title: "Class 1 animals reading worksheet — printable adventure",
    description:
      "A Class 1 printable reading worksheet with an animals theme, short passage practice, and gentle questions.",
    activitySlug: "reading",
    themeSlug: "animals",
    status: "published",
    pdfPath: "/worksheets/class-1-animals-reading-adventure.pdf",
    intro: [
      "This Class 1 animals reading worksheet is designed for a single calm sitting. Read together, talk about the animals, then answer a few questions.",
      "Parents can print it as easy homework after school or generate similar themed reading PDFs in Homework Buddy.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Is this worksheet free to print?",
        answer:
          "Yes — use it as educational inspiration at home. For fresh variations, generate activities in the Homework Buddy app.",
      },
    ],
  },
  {
    slug: "festival-coloring-fun",
    classSlug: "nursery",
    name: "Festival Coloring Fun",
    title: "Nursery festival coloring worksheet",
    description:
      "A Nursery printable colouring worksheet with a festival theme for fine motor practice.",
    activitySlug: "coloring",
    themeSlug: "festivals",
    status: "published",
    pdfPath: "/worksheets/nursery-festival-coloring-fun.pdf",
    intro: [
      "Festival colouring gives Nursery children a joyful fine-motor task. Talk about colours and celebration while they work.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "How long should Nursery colouring take?",
        answer: "Often 10 minutes is perfect. Stop while it is still fun.",
      },
    ],
  },
  {
    slug: "transport-maths-count",
    classSlug: "class-1",
    name: "Transport Maths Count",
    title: "Class 1 transport maths worksheet",
    description:
      "Printable Class 1 maths practice with a transport theme — counting and simple sums.",
    activitySlug: "maths",
    themeSlug: "transport",
    status: "published",
    pdfPath: "/worksheets/class-1-transport-maths-count.pdf",
    intro: [
      "Vehicles make counting concrete. Use this transport maths worksheet for Class 1 number practice in one short session.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Can Class 2 use this sheet?",
        answer:
          "Possibly as a warm-up, but Class 2 usually needs richer word problems — see Class 2 maths hubs.",
      },
    ],
  },
  {
    slug: "space-creative-prompt",
    classSlug: "class-2",
    name: "Space Creative Prompt",
    title: "Class 2 space creative thinking worksheet",
    description:
      "A Class 2 printable creative thinking sheet with a space theme.",
    activitySlug: "creative-thinking",
    themeSlug: "space",
    status: "published",
    pdfPath: "/worksheets/class-2-space-creative-prompt.pdf",
    intro: [
      "Invite your Class 2 learner to imagine a trip to the stars. Creative prompts build language and confidence.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Should answers be written or drawn?",
        answer: "Either works. Drawing first then labelling is a great scaffold.",
      },
    ],
  },
  {
    slug: "fruits-writing-words",
    classSlug: "jr-kg",
    name: "Fruits Writing Words",
    title: "Jr KG fruits writing worksheet",
    description:
      "Jr KG printable writing practice with fruit words and tracing support.",
    activitySlug: "writing",
    themeSlug: "fruits",
    status: "published",
    pdfPath: "/worksheets/jr-kg-fruits-writing-words.pdf",
    intro: [
      "Fruit words are short and friendly for Jr KG writers. Keep tracing large and praise every letter.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "My child writes letters backwards. Is that okay?",
        answer:
          "Common at this age. Model the correct form calmly and try again tomorrow — avoid harsh correction.",
      },
    ],
  },
  {
    slug: "monsoon-life-skills",
    classSlug: "class-3",
    name: "Monsoon Life Skills",
    title: "Class 3 monsoon life skills worksheet",
    description:
      "Class 3 printable life skills scenarios around monsoon safety and helpfulness.",
    activitySlug: "life-skills",
    themeSlug: "monsoon",
    status: "published",
    pdfPath: "/worksheets/class-3-monsoon-life-skills.pdf",
    intro: [
      "Monsoon season is a natural time to talk about safety, empathy, and routines. This Class 3 sheet sparks discussion.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Is this academic homework?",
        answer:
          "It is educational and discussion-based — excellent alongside academic worksheets, not a replacement for school maths or reading when those are assigned.",
      },
    ],
  },
];

export function publishedOnly<T extends { status: "published" | "draft" }>(items: T[]) {
  return items.filter((i) => i.status === "published");
}

export function getClass(slug: string) {
  return classes.find((c) => c.slug === slug);
}
export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug);
}
export function getTheme(slug: string) {
  return themes.find((t) => t.slug === slug);
}
export function getCrossHub(slug: string) {
  return crossHubs.find((h) => h.slug === slug);
}
export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}
export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
export function getWorksheet(classSlug: string, slug: string) {
  return worksheetSeeds.find((w) => w.classSlug === classSlug && w.slug === slug);
}

export function allPublishedPaths(): string[] {
  const paths = [
    "/",
    "/features",
    "/download",
    "/faq",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
    "/worksheets",
    "/activities",
    "/themes",
    "/guides",
    "/tools",
  ];
  for (const c of publishedOnly(classes)) paths.push(`/worksheets/${c.slug}`);
  for (const h of publishedOnly(crossHubs)) paths.push(`/worksheets/${h.slug}`);
  for (const a of publishedOnly(activities)) paths.push(`/activities/${a.slug}`);
  for (const t of publishedOnly(themes)) paths.push(`/themes/${t.slug}`);
  for (const g of publishedOnly(guides)) paths.push(`/guides/${g.slug}`);
  for (const t of publishedOnly(tools)) paths.push(`/tools/${t.slug}`);
  for (const w of publishedOnly(worksheetSeeds)) {
    paths.push(`/worksheets/${w.classSlug}/${w.slug}`);
  }
  return paths;
}
