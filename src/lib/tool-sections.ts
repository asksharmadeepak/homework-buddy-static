/** Long-form sections for /tools/* pages — merged in getTool(). */

export type ToolSection = { heading: string; paragraphs: string[] };

export const toolSectionExtras: Record<string, ToolSection[]> = {
  "worksheet-generator": [
    {
      heading: "PDF libraries vs generators vs school photocopies",
      paragraphs: [
        "Random PDF websites give you volume, not fit. Your child might get Class 3 word problems when they are in Jr KG, or tiny fonts that need a tutor to explain. School photocopies are trusted but static — the same addition drill every week.",
        "A class-aware worksheet generator lets you choose Nursery through Class 3, pick reading or maths, add a theme your child already likes, and print something finishable in one sitting. You trade endless scrolling for one calm decision.",
        "Neither replaces school or conversation. Generators work best when you preview the page, sit nearby for the first five minutes, and stop while energy is still good.",
      ],
    },
    {
      heading: "Checklist: is this sheet age-fit?",
      paragraphs: [
        "Can your child read the instructions with at most one sentence from you? Are writing lines large enough for their grip? Is there white space, or a wall of 40 identical sums?",
        "Does the theme match something they care about this week — animals, festivals, transport — so the sheet feels familiar?",
        "Can it realistically finish in 10–20 minutes at your child’s current pace? If not, print half a page or pick an easier class band.",
      ],
    },
    {
      heading: "When an app beats another hour of searching",
      paragraphs: [
        "It is 8:15 p.m., tuition just ended, and tomorrow’s school notebook says ‘practice reading.’ Searching ‘Class 1 reading worksheet PDF’ returns dozens of unrelated files.",
        "Homework Buddy on Android maps class + activity + theme + time into one print-ready PDF. You preview on the phone, print on A4, and start — same quality as the free samples on this site.",
        "Use the web samples here to judge layout and difficulty; use the app when you need a fresh variation without opening ten browser tabs.",
      ],
    },
  ],
  "reading-generator": [
    {
      heading: "What reading practice should look like by class",
      paragraphs: [
        "Nursery and Jr KG: picture talk, matching words to images, listening while you read aloud — not long paragraphs.",
        "Class 1: short sentences, 3–4 comprehension questions, familiar vocabulary (animals, family, school).",
        "Class 2–3: one short paragraph, mix of recall and one ‘why’ question, finishable in 15–20 minutes after a long school day.",
      ],
    },
    {
      heading: "Sample question types that help (not test)",
      paragraphs: [
        "Who is in the story? What happened first? Which word tells us where? These concrete prompts build confidence before exam-style inference.",
        "Avoid sheets with ten blank lines and no passage context — young readers need the story on the same page.",
        "Read aloud together once; let your child answer orally before writing. That order cuts meltdowns and improves retention.",
      ],
    },
    {
      heading: "Red flags: when a reading sheet is too hard",
      paragraphs: [
        "More than two new vocabulary words per line without pictures. Passages longer than your child’s attention span. Questions that require knowledge the passage never mentions.",
        "If your child guesses randomly, step down a class band or switch to picture-based sheets for a week. Confidence recovers faster than forcing grade-level text.",
      ],
    },
  ],
  "math-worksheet-generator": [
    {
      heading: "Concrete before abstract",
      paragraphs: [
        "Nursery and Jr KG need counting objects, matching numerals, and patterns — not columns of bare sums.",
        "Class 1 benefits from pictures beside numbers (fruits, buses, stars) before jumping to mental maths.",
        "Class 2–3 can handle word problems if one problem is explained together first; three well-understood problems beat ten rushed ones.",
      ],
    },
    {
      heading: "Scaffolding word problems at home",
      paragraphs: [
        "Read the story aloud. Circle the numbers. Ask: are we putting together or taking away?",
        "Draw tallies or use buttons from the kitchen before writing the final answer.",
        "Write the answer sentence together once (‘There are 7 apples’) so school notebook format feels familiar.",
      ],
    },
    {
      heading: "Indian evening maths without coaching-centre pressure",
      paragraphs: [
        "Many families balance school, tuition, and travel time. One maths printable of 15 minutes supports school — it does not need to replicate a full tuition packet.",
        "Match difficulty to today’s energy: fluency only on tired days; one story problem when focus is better.",
        "Themes like transport or monsoon make story sums feel local, not imported from a generic workbook.",
      ],
    },
  ],
  "homework-planner": [
    {
      heading: "Sample weekly rhythm — Nursery",
      paragraphs: [
        "Monday: tracing or colouring (10 min). Wednesday: picture talk / oral counting. Friday: optional Hindi swar play with tracing sheet.",
        "Skip printable nights when guests visit or your child naps late — outdoor play counts as learning too.",
      ],
    },
    {
      heading: "Sample weekly rhythm — Class 1",
      paragraphs: [
        "Monday: reading sample or school reader. Tuesday: school homework only. Wednesday: maths printable. Thursday: writing or Hindi. Friday: creative/colouring cool-down.",
        "Keep one folder per month of completed favourites so progress feels visible without a star chart war.",
      ],
    },
    {
      heading: "Sample weekly rhythm — Class 3",
      paragraphs: [
        "Plan four 20-minute sessions, not seven. Rotate reading comprehension, maths word problems, writing, and one life-skills or creative sheet.",
        "During festival weeks, swap worksheets for festival-themed colouring or short family journal prompts — routine flexes, it does not break.",
      ],
    },
    {
      heading: "When to skip the planner and rest",
      paragraphs: [
        "Fever, exam week at school, or a child who says ‘I hate homework’ three nights in a row — drop optional printables for 2–3 days.",
        "Return with one easy win: a favourite theme sheet they already finished once. Momentum matters more than the chart.",
      ],
    },
  ],
};
