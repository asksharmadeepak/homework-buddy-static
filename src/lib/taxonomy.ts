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
  /** On-page / OG preview image for Image SEO (PNG/JPEG under public/) */
  previewImagePath?: string;
  /** Descriptive alt for the preview (include query language when relevant) */
  previewImageAlt?: string;
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
    title: "Nursery homework — printable worksheets & easy activities",
    description:
      "Nursery homework printable worksheets for tracing, colours, matching, and early listening — free easy PDFs for Indian preschool parents.",
    icon: "/classes/nursery.png",
    status: "published",
    intro: [
      "Nursery homework should feel like play with a little structure. When parents search for nursery homework or easy preschool worksheets in India, they usually need a short printable that builds pencil grip, listening, and confidence — not exam pressure or long packs of photocopies.",
      "At Nursery age (roughly 3–4), children are still learning how to sit with a page, hold a crayon, and follow a simple instruction. The best nursery printable worksheets use large lines, clear pictures, and one skill at a time: tracing paths, colour recognition, matching pairs, or picture talk (“What do you see?”).",
      "This Nursery hub is written for busy evenings after school or playgroup. Aim for 10–15 minutes. One sheet is enough. If your child is tired, stop and try again tomorrow — a happy unfinished page beats a tearful finished one.",
      "Choose themes your child already loves — animals, fruits, festivals, or monsoon — so the worksheet feels familiar. Pair every printable with conversation. Naming colours and animals aloud builds vocabulary as much as filling boxes.",
      "Avoid dense grids and tiny letters. Nursery sheets should leave generous white space. Prefer A4 PDFs you can preview on your phone before printing, so you do not waste ink on the wrong difficulty.",
      "A calm Nursery homework rhythm might look like this: snack, one tracing or colouring sheet, five minutes of free play praise, then dinner. Three to four short sessions a week plus outdoor play is healthier than daily drills.",
      "When you want a fresh theme without hunting another random PDF, generate a Nursery printable in the Homework Buddy Android app — same calm style as the free samples on this site, ready to print tonight.",
      "Nursery tip: sit beside your child for the first two minutes, then step back if they are engaged. Celebrate effort (“You held the crayon carefully”) more than speed. Keep a small folder of favourite nursery worksheets so Sunday nights are not a scramble.",
    ],
    howTo: [
      "Pick one skill for the day: tracing, colours, or matching — not all three.",
      "Print a single A4 sheet and preview it on screen first.",
      "Sit beside your child for the first few minutes, then praise and pause.",
      "Stop while energy is still good; save the rest for tomorrow.",
      "Rotate themes weekly (animals → fruits → festivals) so practice stays fresh.",
      "When favourites feel stale, generate a new Nursery sheet in Homework Buddy.",
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
          "Not every day. Three to four short printable sessions a week plus free play is a healthy rhythm for most Nursery kids in India.",
      },
      {
        question: "What printable worksheets work best for Nursery?",
        answer:
          "Large-line tracing, colour-and-say sheets, simple matching, festival colouring, and picture-based listening activities work well.",
      },
      {
        question: "Is Nursery homework the same as LKG homework?",
        answer:
          "Schools use different labels (Nursery, Playgroup, LKG). Focus on age and attention span: if letters are still huge and play-based, Nursery-style sheets are a better fit than Class 1 pages.",
      },
      {
        question: "Where can I get free Nursery homework PDFs?",
        answer:
          "Download the free Nursery samples on this site (including festival colouring and Hindi swar tracing), then generate more themed sheets in the Homework Buddy app on Google Play.",
      },
      {
        question: "My Nursery child refuses worksheets. What should I do?",
        answer:
          "Switch to colouring or oral picture talk for a few days. Offer choice (“animals or fruits?”), keep sessions tiny, and never use worksheets as punishment.",
      },
    ],
    relatedActivitySlugs: ["coloring", "reading", "life-skills"],
    relatedThemeSlugs: ["animals", "fruits", "festivals"],
  },
  {
    slug: "jr-kg",
    name: "Jr KG",
    title: "Junior KG homework — printable Jr KG worksheets",
    description:
      "Jr KG and junior kindergarten homework worksheets for letters, numbers, patterns, and early reading — printable PDFs for busy parents.",
    icon: "/classes/jr_kg.png",
    status: "published",
    intro: [
      "Junior KG (Jr KG) sits between playful Nursery work and more structured Class 1 expectations. Parents searching for junior kg homework or jr kg worksheets often want printable PDFs that teach letters and numbers without turning the evening into a tuition class.",
      "Jr KG children (roughly 4–5) can usually handle clearer letter recognition, counting toward 20, simple patterns, and beginning sounds — still with large writing space and warm pictures. Instructions should be visual. If a sheet needs a long adult explanation, simplify it or choose another printable.",
      "This Jr KG hub focuses on easy kindergarten homework you can finish in one calm sitting: letter and number practice, fruit or animal themes, and short writing strokes. Keep sessions around 15 minutes. One skill per night works better than mixing reading, maths, and handwriting every evening.",
      "In many Indian schools, Jr KG overlaps with LKG or Prep labels. Ignore the brand name and match difficulty to your child: if they can spot letters but tire quickly on writing lines, stay with recognition and tracing before full words.",
      "A practical Jr KG week might look like: Monday letters, Wednesday numbers, Friday a themed writing or reading warm-up, and the other days reserved for school homework or free play. Review yesterday’s sheet for one minute before starting a new one — it builds memory without pressure.",
      "Print on A4, use a quiet corner with good light, and praise formation over speed. Backwards letters are common at this age; model the correct shape calmly and try again tomorrow.",
      "When you need a fresh Jr KG printable with a new theme (transport, nature, fruits), generate one in the Homework Buddy Android app. It is built for Nursery to Class 3 parents who want print-ready PDFs without scrolling for hours.",
      "Jr KG tip: alternate pencil work with oral practice — say five letter sounds or count toys aloud — so homework does not feel like only sitting and writing.",
    ],
    howTo: [
      "Choose letter or number focus for the week — not both every night.",
      "Print one Jr KG worksheet and preview difficulty before your child sits down.",
      "Use one printable plus five minutes of oral practice (sounds or counting).",
      "Add a theme (animals, transport, fruits) to keep motivation high.",
      "Review yesterday’s sheet briefly before starting a new one.",
      "Generate a fresh Jr KG sheet in Homework Buddy when the folder feels stale.",
    ],
    faqs: [
      {
        question: "What is the difference between Nursery and Jr KG worksheets?",
        answer:
          "Jr KG sheets usually introduce clearer letter and number practice while still staying playful and short. Nursery sheets emphasise tracing, colours, and matching with even larger space.",
      },
      {
        question: "Should Jr KG homework include writing lines?",
        answer:
          "Yes, but keep lines large and limit writing volume. Quality of letter formation matters more than filling a whole page.",
      },
      {
        question: "How long should junior KG homework take?",
        answer:
          "About 15 minutes of focused work is enough for most Jr KG children. Stop earlier if frustration rises.",
      },
      {
        question: "Are Jr KG and LKG worksheets the same?",
        answer:
          "Often similar in age band. Use the sheet that matches your child’s attention and pencil control, whether the school calls it Jr KG, LKG, or Prep.",
      },
      {
        question: "Where can I download free Jr KG worksheets?",
        answer:
          "Start with the free Jr KG sample on this site (fruits writing), browse related activities, then create more printable Jr KG homework in the Homework Buddy app on Google Play.",
      },
      {
        question: "My child mixes b and d in Jr KG. Is that okay?",
        answer:
          "Very common. Slow down, use picture cues, and practise a few letters at a time. Avoid harsh correction — confidence matters as much as accuracy at this stage.",
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
    relatedActivitySlugs: ["reading", "writing", "maths", "creative-thinking", "hindi"],
    relatedThemeSlugs: ["animals", "festivals", "stories", "hindi-varnamala"],
  },
  {
    slug: "class-2",
    name: "Class 2",
    title: "Homework for Class 2 — printable worksheets",
    description:
      "Homework for Class 2 with printable reading passages, writing practice, and maths worksheets parents can use at home.",
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
    slug: "hindi",
    name: "Hindi Fun",
    title: "Hindi worksheets for kids — printable varnamala, swar & vyanjan practice",
    description:
      "Printable Hindi worksheets for Nursery to Class 3: swar (अ आ इ ई) tracing, vyanjan (क ख ग) practice, and varnamala activities for home.",
    icon: "/activities/hindi.png",
    status: "published",
    intro: [
      "Hindi worksheets help children learn the varnamala — swar (स्वर) like अ, आ, इ, ई and vyanjan (व्यंजन) like क, ख, ग — through tracing, matching, and picture words such as ख से खरगोश and त से तोता.",
      "Many parents search for Hindi worksheets for Nursery, LKG, UKG, or Class 1 and find only dense photocopied pages. Good Hindi printables keep letters large, add friendly pictures, and finish in one short sitting.",
      "Start with swar tracing for Nursery, move to vyanjan recognition in KG, and mix both (varnamala mix) by Class 1. Saying each letter aloud while tracing builds sound-letter links faster than silent copying.",
      ...sharedParentTips,
    ],
    howTo: [
      "Say the letter aloud together before tracing it.",
      "Practise 4–6 letters per session, not the whole varnamala.",
      "Connect letters to familiar words: अ से अनार, क से कमल.",
      "Revisit yesterday's letters for one minute before new ones.",
    ],
    faqs: [
      {
        question: "At what age should children start Hindi varnamala worksheets?",
        answer:
          "Most children enjoy swar tracing from Nursery age (3–4) with large letters. Vyanjan practice and matching fit Jr KG onwards.",
      },
      {
        question: "Should I teach swar or vyanjan first?",
        answer:
          "Swar (अ to अः) usually come first — there are fewer of them and they map to sounds children already use. Vyanjan follow naturally.",
      },
      {
        question: "Where can I get printable Hindi worksheets in PDF?",
        answer:
          "Download the free samples on this site, or generate fresh swar, vyanjan, and varnamala-mix worksheets anytime in the Homework Buddy app.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "sr-kg", "class-1"],
    relatedThemeSlugs: ["hindi-varnamala", "animals", "stories"],
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
    slug: "hindi-varnamala",
    name: "Hindi Varnamala",
    title: "Hindi varnamala worksheets — printable swar & vyanjan for kids",
    description:
      "Varnamala-themed printable worksheets: swar tracing (अ आ इ ई), vyanjan practice (क ख ग घ), and letter-picture matching for young learners.",
    icon: "/themes/hindi_varnamala.png",
    status: "published",
    intro: [
      "The Hindi varnamala — 13 swar and 33+ vyanjan — is easiest to learn a few letters at a time with big print and pictures. Varnamala worksheets turn अ, आ, इ into tracing games and क, ख, ग into matching puzzles.",
      "Parents searching for हिंदी वर्णमाला worksheets or swar-vyanjan practice PDFs usually need tonight's printable, not a textbook. Keep each session to one sheet: trace, say aloud, and connect letters to words like शेर, हाथी, and तोता.",
      "Mother-tongue letter practice also strengthens English phonics — children who map sounds to symbols in one script transfer that skill to the other.",
      ...sharedParentTips,
    ],
    howTo: [
      "Trace with a finger first, then with a pencil.",
      "Pair every letter with a spoken word (ख से खरगोश).",
      "Keep a varnamala chart visible at home for quick revision.",
      "Celebrate completing each letter group (क–घ, च–झ) before moving on.",
    ],
    faqs: [
      {
        question: "What is the difference between swar and vyanjan worksheets?",
        answer:
          "Swar sheets practise the vowels (अ to अः) — usually tracing and recognition. Vyanjan sheets cover consonants (क onwards) and often add letter-picture matching.",
      },
      {
        question: "Are these useful for children in English-medium schools?",
        answer:
          "Yes. Most Indian schools teach Hindi as a second language from early years, and home varnamala practice keeps it enjoyable instead of stressful.",
      },
    ],
    relatedClassSlugs: ["nursery", "jr-kg", "class-1"],
    relatedActivitySlugs: ["hindi", "writing", "coloring"],
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
    dateModified: "2026-08-08",
    status: "published",
    sections: [
      {
        heading: "Why routines beat random worksheets",
        paragraphs: [
          "Children feel safer when evenings are predictable. A simple routine — snack, short printable, free play — reduces battles more effectively than buying another stack of books or downloading five random PDFs at 9 p.m.",
          "Parents in India often juggle office hours, traffic, tuition, and dinner. A 15-minute homework window is realistic for Nursery to Class 3; a 90-minute grind usually ends in tears for everyone.",
          "A routine is not a rigid timetable. It is a small sequence your child can recognise: wash hands, snack, one calm activity, then play or rest. When the sequence is familiar, you spend less energy negotiating and more energy encouraging.",
        ],
      },
      {
        heading: "Choose a realistic homework window",
        paragraphs: [
          "Start after a break from school — not the moment the bag hits the floor. Many families find early evening (before late TV or late dinner) works better than after 9 p.m.",
          "Match length to class: Nursery 10–15 minutes, Jr/Sr KG about 15 minutes, Class 1–2 about 15–20 minutes, Class 3 up to 20–25 minutes if energy is good. Stop earlier if frustration rises.",
          "Protect sleep. A half-finished worksheet and a calm bedtime beat a finished worksheet and a meltdown. Learning lives in consistent short practice, not in covering every blank tonight.",
        ],
      },
      {
        heading: "A sample weekly rhythm (Nursery to Class 3)",
        paragraphs: [
          "Monday: reading or picture talk. Tuesday: school homework only or rest. Wednesday: maths printable or oral counting. Thursday: writing, Hindi letters, or creative thinking. Friday: colouring or life skills. Weekend: optional theme project if everyone is willing.",
          "Adjust freely for festivals, guests, illness, or heavy school work. The point is fewer decisions at 8 p.m., not perfection on a chart.",
          "Keep a thin folder labelled by class (Nursery, Jr KG, Class 1…) with three favourite printables. When the week is chaotic, open the folder instead of opening ten browser tabs.",
        ],
      },
      {
        heading: "Using printable worksheets without pressure",
        paragraphs: [
          "Print one sheet, not five. Preview on your phone so the difficulty matches today’s mood. Sit nearby for the first minutes, then step back if your child is engaged.",
          "Celebrate effort (“You sounded out a new word”) more than speed. Save completed pages so children can see progress — a small stack of finished sheets builds pride.",
          "When favourites feel stale, generate a fresh printable in the Homework Buddy Android app: pick class, activity, and theme, then print. Variety without another late-night search spiral.",
        ],
      },
    ],
    faqs: [
      {
        question: "What time should homework start?",
        answer:
          "After a snack and a short break from school — often early evening works better than late night for Nursery to Class 3.",
      },
      {
        question: "How long should homework last for Class 1?",
        answer: "About 15–20 focused minutes is enough for many Class 1 children.",
      },
      {
        question: "What if tuition already fills the evening?",
        answer:
          "Skip optional printables on heavy tuition days. Use oral practice (five spellings, five sums) or rest. Consistency over weeks matters more than daily volume.",
      },
      {
        question: "Should weekends include homework?",
        answer:
          "Optional. A light theme activity or outdoor play often helps more than another worksheet. Use weekends to catch up only if school work was missed — not to double the load.",
      },
    ],
  },
  {
    slug: "printable-worksheets-guide",
    title: "Printable worksheets for kids: a parent’s complete guide",
    description:
      "Everything Indian parents need to know about printable worksheets — choosing, printing, and using them well.",
    datePublished: "2026-07-01",
    dateModified: "2026-08-08",
    status: "published",
    sections: [
      {
        heading: "What makes a worksheet worth printing",
        paragraphs: [
          "Clear instructions, age-fit difficulty, readable layout, and a finishable length. Fancy graphics mean nothing if the task overwhelms your child or needs a paragraph of adult explanation.",
          "Prefer PDFs designed for A4 home printers with generous margins. Preview on screen before you waste ink — especially for Hindi letters, small fonts, or dark colouring pages.",
          "A good printable worksheet for Nursery to Class 3 usually focuses on one skill (tracing, one maths idea, one short passage) rather than cramming an entire textbook chapter onto one page.",
        ],
      },
      {
        heading: "Match the sheet to your child — not only to the search bar",
        paragraphs: [
          "If you searched for Class 1 maths worksheets, stay on maths for Class 1. Mixing Class 3 reading into a tired Class 1 evening helps nobody.",
          "School labels vary (LKG, Jr KG, Prep). Match pencil control and attention span: large tracing for Nursery, letter/number practice for Jr KG, short passages for Class 1, richer reasoning for Class 2–3.",
          "Browse class hubs and activity hubs on this site (reading, writing, maths, Hindi, colouring) so you stay organised instead of collecting random files named “worksheet1.pdf”.",
        ],
      },
      {
        heading: "Printing and home setup tips",
        paragraphs: [
          "Use plain A4 paper and a calm corner with good light. Keep crayons or a pencil ready before you call your child — friction starts fights.",
          "Print single-sided when children erase a lot. Store finished sheets in a dated folder; children love flipping back to see how letters improved.",
          "If ink is expensive, prioritise black-and-white line worksheets for daily practice and save heavy colour pages for weekends.",
        ],
      },
      {
        heading: "From static PDFs to generated practice",
        paragraphs: [
          "Libraries of static worksheets are useful for favourites you know work. Generators add freshness when curiosity fades or you need a new theme tonight.",
          "Use both: keep three proven printables per class, then generate new animals, festivals, or Hindi practice in Homework Buddy when you need variety without another hour of scrolling.",
          "Always preview generated pages the same way you preview downloads — age fit and clarity first, then print.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are free printable worksheets good enough?",
        answer:
          "Many are. Always preview for accuracy, language, and age fit. Free does not automatically mean appropriate — and paid does not automatically mean better.",
      },
      {
        question: "How many worksheets should I print per week?",
        answer:
          "For Nursery to Class 3, three to five short printables a week plus school homework is plenty for most families.",
      },
      {
        question: "Colour or black-and-white PDFs?",
        answer:
          "Black-and-white is fine for daily tracing, maths, and writing. Use colour pages when the goal is calm fine-motor practice or festival fun.",
      },
      {
        question: "Where do I start on this website?",
        answer:
          "Open your child’s class hub under Worksheets, pick an activity, download a free sample PDF, then generate more in the Homework Buddy app when you want a fresh theme.",
      },
    ],
  },
  {
    slug: "class-1-reading-at-home",
    title: "Class 1 reading at home: worksheets and gentle practice",
    description:
      "Help your Class 1 child read at home with short passages, printable worksheets, and confidence-building tips.",
    datePublished: "2026-07-05",
    dateModified: "2026-08-08",
    status: "published",
    sections: [
      {
        heading: "Start smaller than you think",
        paragraphs: [
          "One short passage done happily beats three pages of struggle. Class 1 reading grows through repetition, pointing to words, and encouragement — not through racing the clock.",
          "If your child guesses from pictures, slow down. Point under each word, praise sounding out, and choose an easier passage for a few days to rebuild confidence.",
          "Ten to fifteen minutes of calm reading practice after a snack is enough for many Class 1 evenings in India, especially when school already sent notebook work.",
        ],
      },
      {
        heading: "What a good Class 1 reading worksheet looks like",
        paragraphs: [
          "Short sentences, familiar vocabulary, a clear question or two, and space to answer without tiny boxes. Themes like animals, school, festivals, or family keep motivation high.",
          "Pair the printable with conversation: “Which animal was kind?” Picture walks before reading help children predict words and stay engaged.",
          "Avoid dense paragraphs meant for older classes. If your child finishes early and still has energy, re-read the same passage for fluency instead of printing a harder sheet.",
        ],
      },
      {
        heading: "A simple weekly reading rhythm",
        paragraphs: [
          "Two or three reading nights per week work well: one printable passage, one oral retell of a school story, and one shared picture book if you have time.",
          "On heavy homework days, skip the printable and do a five-minute oral read of labels around the house (milk packet, spice box) — real print still counts.",
          "Keep a small stack of Class 1 reading sheets you already know fit. Rotate themes so practice does not feel like the same page forever.",
        ],
      },
      {
        heading: "When to try a worksheet generator",
        paragraphs: [
          "If your printed stash feels stale, generate a fresh Class 1 reading activity in the Homework Buddy Android app, preview the PDF, then print one page.",
          "Generators help when you want a new animal or festival theme without hunting websites at night. They do not replace sitting with your child — they just remove the search spiral.",
          "Use the free Class 1 animals reading sample on this site as a model of length and tone, then create variations in the app when you need more.",
        ],
      },
    ],
    faqs: [
      {
        question: "My Class 1 child guesses words. What should I do?",
        answer:
          "Slow down, point to each word, and praise sounding out. Choose easier passages for a week to rebuild confidence.",
      },
      {
        question: "Should Class 1 reading homework include writing answers?",
        answer:
          "A little writing is fine — one or two short answers. If writing tires them, take answers orally and write one sentence together.",
      },
      {
        question: "English or Hindi reading first?",
        answer:
          "Follow the school’s focus for the week. You can still keep a gentle second language session shorter (matching or picture talk) so neither language feels like punishment.",
      },
      {
        question: "How do I know a passage is too hard?",
        answer:
          "If your child struggles with more than a few words per sentence or avoids starting, step down a level. Fluency and confidence come before harder text.",
      },
    ],
  },
  {
    slug: "easy-homework-ideas",
    title: "Easy homework ideas for busy parents (Nursery to Class 3)",
    description:
      "Easy homework ideas that fit real evenings — short printables, oral practice, and calm routines.",
    datePublished: "2026-07-08",
    dateModified: "2026-08-08",
    status: "published",
    sections: [
      {
        heading: "Easy does not mean low value",
        paragraphs: [
          "Easy homework ideas respect energy limits while still practising reading, writing, maths, Hindi, and life skills. For busy Indian parents, “easy” means finishable tonight — not empty busywork.",
          "Search phrases like easy homework or easy homework activity usually mean: short, clear, age-fit, and printable or oral. That is the bar this guide uses from Nursery through Class 3.",
          "If school already sent a heavy load, choose the lightest idea below or skip enrichment entirely. Mood and sleep are part of learning.",
        ],
      },
      {
        heading: "Ten ideas you can use this week",
        paragraphs: [
          "1) One animal reading sheet for Class 1. 2) Five addition facts orally in the car or kitchen. 3) Trace four letters (Nursery / Jr KG). 4) Colour a festival page. 5) Retell a school story in three sentences.",
          "6) Count fruit at snack time. 7) Write three gratitude or kindness words (Class 2–3). 8) Sort spoons or toys by size. 9) A monsoon picture talk (“What do we need in the rain?”). 10) A 10–15 minute printable generated in Homework Buddy when you need a fresh theme fast.",
          "Pick one idea per evening. Crossing ten items off a list is not the goal — finishing one calmly is.",
        ],
      },
      {
        heading: "Match ideas to Nursery, Jr KG, and Class 1–3",
        paragraphs: [
          "Nursery: tracing, colouring, matching, picture talk. Keep sessions under 15 minutes and celebrate holding the crayon.",
          "Jr KG / Sr KG: letter and number recognition, large writing lines, simple patterns. Alternate pencil work with oral sounds or counting.",
          "Class 1–3: short reading passages, neat writing, maths with pictures, Hindi vyanjan or swar practice, and light life-skills questions. Cap at about 20 minutes unless the child asks for more.",
        ],
      },
      {
        heading: "When to use printables vs oral practice",
        paragraphs: [
          "Use printables when you want a clear start and finish on paper. Use oral practice when ink, energy, or time is low — five spellings, five sums, or naming five objects in Hindi still counts as homework.",
          "Keep a tiny “emergency list” on your phone: three oral ideas and one favourite PDF link. Busy nights need fewer decisions.",
          "For printable variety without scrolling, open Homework Buddy on Android, choose class and activity, generate a PDF, and print one page — the same approach as the free samples on easyhomeworkactivity.com.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if the teacher gives lots of homework already?",
        answer:
          "Skip optional printables. Protect sleep and mood first; enrichment can wait for lighter days.",
      },
      {
        question: "What are easy homework ideas for Nursery?",
        answer:
          "Large-line tracing, colour-and-say, simple matching, and five minutes of picture talk. Avoid tiny letters and long pages.",
      },
      {
        question: "Can easy homework still help Class 2 and Class 3?",
        answer:
          "Yes — short reading with one “why” question, mixed maths fluency plus one word problem, or a life-skills scenario finished in about 20 minutes.",
      },
      {
        question: "Where can I get printable easy homework PDFs quickly?",
        answer:
          "Browse free samples under Worksheets on this site, then generate more in the Homework Buddy app on Google Play when you need a new theme tonight.",
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
    previewImagePath: "/worksheets/previews/class-1-animals-reading-adventure.png",
    previewImageAlt: "Class 1 animals reading worksheet printable preview",
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
    previewImagePath: "/worksheets/previews/nursery-festival-coloring-fun.png",
    previewImageAlt: "Nursery festival colouring worksheet printable preview",
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
    previewImagePath: "/worksheets/previews/class-1-transport-maths-count.png",
    previewImageAlt: "Class 1 transport maths counting worksheet printable preview",
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
    previewImagePath: "/worksheets/previews/class-2-space-creative-prompt.png",
    previewImageAlt: "Class 2 space creative thinking worksheet printable preview",
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
    previewImagePath: "/worksheets/previews/jr-kg-fruits-writing-words.png",
    previewImageAlt: "Jr KG fruits writing worksheet printable preview",
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
    slug: "hindi-swar-tracing",
    classSlug: "nursery",
    name: "Hindi Swar Tracing",
    title: "Nursery Hindi swar worksheet — printable अ आ इ ई tracing PDF",
    description:
      "Free printable Hindi swar tracing worksheet for Nursery: trace अ आ इ ई उ ऊ with big friendly letters, plus a find-the-letter game.",
    activitySlug: "hindi",
    themeSlug: "hindi-varnamala",
    status: "published",
    pdfPath: "/worksheets/nursery-hindi-swar-tracing.pdf",
    previewImagePath: "/worksheets/previews/nursery-hindi-swar-tracing.png",
    previewImageAlt:
      "Nursery Hindi swar worksheet — printable अ आ इ ई tracing practice sheet",
    intro: [
      "This Nursery Hindi worksheet introduces the first swar of the varnamala — अ, आ, इ, ई, उ, ऊ — with large trace-over letters and a circle-the-letter game. Say each swar aloud together before tracing.",
      "स्वर अभ्यास works best in short, happy sessions: one sheet, six letters, lots of praise. For fresh swar, vyanjan, and varnamala-mix sheets every day, generate them in the Homework Buddy app.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Which swar should my child learn first?",
        answer:
          "Start with अ and आ — they are visually distinct and begin familiar words like अनार and आम. This sheet covers the first six swar in order.",
      },
      {
        question: "Is this Hindi worksheet free to print?",
        answer:
          "Yes — download the PDF and print it on A4. The Homework Buddy app can generate unlimited fresh Hindi varnamala worksheets.",
      },
    ],
  },
  {
    slug: "hindi-vyanjan-practice",
    classSlug: "class-1",
    name: "Hindi Vyanjan Practice",
    title: "Class 1 Hindi vyanjan worksheet — printable क ख ग matching PDF",
    description:
      "Free printable Class 1 Hindi vyanjan worksheet: match letters to pictures (ख से खरगोश), fill missing letters, and trace क ख ग घ.",
    activitySlug: "hindi",
    themeSlug: "hindi-varnamala",
    status: "published",
    pdfPath: "/worksheets/class-1-hindi-vyanjan-practice.pdf",
    previewImagePath: "/worksheets/previews/class-1-hindi-vyanjan-practice.png",
    previewImageAlt:
      "Class 1 Hindi vyanjan worksheet — match क ख ग to pictures, missing letters, and tracing PDF preview",
    intro: [
      "Looking for a free Hindi vyanjan worksheet for Class 1? This printable PDF practises व्यंजन three ways on one A4 page: match letters to pictures (ख से खरगोश, श से शेर, ह से हाथी, त से तोता), fill missing letters in the क–ठ sequence, and trace क ख ग घ with friendly spacing.",
      "Preview the full worksheet image on this page before you print. You can see the matching panel, missing-letter row, and tracing lines — the same calm layout Homework Buddy aims for when you generate fresh Hindi sheets in the app.",
      "Class 1 Hindi homework works best when children say the letter and its picture word aloud while drawing the matching line. That sound–shape link matters more than racing to the end of the page. One sheet a day (about 15–20 minutes) keeps varnamala practice light and consistent.",
      "Many parents search for “hindi vyanjan worksheet for class 1” after school and find dense photocopies. This sample keeps letters large, pictures clear, and instructions short enough for a tired evening. Print on plain A4; sit nearby for the first matching items, then let your child try independently.",
      "If ख and श look similar to your child, that is normal. Use the picture cues (खरगोश vs शेर), slow the tracing, and revisit the same two letters tomorrow instead of correcting harshly. Confidence builds the habit of Hindi practice.",
      "Sr KG or strong Jr KG readers can try the matching section with help; the missing-letter stretch is aimed at Class 1. For Nursery, start with swar tracing (अ आ इ ई) on our Nursery Hindi sample before moving to vyanjan.",
      "When you want another Hindi vyanjan printable with a new mix of letters or themes, open the Homework Buddy Android app, choose Class 1 + Hindi, and generate a fresh PDF — then print and practise the same way as this free sample.",
      "Tip: keep a small Hindi folder at home with this sheet plus one generated variation each week. Review yesterday’s letters for one minute before starting a new page.",
    ],
    faqs: [
      {
        question: "Where can I get a free Hindi vyanjan worksheet for Class 1?",
        answer:
          "Download the printable PDF on this page — it includes letter-picture matching, missing vyanjan, and tracing for क ख ग घ. Preview the image above first, then generate more Class 1 Hindi sheets in the Homework Buddy app on Google Play.",
      },
      {
        question: "My child confuses ख and श. Is that normal?",
        answer:
          "Very normal — several vyanjan look similar at first. Picture words (खरगोश vs शेर) and slow tracing help the shapes settle in.",
      },
      {
        question: "Can Jr KG or Sr KG children use this sheet?",
        answer:
          "Yes, with help. Sr KG children can usually manage the matching; the missing-letter section suits Class 1 best.",
      },
      {
        question: "Should we practise swar or vyanjan first?",
        answer:
          "Swar (अ आ इ ई…) usually come first in Nursery. By Class 1, children often practise both; use this vyanjan sheet when letter recognition of क ख ग is the goal.",
      },
      {
        question: "How long should Class 1 Hindi worksheet practice take?",
        answer:
          "About 15–20 minutes. Finish the matching and one more section if energy is good; save tracing for tomorrow if needed.",
      },
      {
        question: "Can I get more Hindi worksheets like this without searching every night?",
        answer:
          "Yes. Homework Buddy lets you generate printable Hindi / varnamala activities for Nursery to Class 3. Install from Google Play and create a new sheet whenever this sample feels familiar.",
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
    previewImagePath: "/worksheets/previews/class-3-monsoon-life-skills.png",
    previewImageAlt: "Class 3 monsoon life skills worksheet printable preview",
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
  {
    slug: "tracing-lines",
    classSlug: "nursery",
    name: "Tracing Lines Practice",
    title: "Nursery tracing worksheet — free printable pre-writing lines PDF",
    description:
      "Nursery homework tracing worksheet with straight, curvy, and zigzag paths for pencil grip practice.",
    activitySlug: "writing",
    themeSlug: "space",
    status: "published",
    pdfPath: "/worksheets/nursery-tracing-lines.pdf",
    previewImagePath: "/worksheets/previews/nursery-tracing-lines.png",
    previewImageAlt: "Nursery homework tracing worksheet printable free download preview",
    intro: [
      "Pre-writing lines help Nursery children build pencil control before letters. Trace slowly and praise steady hands.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Is tracing good nursery homework?",
        answer:
          "Yes — short tracing sheets are ideal nursery homework when sessions stay playful and under about 10 minutes.",
      },
    ],
  },
  {
    slug: "animals-matching",
    classSlug: "nursery",
    name: "Animals Matching Fun",
    title: "Nursery animals matching worksheet — free printable PDF",
    description:
      "Free Nursery matching worksheet: draw lines between animal friends to build attention and vocabulary.",
    activitySlug: "coloring",
    themeSlug: "animals",
    status: "published",
    pdfPath: "/worksheets/nursery-animals-matching.pdf",
    previewImagePath: "/worksheets/previews/nursery-animals-matching.png",
    previewImageAlt: "Nursery animals matching homework worksheet printable preview",
    intro: [
      "Matching worksheets teach focus without writing pressure. Say every animal name aloud while your child draws the line.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Can toddlers use this matching sheet?",
        answer:
          "With help, yes. Point to pictures together and let them finish one or two matches independently.",
      },
    ],
  },
  {
    slug: "letter-tracing-abc",
    classSlug: "jr-kg",
    name: "Letter Tracing ABC",
    title: "Jr KG letter tracing worksheet — printable ABC PDF",
    description:
      "Jr KG printable alphabet tracing sheet for A–H with grey guide letters and writing space.",
    activitySlug: "writing",
    themeSlug: "stories",
    status: "published",
    pdfPath: "/worksheets/jr-kg-letter-tracing-abc.pdf",
    previewImagePath: "/worksheets/previews/jr-kg-letter-tracing-abc.png",
    previewImageAlt: "Jr KG letter tracing ABC worksheet printable homework preview",
    intro: [
      "Large letters and short rows keep Jr KG writing calm. Say each letter sound while tracing.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Should Jr KG learn capital or small letters first?",
        answer:
          "Many Indian preschools start with capitals for recognition; follow your school’s sequence and keep practice short.",
      },
    ],
  },
  {
    slug: "numbers-count-ten",
    classSlug: "jr-kg",
    name: "Numbers Count to Ten",
    title: "Jr KG counting worksheet — numbers to 10 printable PDF",
    description:
      "Jr KG maths printable: count fruit pictures and circle the correct number up to ten.",
    activitySlug: "maths",
    themeSlug: "fruits",
    status: "published",
    pdfPath: "/worksheets/jr-kg-numbers-count-ten.pdf",
    previewImagePath: "/worksheets/previews/jr-kg-numbers-count-ten.png",
    previewImageAlt: "Jr KG numbers counting to ten worksheet printable preview",
    intro: [
      "Counting with pictures makes early maths concrete. Use fingers alongside the worksheet.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "My child skips numbers when counting. What helps?",
        answer:
          "Touch each picture once and count slowly together. Repeat the same sheet another day before moving on.",
      },
    ],
  },
  {
    slug: "patterns-colours",
    classSlug: "jr-kg",
    name: "Colour Patterns Play",
    title: "Jr KG patterns worksheet — printable colour patterns PDF",
    description:
      "Jr KG pattern worksheet: continue star–moon and vehicle patterns by colouring the next box.",
    activitySlug: "creative-thinking",
    themeSlug: "festivals",
    status: "published",
    pdfPath: "/worksheets/jr-kg-patterns-colours.pdf",
    previewImagePath: "/worksheets/previews/jr-kg-patterns-colours.png",
    previewImageAlt: "Jr KG colour patterns worksheet printable homework preview",
    intro: [
      "Patterns build early maths thinking. Say the sequence aloud before your child fills the blank.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Are patterns part of Jr KG homework?",
        answer:
          "Yes — simple AB patterns are common in junior kindergarten maths and school readiness work.",
      },
    ],
  },
  {
    slug: "cvc-reading-warm",
    classSlug: "sr-kg",
    name: "CVC Reading Warm-up",
    title: "Sr KG CVC reading worksheet — free printable phonics PDF",
    description:
      "Sr KG printable reading warm-up with simple CVC words and picture choices for phonics practice.",
    activitySlug: "reading",
    themeSlug: "animals",
    status: "published",
    pdfPath: "/worksheets/sr-kg-cvc-reading-warm.pdf",
    previewImagePath: "/worksheets/previews/sr-kg-cvc-reading-warm.png",
    previewImageAlt: "Sr KG CVC reading phonics worksheet printable free download",
    intro: [
      "CVC blending (cat, bus, sun) is a friendly Sr KG reading start. Sound out slowly, then choose the picture.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "What are CVC words?",
        answer:
          "Consonant–vowel–consonant words like cat and bus. They help children blend sounds into real words.",
      },
    ],
  },
  {
    slug: "writing-sight-words",
    classSlug: "sr-kg",
    name: "Sight Words Writing",
    title: "Sr KG sight words worksheet — printable writing PDF",
    description:
      "Sr KG writing worksheet: trace and write common sight words like the, and, is, to.",
    activitySlug: "writing",
    themeSlug: "stories",
    status: "published",
    pdfPath: "/worksheets/sr-kg-writing-sight-words.pdf",
    previewImagePath: "/worksheets/previews/sr-kg-writing-sight-words.png",
    previewImageAlt: "Sr KG sight words writing worksheet printable preview",
    intro: [
      "Sight words appear often in early readers. Trace, say, then write — keep the list short each night.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "How many sight words should Sr KG practise?",
        answer:
          "Three to six words in one sitting is enough. Mastery beats long lists.",
      },
    ],
  },
  {
    slug: "maths-add-within-10",
    classSlug: "sr-kg",
    name: "Maths Add Within 10",
    title: "Sr KG addition worksheet — printable sums within 10",
    description:
      "Sr KG maths printable with picture addition and sums within 10 for early number sense.",
    activitySlug: "maths",
    themeSlug: "space",
    status: "published",
    pdfPath: "/worksheets/sr-kg-maths-add-within-10.pdf",
    previewImagePath: "/worksheets/previews/sr-kg-maths-add-within-10.png",
    previewImageAlt: "Sr KG addition within 10 maths worksheet printable preview",
    intro: [
      "Picture addition bridges counting and written sums. Use counters if your child needs a hands-on step.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Is addition within 10 right for Sr KG?",
        answer:
          "Yes for many Sr KG maths programmes. Stay concrete with pictures before abstract digits alone.",
      },
    ],
  },
  {
    slug: "animals-coloring",
    classSlug: "sr-kg",
    name: "Animals Colouring Sheet",
    title: "Sr KG animals colouring worksheet — free printable PDF",
    description:
      "Sr KG printable animal colouring sheet for fine motor practice and vocabulary talk.",
    activitySlug: "coloring",
    themeSlug: "animals",
    status: "published",
    pdfPath: "/worksheets/sr-kg-animals-coloring.pdf",
    previewImagePath: "/worksheets/previews/sr-kg-animals-coloring.png",
    previewImageAlt: "Sr KG animals colouring worksheet printable homework preview",
    intro: [
      "Colouring is still valuable in Sr KG when you add talk: names, habitats, and colours.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Is colouring enough for Sr KG homework?",
        answer:
          "Use it as one calm option. Balance with short reading, writing, or maths sheets on other days.",
      },
    ],
  },
  {
    slug: "festival-writing",
    classSlug: "class-1",
    name: "Festival Writing Prompt",
    title: "Class 1 festival writing worksheet — printable sentences PDF",
    description:
      "Class 1 printable writing worksheet with festival sentence starters and a draw box.",
    activitySlug: "writing",
    themeSlug: "festivals",
    status: "published",
    pdfPath: "/worksheets/class-1-festival-writing.pdf",
    previewImagePath: "/worksheets/previews/class-1-festival-writing.png",
    previewImageAlt: "Class 1 festival writing worksheet printable preview",
    intro: [
      "Festival prompts make Class 1 writing personal. Accept invented spelling and celebrate complete thoughts.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Should I correct every spelling?",
        answer:
          "Not on the first draft. Praise the idea, then fix one or two spellings together if energy remains.",
      },
    ],
  },
  {
    slug: "animals-reading",
    classSlug: "class-2",
    name: "Animals Reading Passage",
    title: "Class 2 animals reading worksheet — printable comprehension PDF",
    description:
      "Class 2 reading worksheet with a short zoo passage and comprehension questions.",
    activitySlug: "reading",
    themeSlug: "animals",
    status: "published",
    pdfPath: "/worksheets/class-2-animals-reading.pdf",
    previewImagePath: "/worksheets/previews/class-2-animals-reading.png",
    previewImageAlt: "Class 2 animals reading comprehension worksheet printable preview",
    intro: [
      "Short passages with clear questions suit Class 2 evenings. Read once together, then answer independently.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "How long should Class 2 reading homework take?",
        answer:
          "About 15–20 minutes for one passage and questions is usually enough.",
      },
    ],
  },
  {
    slug: "transport-maths",
    classSlug: "class-2",
    name: "Transport Word Problems",
    title: "Class 2 transport maths worksheet — printable word problems",
    description:
      "Class 2 maths printable with transport-themed addition and subtraction word problems.",
    activitySlug: "maths",
    themeSlug: "transport",
    status: "published",
    pdfPath: "/worksheets/class-2-transport-maths.pdf",
    previewImagePath: "/worksheets/previews/class-2-transport-maths.png",
    previewImageAlt: "Class 2 transport maths word problems worksheet printable preview",
    intro: [
      "Word problems build reasoning. Underline numbers first, then choose the operation.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "My child guesses operations. How can I help?",
        answer:
          "Ask “are we putting together or taking away?” before writing the sum.",
      },
    ],
  },
  {
    slug: "festival-writing",
    classSlug: "class-2",
    name: "Festival Story Starter",
    title: "Class 2 festival writing worksheet — printable story PDF",
    description:
      "Class 2 creative writing worksheet: plan a festival story, then write on lined space.",
    activitySlug: "writing",
    themeSlug: "festivals",
    status: "published",
    pdfPath: "/worksheets/class-2-festival-writing.pdf",
    previewImagePath: "/worksheets/previews/class-2-festival-writing.png",
    previewImageAlt: "Class 2 festival story writing worksheet printable preview",
    intro: [
      "Planning who/where/what before writing helps Class 2 stories stay organised.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "How many sentences should Class 2 write?",
        answer:
          "Five to six clear sentences is a strong target for one homework sitting.",
      },
    ],
  },
  {
    slug: "stories-reading",
    classSlug: "class-3",
    name: "Stories Reading Challenge",
    title: "Class 3 stories reading worksheet — printable comprehension PDF",
    description:
      "Class 3 reading worksheet with a short story passage and full-sentence comprehension answers.",
    activitySlug: "reading",
    themeSlug: "stories",
    status: "published",
    pdfPath: "/worksheets/class-3-stories-reading.pdf",
    previewImagePath: "/worksheets/previews/class-3-stories-reading.png",
    previewImageAlt: "Class 3 stories reading comprehension worksheet printable preview",
    intro: [
      "Class 3 readers can answer in complete sentences. Ask for evidence from the passage.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Should answers be copied from the text?",
        answer:
          "Use the text for facts, but rephrase in your child’s own words when possible.",
      },
    ],
  },
  {
    slug: "maths-word-problems",
    classSlug: "class-3",
    name: "Maths Word Problems",
    title: "Class 3 maths word problems worksheet — free printable PDF",
    description:
      "Class 3 printable maths sheet with multi-step-friendly word problems and working space.",
    activitySlug: "maths",
    themeSlug: "transport",
    status: "published",
    pdfPath: "/worksheets/class-3-maths-word-problems.pdf",
    previewImagePath: "/worksheets/previews/class-3-maths-word-problems.png",
    previewImageAlt: "Class 3 maths word problems worksheet printable preview",
    intro: [
      "Working space matters as much as the answer. Circle numbers and underline the question first.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "How many word problems per night?",
        answer:
          "Two or three well-explained problems beat a long rushed list.",
      },
    ],
  },
  {
    slug: "space-creative",
    classSlug: "class-3",
    name: "Space Creative Thinking",
    title: "Class 3 space creative thinking worksheet — printable PDF",
    description:
      "Class 3 creative thinking printable with space prompts for invention and vocabulary.",
    activitySlug: "creative-thinking",
    themeSlug: "space",
    status: "published",
    pdfPath: "/worksheets/class-3-space-creative.pdf",
    previewImagePath: "/worksheets/previews/class-3-space-creative.png",
    previewImageAlt: "Class 3 space creative thinking worksheet printable preview",
    intro: [
      "Creative prompts stretch language after heavier academic nights. Wild ideas are welcome.",
      ...sharedParentTips,
    ],
    faqs: [
      {
        question: "Is creative thinking real homework?",
        answer:
          "Yes — planning, describing, and inventing build writing stamina and confidence alongside school tasks.",
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
