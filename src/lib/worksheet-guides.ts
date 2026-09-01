import type { FaqItem } from "./worksheet-guides-types";

export type WorksheetGuideExtra = {
  howTo: string[];
  sheetContents: string[];
  extraIntro: string[]; // 4-6 additional unique paragraphs per sheet
  extraFaqs: FaqItem[]; // 3-5 additional FAQs per sheet
};

export const worksheetGuideExtras: Record<string, WorksheetGuideExtra> = {
  "nursery/tracing-lines": {
    howTo: [
      "Print on A4 with no scaling — lines should feel wide enough for a thick crayon or short pencil.",
      "Let your child pick the colour; say “slow and steady” before the first straight line.",
      "Demo one path with your finger in the air, then one on paper — stop after that if they want to try alone.",
      "Praise grip and focus, not perfection. Wobbly lines are normal at Nursery age.",
      "Stop after 8–10 minutes or when the hand looks tired — save zigzags for another day.",
    ],
    sheetContents: [
      "Straight horizontal tracing paths with start dots",
      "Curvy wave lines for smooth wrist movement",
      "Zigzag paths for direction changes",
      "Large spacing suited to Nursery pencil grip",
    ],
    extraIntro: [
      "Age fit: Best for Nursery (roughly 3–4 years) when your child can sit for a few minutes and hold a crayon with a whole-hand or emerging tripod grip. If they still fist-grip everything, that is fine — tracing builds the habit before letter worksheets.",
      "Ten-minute session script: Snack first, then say, “We are training our pencil like a little car on a road.” Trace one line together, let them do two alone, clap once, and stop. In many Indian homes this fits between bath time and dinner without feeling like ‘real homework’.",
      "Common mistakes: Pressing so hard the crayon snaps; racing to the end; skipping curves because zigzags feel hard. Another parent trap is printing two pages at once — one side is enough for Nursery.",
      "When to stop: Put the sheet away if shoulders hunch, the free hand stops stabilising the paper, or tears start. A calm half-page today beats a full page with frustration.",
      "Indian context tip: If your playgroup uses cursive-style pre-writing, this sheet still helps — the paths are neutral. Pair with Hindi swar tracing on alternate days rather than stacking both on one tired evening.",
    ],
    extraFaqs: [
      {
        question: "Should Nursery children use pencil or crayon for tracing?",
        answer:
          "Start with a thick crayon or wax crayon — less pressure, less frustration. Move to a short pencil when lines stay mostly on the path for two sessions.",
      },
      {
        question: "My child traces outside the lines. Should I reprint?",
        answer:
          "No. Wobble means the hand is learning. Use praise for effort; repeat the same sheet after a day or two if they enjoy it.",
      },
      {
        question: "How often should we do tracing homework in Nursery?",
        answer:
          "Two or three short sessions a week is plenty alongside free drawing and outdoor play.",
      },
      {
        question: "Can I laminate this tracing sheet for reuse?",
        answer:
          "Yes — a sleeve and whiteboard marker works well for car rides or balcony time before monsoon evenings indoors.",
      },
    ],
  },

  "nursery/festival-coloring-fun": {
    howTo: [
      "Talk about one festival your family celebrates — name two colours you often see (diyas, rangoli, flags, kites).",
      "Let your child choose crayons; avoid correcting colour choices on a creative sheet.",
      "Colour one small area together, then let them finish one whole picture independently.",
      "Ask one question: “What sound do we hear at this festival?” to build language, not marks.",
      "Stop when the page is mostly filled or when focus fades — 10 minutes is the target.",
    ],
    sheetContents: [
      "Festival-themed outline pictures with bold borders",
      "Large open spaces for crayon filling",
      "Simple shapes suited to Nursery fine motor control",
      "No tiny mandala-style details that tire young hands",
    ],
    extraIntro: [
      "Age fit: Ideal for Nursery children who enjoy pictures but are not ready for letter formation. Also works for younger Sr KG siblings who need a calm warm-up before harder homework.",
      "Ten-minute session script: “Let us make the festival bright.” Point to one picture, name the festival object, pick two crayons, set a gentle timer for eight minutes, and end with showing the page to another family member.",
      "Common mistakes: Insisting on ‘correct’ festival colours; leaving a child alone too early and finding scribbles in two seconds; combining this with a long TV show right before bed so attention is already gone.",
      "When to stop: If crayons break from pressure, or your child starts colouring the table, pause. Offer water and try a single small section tomorrow.",
      "Indian context tip: Tie talk to your child’s lived experience — Diwali diyas in the colony, Eid mehndi patterns they have seen, Pongal pots, or Independence Day flags at school assembly. The worksheet is a hook for conversation, not a colouring contest.",
    ],
    extraFaqs: [
      {
        question: "Which festivals does this colouring sheet cover?",
        answer:
          "The art is general festival joy — lamps, decorations, and celebration scenes. Name whichever festival your family observes while you colour.",
      },
      {
        question: "Is colouring enough homework for Nursery?",
        answer:
          "For one evening, yes. Balance the week with tracing, matching, or picture talk so skills stay varied.",
      },
      {
        question: "My child eats crayons. What can I do?",
        answer:
          "Switch to large washable crayons, supervise closely, or use finger painting on a separate day instead.",
      },
      {
        question: "Should we stay inside the lines?",
        answer:
          "At Nursery, staying inside lines is a bonus, not the goal. Bold filling and naming colours matter more.",
      },
    ],
  },

  "nursery/hindi-swar-tracing": {
    howTo: [
      "Say each swar aloud twice before tracing — अ, आ, इ, ई, उ, ऊ with a familiar word (अनार, आम).",
      "Trace one letter with your finger in the air, then let your child trace on the sheet.",
      "Use the find-the-letter game only after at least two swar are traced — keep it playful.",
      "If your child mixes Hindi and English mid-session, stay calm; many urban Nursery children code-switch daily.",
      "Finish after six letters or 10 minutes — repeat tomorrow rather than pushing through tired tracing.",
    ],
    sheetContents: [
      "Large trace-over swar: अ, आ, इ, ई, उ, ऊ",
      "Dotted guides for stroke direction",
      "Circle-the-letter swar recognition game",
      "Spacing sized for early Hindi pre-writing",
    ],
    extraIntro: [
      "Age fit: Nursery and early Jr KG in Hindi-medium or bilingual homes, or any child beginning varnamala before vyanjan. If English ABC tracing is still hard, do this sheet on alternate days, not the same night.",
      "Ten-minute session script: “Pehle awaaz, phir ungli, phir pencil.” Chant one swar, trace together, child traces alone, tick one find-the-letter item, sticker or high-five, done.",
      "Common mistakes: Correcting every stroke while the child is still forming grip; comparing to cousins who ‘already know Hindi’; skipping speech and only tracing silently.",
      "When to stop: When the child reverses letters from fatigue, or refuses to say the sound aloud. Stop mid-row — varnamala is a marathon across months, not one evening.",
      "Indian context tip: Point out swar on biscuit packets, auto-rickshaw stickers, or school gate boards on the walk home. The worksheet anchors what they already see in the neighbourhood.",
    ],
    extraFaqs: [
      {
        question: "Hindi medium or English medium — who should use this sheet?",
        answer:
          "Both. English-medium Nursery children often meet Hindi in conversation class; this sheet supports that without exam pressure.",
      },
      {
        question: "Should we teach matras on the same day?",
        answer:
          "Not yet. Solid swar shapes and sounds first; matras come once अ–औ feel familiar.",
      },
      {
        question: "My child knows English letters better. Is Hindi too early?",
        answer:
          "Not too early if sessions stay short. Separate Hindi and English tracing on different days to reduce mix-ups.",
      },
      {
        question: "Do we need a Hindi pencil grip trainer?",
        answer:
          "No special tool — a short pencil and calm pacing beat gadgets for Nursery swar practice.",
      },
    ],
  },

  "nursery/animals-matching": {
    howTo: [
      "Name every animal on the page before drawing any line — use English or your home language.",
      "Start with one match you are sure about; let your child find the pair.",
      "If lines cross, celebrate the match first — neatness comes later.",
      "Add one fact: “Cow gives milk” or “Elephant has a trunk” to build vocabulary.",
      "Stop after all pairs or 10 minutes, whichever comes first.",
    ],
    sheetContents: [
      "Animal picture pairs for line matching",
      "Clear visual differences between similar animals",
      "Single-page layout for short Nursery attention spans",
      "No reading required — picture-only task",
    ],
    extraIntro: [
      "Age fit: Nursery children who can follow “same” and “different” but are not ready to write animal names. Toddlers can join with heavy pointing help.",
      "Ten-minute session script: “Find the friend that looks the same.” You model one match, child does two, you do one together, child finishes if eager — then put crayons away.",
      "Common mistakes: Drawing lines before naming pictures; fixing every wobbly line; turning matching into a speed race with siblings.",
      "When to stop: When your child guesses randomly without looking, or when frustration rises because two animals look alike (goat vs deer) — talk it through and pause.",
      "Indian context tip: Connect animals to stories your child knows — Panchatantra, jungle safari books, or cows and monkeys seen on the road. Matching feels easier when names are familiar.",
    ],
    extraFaqs: [
      {
        question: "Can we do this sheet in Hindi only?",
        answer:
          "Yes. Say animal names in Hindi (गाय, हाथी, बिल्ली) while matching — the task is visual, not language-locked.",
      },
      {
        question: "My child matches wrong pairs confidently. What helps?",
        answer:
          "Cover one column and ask, “Where is the other tiger?” Slow scanning beats rushing across the page.",
      },
      {
        question: "Is matching real homework or just play?",
        answer:
          "It is both — attention, visual discrimination, and vocabulary are core Nursery skills.",
      },
      {
        question: "Should we colour after matching?",
        answer:
          "Optional. If energy is good, colour one animal; if not, stop after matching.",
      },
    ],
  },

  "jr-kg/letter-tracing-abc": {
    howTo: [
      "Review A–H sounds quickly — say the letter name and one sound (/a/ for A if your school uses phonics).",
      "Trace one letter together with a finger, then pencil, then let your child try the next alone.",
      "Keep rows short: two letters well traced beat eight rushed ones.",
      "If formation differs from school charts, follow your teacher’s model on the next school day.",
      "Stop at 10–12 minutes or after H — repeat A–D tomorrow if grip tired.",
    ],
    sheetContents: [
      "Capital letters A through H with grey guide letters",
      "Dedicated writing space beside each traced letter",
      "Large line height for Jr KG hand control",
      "Story-themed decorative border (low distraction)",
    ],
    extraIntro: [
      "Age fit: Jr KG (roughly 4–5 years) when children recognise some letters and can trace with occasional help. Early Sr KG can use it as revision if formation is still shaky.",
      "Ten-minute session script: “Letter of the day plus two friends.” Pick today’s focus letter, trace it twice, do one neighbour letter, free-write one in the air, sticker, done.",
      "Common mistakes: Demanding perfect slant on day one; mixing capital and small letters on the same night; erasing so much the paper tears.",
      "When to stop: When letters shrink to pin-size, or when your child invents wild letter names to escape — laugh lightly, save the sheet, try tomorrow.",
      "Indian context tip: Many Jr KG programmes introduce capitals first for recognition boards and name tags. If your ICSE/CBSE preschool uses small letters first, ask the class teacher which form to prioritise on this sheet.",
    ],
    extraFaqs: [
      {
        question: "Why only A–H on this worksheet?",
        answer:
          "Short sets match Jr KG stamina. Master this chunk before printing I–P from another sheet or the app.",
      },
      {
        question: "My child writes mirror letters. Is that a problem?",
        answer:
          "Common at 4–5. Model slowly left-to-right; mirror writing often fades with practice, not scolding.",
      },
      {
        question: "Should we use a four-line notebook instead?",
        answer:
          "This PDF is for guided tracing first. Move to notebook lines once two letters stay on the path most of the time.",
      },
      {
        question: "How does this fit with Hindi varnamala homework?",
        answer:
          "Alternate nights — English tracing one day, Hindi swar or vyanjan another — to reduce letter confusion.",
      },
    ],
  },

  "jr-kg/fruits-writing-words": {
    howTo: [
      "Point to each fruit picture and say the word — mango, apple, banana — before writing.",
      "Trace the dotted word once together; child traces once alone if ready.",
      "Accept invented spelling in free space if school has not started formal spelling yet.",
      "Keep pencil short; fruit words are short on purpose for Jr KG wrists.",
      "Stop after three fruits or 10 minutes — finish the rest another evening.",
    ],
    sheetContents: [
      "Fruit picture prompts with traceable word labels",
      "Dotted-line word tracing for common fruits",
      "Blank writing space beside each fruit",
      "Large print friendly to early writers",
    ],
    extraIntro: [
      "Age fit: Jr KG children linking pictures to written words — especially good if your child already names fruits at the market with you.",
      "Ten-minute session script: “Market list time.” Pick one fruit you ate today, say the word, trace, try one letter alone, draw a tiny leaf if they want, stop.",
      "Common mistakes: Insisting on perfect spelling before phonics is taught; skipping the picture talk; using a pen that cannot be erased on first attempts.",
      "When to stop: When writing collapses to scribbles, or when they refuse to hold the pencil — switch to fruit naming game and retry tomorrow.",
      "Indian context tip: Use local names — aam, kela, anar — alongside English if your school uses both. The worksheet theme supports bilingual fruit vocabulary common in Indian kitchens.",
    ],
    extraFaqs: [
      {
        question: "My child can say the fruit but not write. Normal?",
        answer:
          "Very normal. Oral naming plus tracing comes before independent writing in Jr KG.",
      },
      {
        question: "Should we translate fruit names to Hindi?",
        answer:
          "Optional and helpful. Saying आम while tracing ‘mango’ builds bilingual links without extra worksheets.",
      },
      {
        question: "Can Sr KG use this as easy homework?",
        answer:
          "Yes as a warm-up, but Sr KG may need longer words — try sight-word sheets for more challenge.",
      },
      {
        question: "What if my child is left-handed?",
        answer:
          "Sit opposite so they mirror you, keep paper slightly rotated, and praise comfort over uniform grip.",
      },
    ],
  },

  "jr-kg/numbers-count-ten": {
    howTo: [
      "Warm up by counting aloud to 10 with fingers — no worksheet yet for one minute.",
      "Touch each fruit picture once while counting; avoid skipping or double-tapping.",
      "Circle the numeral only after counting out loud together.",
      "If unsure between two numbers, recount slowly — do not guess for them.",
      "Stop after four items or 10 minutes; repeat counting games at dinner.",
    ],
    sheetContents: [
      "Fruit picture groups to count (1–10)",
      "Numeral choices to circle for each group",
      "Visual supports for one-to-one correspondence",
      "Single-page Jr KG maths layout",
    ],
    extraIntro: [
      "Age fit: Jr KG maths when children count orally but still confuse 6 and 9 or skip ‘seven’. Strong Nursery counters may enjoy it with help.",
      "Ten-minute session script: “Touch and tell.” Count one row together, child counts the next alone, you check by touching together, high-five, stop before the last row if tired.",
      "Common mistakes: Counting too fast; pointing without touching; circling the biggest numeral instead of the correct count.",
      "When to stop: When your child shouts random numbers to finish — pause, do two items orally off-sheet, return only if calm.",
      "Indian context tip: Count rotis on the plate, stairs in the building, or cricket balls in the gully — then come back to the worksheet so numbers feel lived-in, not abstract.",
    ],
    extraFaqs: [
      {
        question: "My child counts in Hindi. Is that okay?",
        answer:
          "Yes. One-to-one counting matters more than which language you use. You can say the numeral in English when circling if school expects English maths.",
      },
      {
        question: "Should we use rajma or buttons as counters?",
        answer:
          "Great idea for tricky rows — physical counters first, worksheet second.",
      },
      {
        question: "Is counting to 10 enough for Jr KG?",
        answer:
          "For many programmes yes. Some schools push to 20 — use this sheet to solidify 1–10 before jumping ahead.",
      },
      {
        question: "What if they circle wrong but counted right aloud?",
        answer:
          "Celebrate the oral count; fix the circle gently. The mismatch usually means numeral recognition, not counting skill.",
      },
    ],
  },

  "jr-kg/patterns-colours": {
    howTo: [
      "Read the pattern aloud: “star, moon, star, moon — what comes next?”",
      "Let your child predict before colouring — prediction matters more than hue.",
      "Colour one pattern together, then attempt the vehicle pattern independently.",
      "Name colours in English or Hindi consistently within one session.",
      "Stop after two complete patterns or 10 minutes.",
    ],
    sheetContents: [
      "Star–moon repeating colour pattern row",
      "Vehicle-themed AB pattern continuation",
      "Empty boxes for the child to complete",
      "Festival-linked visuals for familiar context",
    ],
    extraIntro: [
      "Age fit: Jr KG early algebra thinking — children who know basic colours and can listen to a short sequence. Nursery children may only do the first pattern with help.",
      "Ten-minute session script: “Pattern detective.” Clap a sound pattern (tap-tap-clap), transfer to the sheet, colour the missing box, explain why, done.",
      "Common mistakes: Colouring without chanting the sequence; choosing favourite colour instead of pattern colour; doing patterns when the child is hungry.",
      "When to stop: When they colour randomly to finish — erase is optional; better to redo tomorrow with clapping first.",
      "Indian context tip: Point to rangoli repeats, alternating diya colours, or auto-rickshaw stripe patterns on the way to tuition — patterns are everywhere in Indian visual culture.",
    ],
    extraFaqs: [
      {
        question: "Must pattern colours match the printed key exactly?",
        answer:
          "Logic matters most. If your child uses red-blue consistently, accept it even when the sample shows yellow.",
      },
      {
        question: "Are patterns on school exams for Jr KG?",
        answer:
          "Many CBSE/ICSE preschool assessments include simple AB patterns — this sheet mirrors that gentle demand.",
      },
      {
        question: "My child wants to draw new shapes instead. Okay?",
        answer:
          "After finishing one pattern, bonus drawing is fine. Do not skip the repeat rule first.",
      },
      {
        question: "How is this different from maths counting sheets?",
        answer:
          "Patterns train prediction and order — they complement counting but do not replace number practice.",
      },
    ],
  },

  "sr-kg/cvc-reading-warm": {
    howTo: [
      "Warm up with three sounds: /c/ /a/ /t/ — blend slowly, no rushing.",
      "Read each CVC word aloud; child repeats, then picks the matching picture.",
      "If blending fails, say the whole word once, then split again — avoid leaving them stuck.",
      "Keep score informal: “Three stars today” for effort, not only correct picks.",
      "Stop after 8–10 words or 10 minutes — phonics fatigues Sr KG brains quickly.",
    ],
    sheetContents: [
      "Simple CVC words with animal-themed pictures",
      "Picture choice panels for each word",
      "Short list suited to Sr KG phonics stamina",
      "Printable phonics warm-up layout (not a full reader)",
    ],
    extraIntro: [
      "Age fit: Sr KG (roughly 5–6 years) when letter sounds are emerging and school may use phonics readers. Early Class 1 can use it as a confidence warm-up.",
      "Ten-minute session script: “Sound slide.” Parent says first sound, child says middle, parent says last, blend together, point to picture, repeat with next word, stop while still smiling.",
      "Common mistakes: Teaching letter names instead of sounds; correcting accent harshly; doing CVC after a long Hindi-only day when English sounds feel foreign.",
      "When to stop: When blending turns to guessing from first letter only (“cat” because of /c/). Pause and play oral blending with household words (cup, bus).",
      "Indian context tip: Many Sr KG children learn English phonics alongside Hindi akshar. Keep English sessions short and separate from Hindi reading to reduce sound mixing.",
    ],
    extraFaqs: [
      {
        question: "My child reads Hindi fluently but struggles with CVC. Why?",
        answer:
          "Different systems — Hindi syllables vs English blending. Short English sessions build the second track without rushing.",
      },
      {
        question: "Should we use this if school teaches whole-word reading?",
        answer:
          "Yes as support — blending still helps new words. Follow school method first, use this as practice.",
      },
      {
        question: "How many CVC words per night?",
        answer:
          "Six to eight well-blended words beat twenty rushed ones.",
      },
      {
        question: "Can we do this sheet without printing?",
        answer:
          "Preview on phone and cover words with a slip — but printing lets the child point independently.",
      },
    ],
  },

  "sr-kg/writing-sight-words": {
    howTo: [
      "Introduce only three sight words per sitting — the, and, is, to appear on the sheet but rotate focus.",
      "Trace with finger, trace with pencil, write once in the box — that sequence builds memory.",
      "Say each word in a short sentence: “The cat is here.”",
      "Do not drill more than six total words in one evening.",
      "Stop when handwriting slumps — sight words return tomorrow.",
    ],
    sheetContents: [
      "Trace-and-write rows for common sight words",
      "Words such as the, and, is, to",
      "Extra writing lines for repetition",
      "Story-themed framing for Sr KG engagement",
    ],
    extraIntro: [
      "Age fit: Sr KG writers who know some letter sounds and are beginning English readers in Indian English-medium preschools.",
      "Ten-minute session script: “Word of the evening.” Pick one sight word, trace together, write in air, write on sheet, use it in one spoken sentence about dinner, stop.",
      "Common mistakes: Treating sight words as spelling tests; writing whole lists from memory too early; comparing to children who memorised Oxford lists over summer.",
      "When to stop: When letters reverse in every word, or when tears appear over ‘the’ — sight words need repetition across weeks, not one heroic night.",
      "Indian context tip: Sight words appear on school word walls and assembly charts. Photograph your child’s classroom word list if allowed — align home practice with school order.",
    ],
    extraFaqs: [
      {
        question: "Should Sr KG memorise spelling or recognise by sight?",
        answer:
          "Recognition first — many sight words break phonics rules. Spelling precision grows in Class 1.",
      },
      {
        question: "My child writes ‘teh’ for the. Fix every time?",
        answer:
          "Model once calmly per session. Over-correction kills willingness to write.",
      },
      {
        question: "Can we add Hindi high-frequency words too?",
        answer:
          "Yes on different days — keep scripts separate within one sitting to avoid script mix-ups on the same page.",
      },
      {
        question: "How does this connect to reading homework?",
        answer:
          "Pair with five minutes of picture book reading pointing out the same sight words in sentences.",
      },
    ],
  },

  "sr-kg/maths-add-within-10": {
    howTo: [
      "Lay out five buttons or lentils before opening the sums — concrete first.",
      "Read each picture addition: “Two rockets plus three rockets — how many?”",
      "Child writes the numeral only after showing the total with objects.",
      "If fingers help, use fingers openly — no shame in Sr KG maths.",
      "Stop after four sums or 10 minutes; save remaining for a fresh morning.",
    ],
    sheetContents: [
      "Picture-based addition scenes (space theme)",
      "Sums within 10 with write-in answers",
      "Visual groups to count before adding",
      "Sr KG-friendly number size",
    ],
    extraIntro: [
      "Age fit: Sr KG when counting is stable to 10 and school introduces ‘plus’ language. Jr KG children may count pictures but need help with the plus sign.",
      "Ten-minute session script: “Make a group, make another, push together, count all, write number, done for this sum.” One sum modelled, one together, one solo, stop.",
      "Common mistakes: Jumping to abstract digits without pictures; teaching vertical carry too early; doing maths on an empty stomach after long daycare.",
      "When to stop: When your child adds by shouting the bigger number only (2+5=5). Reset with objects off the page.",
      "Indian context tip: Use tiffin boxes, idlis, or cricket runs in gully games to rehearse ‘total’ before the worksheet — addition should feel like everyday joining, not exam trickery.",
    ],
    extraFaqs: [
      {
        question: "Should Sr KG learn subtraction on the same sheet?",
        answer:
          "This sample is addition only. Introduce subtraction on a separate day once addition within 10 feels steady.",
      },
      {
        question: "Is memorising answers to 10 expected now?",
        answer:
          "Some schools start fluency in Sr KG; others in Class 1. Pictures first, speed later.",
      },
      {
        question: "My child writes numerals backwards. Worry?",
        answer:
          "Common at 5–6. Model correct numerals on a separate strip; keep sessions short.",
      },
      {
        question: "Can we use this as Class 1 revision?",
        answer:
          "Brief warm-up only — Class 1 usually needs number bonds and word problems beyond picture sums.",
      },
    ],
  },

  "sr-kg/animals-coloring": {
    howTo: [
      "Name each animal and one habitat clue before colouring — “fish lives in water.”",
      "Pick three crayons max so choices do not overwhelm.",
      "Colour one animal fully, talk about it, then offer a second if focus holds.",
      "Ask Sr KG stretch question: “Which animal is biggest on the page?”",
      "Stop at 10 minutes even if white space remains — colouring quality beats coverage.",
    ],
    sheetContents: [
      "Multiple animal outlines for colouring",
      "Bold lines suitable for Sr KG crayon control",
      "Space for simple background scribbles",
      "Vocabulary-friendly animal set",
    ],
    extraIntro: [
      "Age fit: Sr KG fine motor and science talk — still valid when academic pressure rises. Useful calm homework before harder writing nights.",
      "Ten-minute session script: “Zoo ticket.” Pretend each coloured animal gets a ticket, name it, colour, one fact, stop while the ‘zoo visit’ still feels fun.",
      "Common mistakes: Treating Sr KG colouring as ‘baby work’ and skipping talk; demanding realistic colours; combining with TV in the background.",
      "When to stop: When crayon pressure rips paper, or when your child rushes solid scribbles — pause and resume with one small area tomorrow.",
      "Indian context tip: Link to National Zoo visits, Jim Corbett stories, or neighbourhood dogs and cows — Sr KG children connect better when animals are not only foreign cartoon species.",
    ],
    extraFaqs: [
      {
        question: "Is colouring still homework in Sr KG?",
        answer:
          "Yes — grip strength and focus still develop through careful colouring at 5–6.",
      },
      {
        question: "Should we label animal names in English or Hindi?",
        answer:
          "Either or both. Writing labels under animals is a nice Sr KG stretch after colouring.",
      },
      {
        question: "Can this replace reading practice?",
        answer:
          "No — use it on lighter evenings; keep CVC or story reading on other days.",
      },
      {
        question: "My child finishes in two minutes. Too easy?",
        answer:
          "Add talk tasks: sort animals by land/water, or draw one more animal on the back.",
      },
    ],
  },

  "class-1/animals-reading-adventure": {
    howTo: [
      "Preview title and pictures — predict what animals will appear before reading.",
      "Read the passage once aloud; child follows with finger.",
      "Child reads second time alone or whisper-reads if tired.",
      "Answer questions in full phrases, not one-word grunts.",
      "Stop after passage plus questions — about 15 minutes max for Class 1.",
    ],
    sheetContents: [
      "Short animals-themed reading passage",
      "Comprehension questions with write-in space",
      "Class 1 sentence length and vocabulary",
      "Adventure framing to hold interest",
    ],
    extraIntro: [
      "Age fit: Class 1 readers (roughly 6–7 years) who handle simple sentences and some sight words. Strong Sr KG readers can try with support; struggling Class 2 may use it as fluency practice.",
      "Ten-minute session script (stretch to 15 if engaged): “Picture walk, read together, read alone, question one together, questions two–three solo, read favourite sentence aloud to dad, done.”",
      "Common mistakes: Answering questions without re-reading; parents reading the whole page while the child zones out; translating every word to Hindi and breaking flow.",
      "When to stop: When your child guesses answers from pictures only — close the sheet, oral recap tomorrow, then retry questions.",
      "Indian context tip: Compare passage animals to local ones — monkeys at temple, cows at the corner, parrots in cages — so ‘adventure’ feels connected to their world, not only African savannah posters.",
    ],
    extraFaqs: [
      {
        question: "Should Class 1 reading homework be silent or aloud?",
        answer:
          "Whisper or soft aloud is best — you hear miscues early. Silent reading grows later in Class 2–3.",
      },
      {
        question: "My child reads in a sing-song voice. Fix it?",
        answer:
          "Model natural pacing on one sentence; avoid long lectures on expression in one sitting.",
      },
      {
        question: "Can we do questions in Hindi if English answers are hard?",
        answer:
          "Discuss in Hindi if needed, but try one English answer sentence — schools usually expect English written responses.",
      },
      {
        question: "How often should we print new animal reading sheets?",
        answer:
          "When this passage feels memorised, generate a fresh animals reading PDF in Homework Buddy.",
      },
    ],
  },

  "class-1/transport-maths-count": {
    howTo: [
      "Look at vehicles first — name bus, auto, train to activate interest.",
      "Count each group twice if answers disagree — transport pictures can overlap visually.",
      "Write numerals neatly in the boxes provided; say the number aloud when writing.",
      "For simple sums, use fingers or draw dots in margin if school allows.",
      "Stop after the counting section plus one sum row — 12–15 minutes for Class 1.",
    ],
    sheetContents: [
      "Transport picture groups for counting",
      "Simple addition tied to vehicle themes",
      "Write-in numeral spaces",
      "Class 1 number range appropriate to early primary",
    ],
    extraIntro: [
      "Age fit: Class 1 maths when counting and early addition are school topics. Nursery/Jr KG may count pictures only with heavy support.",
      "Ten-minute session script: “Traffic count.” Pretend you are counting vehicles at the signal — do one row on the sheet the same way, write numbers, one sum, stop.",
      "Common mistakes: Rushing because ‘it is just counting’; skipping the talk step; mixing up 12 and 21 when writing numerals.",
      "When to stop: When your child adds by counting everything as ‘one’ — take a walk, count real autos, return to the sheet briefly or tomorrow.",
      "Indian context tip: Use school-bus counting, metro coaches, or family scooter trips — transport maths lands when children have ridden what they count.",
    ],
    extraFaqs: [
      {
        question: "Is this too easy for Class 2?",
        answer:
          "Usually yes — Class 2 needs word problems. Use this only as a five-minute warm-up if confidence is low.",
      },
      {
        question: "Should we use Hindi number names while writing English numerals?",
        answer:
          "Fine for counting aloud; write numerals as school expects (typically 1, 2, 3).",
      },
      {
        question: "My child wants to colour vehicles instead. Allow?",
        answer:
          "After maths is done, optional colouring keeps motivation without delaying counting.",
      },
      {
        question: "How many problems per Class 1 maths night?",
        answer:
          "One worksheet section plus mental maths chat at dinner beats multiple dense pages.",
      },
    ],
  },

  "class-1/hindi-vyanjan-practice": {
    howTo: [
      "Open with two picture words: खरगोश, शेर — say vyanjan first, word second.",
      "Matching section: child explains why line is drawn — builds proof, not guessing.",
      "Missing-letter row: cover picture words, reveal if stuck after two attempts.",
      "Tracing क ख ग घ last if hand is tired — or split tracing to day two.",
      "Stop at 15–20 minutes total; Hindi should not become the longest subject every night.",
    ],
    sheetContents: [
      "Letter-to-picture matching (ख, श, ह, त and more)",
      "Missing vyanjan in क–ठ sequence",
      "Trace rows for क ख ग घ",
      "Class 1 Hindi layout with clear picture cues",
    ],
    extraIntro: [
      "Age fit: Class 1 Hindi in CBSE/ICSE/state boards where vyanjan recognition is formal homework. Sr KG with strong akshar knowledge can try matching only.",
      "Ten-minute session script (often stretches to 15): “Awaaz pehle.” Chant letter, say picture word, one match together, three solo, stop before tracing if energy dips — tracing next day.",
      "Common mistakes: Doing entire sheet when child confuses only two letters; mixing English alphabet song in same minute; parent handwriting tiny models in margin.",
      "When to stop: When ख/श/Ga confusion leads to shouting — isolate those two with flashcards, pause full sheet.",
      "Indian context tip: Read shop signs and biscuit packs together — Hindi vyanjan homework sticks when children spot letters on Maggi packets and auto hoods, not only on paper.",
    ],
    extraFaqs: [
      {
        question: "English medium school still assigns Hindi — how much time?",
        answer:
          "Aim 15 minutes four nights a week. Consistency beats rare hour-long cramming before tests.",
      },
      {
        question: "Should we use barakhadi chart same evening?",
        answer:
          "Only if school assigned it. This sheet focuses recognition and tracing, not full matra reading yet.",
      },
      {
        question: "My child completes matching but skips tracing. Okay?",
        answer:
          "Tracing builds motor memory — do at least one row; save rest for tomorrow rather than skipping entirely.",
      },
      {
        question: "Can grandparents quiz Hindi while parents cook?",
        answer:
          "Yes — oral picture words reinforce the same vyanjan without extra writing pressure.",
      },
    ],
  },

  "class-1/festival-writing": {
    howTo: [
      "Talk about one festival memory for two minutes — smells, food, lights — before writing.",
      "Read sentence starters aloud; child picks one or two to complete.",
      "Accept phonetic spelling on first pass; fix one word together if time allows.",
      "Use the draw box — drawing plans the sentence for many Class 1 writers.",
      "Stop after three sentences plus drawing — 15 minutes is enough.",
    ],
    sheetContents: [
      "Festival-themed sentence starters",
      "Lined writing space for short responses",
      "Draw box for planning ideas",
      "Class 1 line spacing for early writers",
    ],
    extraIntro: [
      "Age fit: Class 1 writers forming sentences, often in English-medium schools with festival celebrations at school. Invented spelling is expected.",
      "Ten-minute session script: “Memory, picture, sentence.” Share one festival memory, quick sketch, child writes two sentences, reads aloud to family, stop.",
      "Common mistakes: Correcting every word until the child stops writing; choosing a festival the child has never experienced; writing the sentence for them ‘to save time’.",
      "When to stop: When writing shrinks to one illegible word — switch to oral storytelling and try writing tomorrow.",
      "Indian context tip: Let children write about Ganesh visarjan, Eid sewaiyan, Lohri bonfire, or Onam sadya — personal festivals produce richer sentences than generic ‘Diwali is fun’.",
    ],
    extraFaqs: [
      {
        question: "Should Class 1 festival writing be in English?",
        answer:
          "This sheet targets English sentences common in many worksheet searches. Oral Hindi storytelling can happen first if that is your home language.",
      },
      {
        question: "How long should sentences be?",
        answer:
          "Four to eight words is a solid Class 1 target — one idea per sentence.",
      },
      {
        question: "Can we paste a photo instead of drawing?",
        answer:
          "If it sparks talk, yes — then still require at least two written sentences.",
      },
      {
        question: "School wants cursive. This sheet is print. Problem?",
        answer:
          "Content matters first. Transfer the same sentences to cursive practice if teacher insists.",
      },
    ],
  },

  "class-2/animals-reading": {
    howTo: [
      "Skim questions first — read purposefully for a zoo passage.",
      "First read: child aloud, parent listens for skipped lines.",
      "Second read: silent or whisper for details needed in questions.",
      "Answers in complete sentences with capital letter and full stop.",
      "Stop after one passage cycle — 15–20 minutes; do not add second passages same night.",
    ],
    sheetContents: [
      "Short zoo-themed reading passage",
      "Comprehension questions requiring written answers",
      "Class 2 text complexity and length",
      "Space for full-sentence responses",
    ],
    extraIntro: [
      "Age fit: Class 2 readers building fluency and literal comprehension — typical age 7–8 in Indian primary schools.",
      "Ten-minute session script (plan 15–20): “Question hunt.” Read questions, read passage, underline one clue word, answer question one together, two and three solo, read answers aloud, stop.",
      "Common mistakes: Copying entire sentences without understanding; ignoring punctuation in answers; reading passage once only.",
      "When to stop: When answers become random after minute 18 — mark unfinished question for morning, not midnight.",
      "Indian context tip: Compare zoo passage animals to local wildlife documentaries or visits to Veermata Jijabai Bhavan-style city zoos — children anchor facts when they have seen cages or safari buses.",
    ],
    extraFaqs: [
      {
        question: "Should Class 2 children underline evidence in the passage?",
        answer:
          "Yes — light pencil underline of answer words builds exam habits gently.",
      },
      {
        question: "My child reads fast but answers wrong. Why?",
        answer:
          "Often skimming. Train ‘read question, find proof, then write’ even if it feels slower.",
      },
      {
        question: "Is Hindi reading homework separate?",
        answer:
          "Usually yes in dual-language schools. Keep English comprehension sessions focused on English text.",
      },
      {
        question: "How many passages per week at home?",
        answer:
          "Two quality passages with discussion beat five rushed photocopies.",
      },
    ],
  },

  "class-2/transport-maths": {
    howTo: [
      "Read each word problem twice — underline numbers and the question sentence.",
      "Ask: “Are we joining or taking away?” before writing any operation.",
      "Draw a quick picture (bus, passengers) if your child is visual.",
      "Write one-line answer with units: “5 autos” not just “5”.",
      "Stop after two problems fully explained — third only if calm.",
    ],
    sheetContents: [
      "Transport-themed addition word problems",
      "Transport-themed subtraction word problems",
      "Working space for drawings or number lines",
      "Class 2 operation range",
    ],
    extraIntro: [
      "Age fit: Class 2 maths when word problems enter formal homework — children who know facts but still guess operations need this sheet.",
      "Ten-minute session script: “Story maths.” Read problem, act it with two toys, write sum, check with inverse operation if taught, stop.",
      "Common mistakes: Adding because two numbers appear; ignoring ‘left’ or ‘more than’ language; skipping units in answers.",
      "When to stop: When your child writes a sum without any story retelling — pause, oral retell, then one more problem max.",
      "Indian context tip: Use auto fare, bus stops, and metro tokens in oral stories — Indian transport word problems make sense when children have seen tickets and change.",
    ],
    extraFaqs: [
      {
        question: "Should Class 2 show steps or only answer?",
        answer:
          "Show a picture or number line if school teaches it — process marks often start in Class 2 assessments.",
      },
      {
        question: "My child adds when should subtract. Drill?",
        answer:
          "Drill language, not only sums. Sort problems into ‘join’ vs ‘take away’ piles before calculating.",
      },
      {
        question: "Are two-digit numbers on this sheet?",
        answer:
          "This sample stays within Class 2 friendly numbers — check school pace if two-digit carry is not taught yet.",
      },
      {
        question: "Can we do one problem in Hindi explanation?",
        answer:
          "Explain in Hindi if helpful, but write maths notation as school expects.",
      },
    ],
  },

  "class-2/festival-writing": {
    howTo: [
      "Use the planner boxes: who, where, what happens — speak before writing.",
      "Draft opening sentence together if child is stuck after two minutes.",
      "Write five to six sentences across two short bursts with a water break.",
      "Leave spelling fixes for a quick second pass — content first.",
      "Stop when story has beginning, middle, end — even if short.",
    ],
    sheetContents: [
      "Festival story planner (who / where / what)",
      "Lined story writing space",
      "Class 2 line guide for longer writing",
      "Creative writing prompt tied to festivals",
    ],
    extraIntro: [
      "Age fit: Class 2 writers ready for multi-sentence stories — often after a year of sentence-level work in Class 1.",
      "Ten-minute session script (plan 15–20): “Plan two minutes, write eight minutes, read aloud two minutes.” Timer visible, stop when story closes logically.",
      "Common mistakes: Skipping planner and writing repetitive ‘It was fun’ sentences; parents dictating the story; choosing festival plot with no personal detail.",
      "When to stop: When handwriting collapses — finish orally, write last sentence tomorrow.",
      "Indian context tip: Encourage stories about building a pandal, helping make rangoli, or losing a shoe at garba — specificity beats generic festival essays.",
    ],
    extraFaqs: [
      {
        question: "How is Class 2 festival writing different from Class 1?",
        answer:
          "Class 2 expects a short story arc; Class 1 focuses on single sentences and drawing.",
      },
      {
        question: "Should we correct grammar on festival stories?",
        answer:
          "Fix one pattern per night — past tense verbs, for example — not every error.",
      },
      {
        question: "Can stories be imaginary?",
        answer:
          "Yes — a flying diya or talking rakhi is fine if sentences stay clear.",
      },
      {
        question: "Word count targets for Class 2?",
        answer:
          "Roughly 40–70 words total across five or six sentences is a healthy home target.",
      },
    ],
  },

  "class-2/space-creative-prompt": {
    howTo: [
      "Read the prompt twice — space vocabulary can feel abstract; define unknown words.",
      "Brainstorm three ideas aloud; child picks one to draw or write.",
      "Label drawing with at least three words if writing full sentences is hard.",
      "Encourage ‘because’ sentences to stretch Class 2 reasoning.",
      "Stop after one completed prompt — creativity tires differently from maths.",
    ],
    sheetContents: [
      "Space-themed creative thinking prompts",
      "Room for drawing and labelling",
      "Open-ended questions (no single right answer)",
      "Class 2 language level instructions",
    ],
    extraIntro: [
      "Age fit: Class 2 children with basic reading who can describe ideas — good balance night when maths felt heavy.",
      "Ten-minute session script: “Mission briefing.” Pretend ISRO mission control, list three things to pack for Moon trip, draw rocket, label, one ‘because’ sentence, stop.",
      "Common mistakes: Treating creative answers as wrong; demanding essay length; doing space prompt same night as long science test prep.",
      "When to stop: When child says ‘I don’t know’ repeatedly — offer two silly choices to unlock imagination, then stop on one small win.",
      "Indian context tip: Reference Chandrayaan headlines, ISRO scientists on TV, or planetarium visits — Indian space pride gives Class 2 children concrete hooks beyond Hollywood aliens.",
    ],
    extraFaqs: [
      {
        question: "Draw-only answers acceptable for Class 2?",
        answer:
          "Yes if labelled. Add one oral sentence recorded on phone if teacher allows multimedia homework.",
      },
      {
        question: "Is creative thinking graded like maths?",
        answer:
          "Usually for effort and clarity, not one correct answer — check school rubric if unsure.",
      },
      {
        question: "My child copies prompt words without new ideas. Help?",
        answer:
          "Ask ‘What if?’ follow-ups — What if gravity was half on Mars?",
      },
      {
        question: "Can siblings join brainstorming?",
        answer:
          "Yes — oral ideas help; each child should still do individual written/drawn work.",
      },
    ],
  },

  "class-3/stories-reading": {
    howTo: [
      "Preview title and first paragraph — predict genre (folktale, adventure, moral).",
      "Read passage; highlight unfamiliar words, define briefly, re-read sentence.",
      "Answer in complete sentences citing ‘because in the story…’",
      "Check capitals, punctuation, and that answer matches question type (why vs who).",
      "Stop after one story — Class 3 comprehension deserves 20 minutes, not 40.",
    ],
    sheetContents: [
      "Short story passage for Class 3",
      "Comprehension questions needing full sentences",
      "Inference-friendly but age-appropriate plot",
      "Answer lines with adequate spacing",
    ],
    extraIntro: [
      "Age fit: Class 3 readers (roughly 8–9 years) handling longer paragraphs and moral or inference questions common in CBSE/ICSE English.",
      "Ten-minute session script (plan 20): “Read, word fix, question map.” Five minutes read, two minutes vocab, thirteen minutes questions two at a time, read answers aloud, stop.",
      "Common mistakes: One-word answers; copying wrong paragraph; skipping re-read when question asks ‘why’.",
      "When to stop: When frustration rises on inference questions — discuss orally, child writes one sentence, continue next day.",
      "Indian context tip: Connect story themes to Panchatantra or Amar Chitra Katha morals your child knows — inference feels less mysterious with familiar story shapes.",
    ],
    extraFaqs: [
      {
        question: "Should Class 3 quote lines from the passage?",
        answer:
          "If school teaches evidence, yes briefly. Own words plus one quoted phrase is ideal.",
      },
      {
        question: "How long should written answers be?",
        answer:
          "One to three complete sentences per question — quality over length.",
      },
      {
        question: "Can we read passage in Hindi first?",
        answer:
          "Oral Hindi summary okay for understanding, but final written answers usually stay in English for this sheet.",
      },
      {
        question: "Is one story enough homework?",
        answer:
          "Yes — pair with mental maths or spelling another day rather than stacking two passages.",
      },
    ],
  },

  "class-3/maths-word-problems": {
    howTo: [
      "Read problem aloud; child repeats in own words — ‘Ravi has…’",
      "Box question sentence, circle numbers, note operation in margin.",
      "Show working: number line, bar sketch, or table as school teaches.",
      "Write final answer with label (rupees, km, children).",
      "Stop after two fully worked problems; third optional if accuracy stayed high.",
    ],
    sheetContents: [
      "Multi-step-friendly word problems (transport theme)",
      "Dedicated working space per question",
      "Class 3 number and operation range",
      "Clear question numbering",
    ],
    extraIntro: [
      "Age fit: Class 3 maths when students handle two-step reasoning and larger numbers — typical after mastering Class 2 word problems.",
      "Ten-minute session script (often 20 with working): “Retell, represent, compute, check.” One problem fully modelled, second mostly solo, stop before sloppy third.",
      "Common mistakes: Correct computation with wrong operation; skipping units; messy working that cannot be reviewed.",
      "When to stop: When working space becomes random digits — erase or fresh paper tomorrow beats pushing through confusion.",
      "Indian context tip: Use rupee notes, cricket scores, and distance between two familiar landmarks — Class 3 word problems click when numbers mirror daily life.",
    ],
    extraFaqs: [
      {
        question: "Does Class 3 need multi-step problems every night?",
        answer:
          "Two thoughtful problems develop habit; ten rushed ones teach guessing.",
      },
      {
        question: "Should parents teach formal algebra?",
        answer:
          "Not yet — stick to school methods (bar models, number lines) unless teacher introduces variables.",
      },
      {
        question: "My child gets right answer but no working shown.",
        answer:
          "Require quick sketch or table before final number — exams often mark process.",
      },
      {
        question: "Hindi medium maths — same sheet?",
        answer:
          "Maths notation is universal; explain story in Hindi if needed, write numbers and symbols as school expects.",
      },
    ],
  },

  "class-3/monsoon-life-skills": {
    howTo: [
      "Read scenario aloud — monsoon context may need local examples (flooded lane, leaky umbrella).",
      "Ask ‘What would you do first?’ before revealing any suggested answers on back if present.",
      "Discuss two choices and consequences — life skills are conversational.",
      "Child writes or draws one safe action they would take.",
      "Stop after one scenario deeply discussed — 15 minutes conversation beats skimming five.",
    ],
    sheetContents: [
      "Monsoon safety and empathy scenarios",
      "Questions prompting discussion and decision-making",
      "Write or draw response space",
      "Class 3 life-skills framing (non-academic marks focus)",
    ],
    extraIntro: [
      "Age fit: Class 3 children who can reason about safety and helping others — especially relevant June–September across India.",
      "Ten-minute session script: “Rainy day choices.” Read scenario, pause for child opinion, parent shares one real monsoon memory, child picks safe action, role-play phone call to parent if scenario fits, stop.",
      "Common mistakes: Turning life skills into lecture; shaming fear of thunder; rushing written answers without talk.",
      "When to stop: If storm anxiety spikes — validate feelings, focus on one coping strategy, skip remaining scenarios.",
      "Indian context tip: Cover school closure rumours, avoiding open drains, helping younger siblings with raincoat, and kindness to street dogs in rain — scenarios match Indian monsoon realities, not generic ‘stay indoors’ posters.",
    ],
    extraFaqs: [
      {
        question: "Is monsoon life skills homework graded?",
        answer:
          "Often for participation and reflection, not right/wrong — confirm with class teacher.",
      },
      {
        question: "Can we answer in Hindi?",
        answer:
          "Yes if that is your child’s strength — values transfer across language.",
      },
      {
        question: "Should we pair this with science on water cycle?",
        answer:
          "Nice optional link — science facts plus empathy scenarios build fuller monsoon learning.",
      },
      {
        question: "My child is scared of lightning. Use this sheet?",
        answer:
          "Gently — focus on safety steps adults take; skip frightening scenarios until calm.",
      },
    ],
  },

  "class-3/space-creative": {
    howTo: [
      "Choose one prompt if multiple appear — depth over breadth.",
      "Mind-map four words (rocket, crater, oxygen, team) before writing.",
      "Aim for a paragraph or labelled invention drawing with five labels.",
      "Use ‘would’ and ‘could’ sentences to practice conditional language.",
      "Stop after one polished idea — Class 3 creative work supports writing stamina, not marathon essays.",
    ],
    sheetContents: [
      "Space invention and vocabulary prompts",
      "Extended writing or large drawing area",
      "Class 3 creative thinking challenge level",
      "Open-ended space exploration questions",
    ],
    extraIntro: [
      "Age fit: Class 3 students with enough English vocabulary to describe inventions — good counterbalance to heavy exam weeks in many Indian schools.",
      "Ten-minute session script (plan 15–20): “Inventor lab.” Name invention, draw, label parts, write three sentences on who uses it, stop.",
      "Common mistakes: Copying Wikipedia facts without imagination; parents over-editing vocabulary; treating prompt like science test.",
      "When to stop: When child fatigues into list-making — convert to oral pitch of invention, write two sentences tomorrow.",
      "Indian context tip: Tie inventions to helping farmers, cyclone warning, or satellite maps of villages — Class 3 children engage when space tech connects to Indian problems, not only NASA posters.",
    ],
    extraFaqs: [
      {
        question: "How is Class 3 space creative different from Class 2 prompt?",
        answer:
          "Class 3 expects richer vocabulary and longer explanations; Class 2 allows shorter labelled drawings.",
      },
      {
        question: "Should we research facts online together?",
        answer:
          "Light fact-check okay — keep focus on child’s invention, not report writing.",
      },
      {
        question: "Can this count as English homework?",
        answer:
          "Often yes — creative writing builds grammar and vocabulary if sentences are complete.",
      },
      {
        question: "Do we need special art supplies?",
        answer:
          "Pencil and crayons on printed PDF are enough — fancy craft optional.",
      },
    ],
  },
};
