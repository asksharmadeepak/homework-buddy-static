/**
 * Branded Homework Buddy worksheets with illustrations + quizzes.
 * Run: node scripts/generate-worksheets.mjs
 */
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// fontkit's Indic shaper (needed to render Devanagari matras correctly)
// relies on the regeneratorRuntime global.
import "regenerator-runtime/runtime.js";
import fontkit from "@pdf-lib/fontkit";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public/worksheets");
const artDir = join(outDir, "art");

const logoBytes = readFileSync(join(root, "public/brand/pdf-logo.png"));
const wordmarkBytes = readFileSync(join(root, "public/brand/pdf-wordmark.png"));
const devanagariBytes = readFileSync(
  join(__dirname, "fonts/NotoSansDevanagari-Regular.ttf"),
);

const C = {
  purple: rgb(0.482, 0.361, 0.839),
  soft: rgb(0.941, 0.922, 1),
  peach: rgb(1, 0.937, 0.91),
  text: rgb(0.141, 0.129, 0.173),
  muted: rgb(0.49, 0.467, 0.533),
  white: rgb(1, 1, 1),
  line: rgb(0.82, 0.78, 0.9),
};

function loadArt(name) {
  return readFileSync(join(artDir, name));
}

function wrap(page, text, font, size, x, y, maxWidth, color, lh = 15) {
  const words = text.split(" ");
  let line = "";
  let cy = y;
  for (const w of words) {
    const t = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(t, size) > maxWidth && line) {
      page.drawText(line, { x, y: cy, size, font, color });
      cy -= lh;
      line = w;
    } else line = t;
  }
  if (line) {
    page.drawText(line, { x, y: cy, size, font, color });
    cy -= lh;
  }
  return cy;
}

function circleOption(page, x, y, label, font, fontBold) {
  page.drawCircle({
    x: x + 7,
    y: y + 3,
    size: 7,
    borderColor: C.purple,
    borderWidth: 1.2,
  });
  page.drawText(label, {
    x: x + 20,
    y: y,
    size: 11,
    font,
    color: C.text,
  });
}

function sectionTitle(page, text, x, y, fontBold) {
  page.drawText(text, { x, y, size: 13, font: fontBold, color: C.purple });
  return y - 18;
}

async function drawBrandHeader(doc, page, font, fontBold) {
  const { width, height } = page.getSize();
  const logo = await doc.embedPng(logoBytes);
  const wordmark = await doc.embedPng(wordmarkBytes);
  const margin = 42;

  page.drawRectangle({ x: 0, y: height - 88, width, height: 88, color: C.soft });
  page.drawImage(logo, { x: margin, y: height - 64, width: 38, height: 38 });
  const wmH = 24;
  const wmW = Math.min((wordmark.width / wordmark.height) * wmH, 200);
  page.drawImage(wordmark, {
    x: margin + 48,
    y: height - 54,
    width: wmW,
    height: wmH,
  });
  page.drawText("Printable learning for Nursery to Class 3", {
    x: margin + 48,
    y: height - 72,
    size: 8,
    font,
    color: C.muted,
  });
  page.drawRectangle({
    x: width - margin - 100,
    y: height - 54,
    width: 100,
    height: 20,
    color: C.purple,
  });
  page.drawText("FREE SAMPLE", {
    x: width - margin - 88,
    y: height - 48,
    size: 9,
    font: fontBold,
    color: C.white,
  });
  return height - 110;
}

async function drawBrandFooter(doc, page, font, fontBold) {
  const { width } = page.getSize();
  const logo = await doc.embedPng(logoBytes);
  const margin = 42;
  page.drawRectangle({ x: 0, y: 0, width, height: 72, color: C.purple });
  page.drawImage(logo, { x: margin, y: 20, width: 28, height: 28 });
  page.drawText("Homework Buddy", {
    x: margin + 36,
    y: 40,
    size: 11,
    font: fontBold,
    color: C.white,
  });
  page.drawText("Liked this sheet? Generate unlimited themed worksheets in the app.", {
    x: margin + 36,
    y: 26,
    size: 8,
    font,
    color: C.white,
  });
  page.drawText("Google Play  ·  www.easyhomeworkactivity.com", {
    x: margin + 36,
    y: 14,
    size: 8,
    font: fontBold,
    color: C.white,
  });
}

async function finishMeta(doc, title) {
  doc.setTitle(`${title} — Homework Buddy`);
  doc.setAuthor("Homework Buddy");
  doc.setSubject("Free printable worksheet from Homework Buddy");
  doc.setCreator("Homework Buddy · easyhomeworkactivity.com");
}

/** Class 1 Animals Reading + Quiz */
async function buildAnimalsReading() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Animals Reading Adventure", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  y -= 16;
  page.drawText("Class 1 · Reading · Animals", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 14;
  page.drawLine({
    start: { x: margin, y },
    end: { x: 555, y },
    thickness: 1.5,
    color: C.purple,
  });
  y -= 22;

  // Story card with illustrations
  page.drawRectangle({
    x: margin,
    y: y - 150,
    width: 510,
    height: 160,
    color: C.peach,
    borderColor: C.purple,
    borderWidth: 1,
  });

  const elephant = await doc.embedPng(loadArt("cut_elephant.png"));
  const lion = await doc.embedPng(loadArt("cut_lion.png"));
  const rabbit = await doc.embedPng(loadArt("cut_rabbit.png"));
  page.drawImage(elephant, { x: margin + 16, y: y - 100, width: 70, height: 70 });
  page.drawImage(lion, { x: margin + 100, y: y - 100, width: 70, height: 70 });
  page.drawImage(rabbit, { x: margin + 184, y: y - 100, width: 70, height: 70 });

  page.drawText("Story: Zoo Friends", {
    x: margin + 270,
    y: y - 24,
    size: 12,
    font: fontBold,
    color: C.purple,
  });
  let sy = y - 42;
  for (const line of [
    "Aarav went to the zoo with his Amma.",
    "He saw an elephant spraying cool water.",
    "He heard a lion roaring loudly.",
    "He watched a rabbit hopping fast.",
    "Aarav waved goodbye and smiled.",
  ]) {
    page.drawText(line, { x: margin + 270, y: sy, size: 10, font, color: C.text });
    sy -= 14;
  }
  y -= 175;

  y = sectionTitle(page, "Quiz A — Circle the correct answer", margin, y, fontBold);
  const qas = [
    ["1. Where did Aarav go?", ["Park", "Zoo", "School"]],
    ["2. Which animal sprayed water?", ["Lion", "Rabbit", "Elephant"]],
    ["3. Which animal was hopping?", ["Rabbit", "Elephant", "Lion"]],
  ];
  for (const [q, opts] of qas) {
    page.drawText(q, { x: margin, y, size: 11, font: fontBold, color: C.text });
    y -= 18;
    opts.forEach((o, i) => circleOption(page, margin + i * 140, y, o, font, fontBold));
    y -= 24;
  }

  y = sectionTitle(page, "Quiz B — Write one word", margin, y, fontBold);
  page.drawText("4. Who took Aarav to the zoo?  ______________________________", {
    x: margin,
    y,
    size: 11,
    font,
    color: C.text,
  });
  y -= 22;
  page.drawText("5. How did Aarav feel at the end?  ____________________________", {
    x: margin,
    y,
    size: 11,
    font,
    color: C.text,
  });
  y -= 28;

  y = sectionTitle(page, "Draw & label your favourite zoo animal", margin, y, fontBold);
  page.drawRectangle({
    x: margin,
    y: Math.max(90, y - 130),
    width: 510,
    height: 120,
    borderColor: C.purple,
    borderWidth: 1.5,
  });
  page.drawText("Name: ____________________", {
    x: margin + 12,
    y: Math.max(98, y - 122),
    size: 10,
    font,
    color: C.muted,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Animals Reading Adventure");
  return doc.save();
}

/** Nursery Festival Coloring */
async function buildFestivalColoring() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Festival Coloring Fun", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  y -= 16;
  page.drawText("Nursery · Coloring · Festivals  ·  Colour neatly. Talk about each picture.", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 20;

  const festival = await doc.embedPng(loadArt("theme-festival.png"));
  const star = await doc.embedPng(loadArt("cut_star.png"));
  const parrot = await doc.embedPng(loadArt("cut_parrot.png"));
  const moon = await doc.embedPng(loadArt("cut_moon.png"));

  // Big colour panels
  const panels = [
    { img: festival, label: "1. Festival lights — colour me!" },
    { img: star, label: "2. Bright star — colour me!" },
    { img: parrot, label: "3. Happy bird — colour me!" },
    { img: moon, label: "4. Night moon — colour me!" },
  ];

  const positions = [
    [margin, y - 200],
    [margin + 255, y - 200],
    [margin, y - 430],
    [margin + 255, y - 430],
  ];

  for (let i = 0; i < 4; i++) {
    const [x, by] = positions[i];
    page.drawRectangle({
      x,
      y: by,
      width: 240,
      height: 210,
      borderColor: C.purple,
      borderWidth: 1.5,
      color: C.white,
    });
    page.drawImage(panels[i].img, {
      x: x + 45,
      y: by + 55,
      width: 150,
      height: 150,
    });
    page.drawText(panels[i].label, {
      x: x + 12,
      y: by + 18,
      size: 10,
      font: fontBold,
      color: C.purple,
    });
  }

  // Mini quiz strip
  page.drawRectangle({
    x: margin,
    y: 88,
    width: 510,
    height: 56,
    color: C.peach,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawText("Quick quiz (say the answer aloud): Which picture is a star? Which is a moon?", {
    x: margin + 12,
    y: 120,
    size: 10,
    font: fontBold,
    color: C.text,
  });
  page.drawText("Parent tip: Praise colours your child chooses. Stop after ~10 minutes.", {
    x: margin + 12,
    y: 102,
    size: 9,
    font,
    color: C.muted,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Festival Coloring Fun");
  return doc.save();
}

/** Class 1 Transport Maths */
async function buildTransportMaths() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Transport Maths Count", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  y -= 16;
  page.drawText("Class 1 · Maths · Transport", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 18;

  const bus = await doc.embedPng(loadArt("cut_bus.png"));
  const train = await doc.embedPng(loadArt("cut_train.png"));
  const plane = await doc.embedPng(loadArt("cut_plane.png"));

  page.drawRectangle({
    x: margin,
    y: y - 100,
    width: 510,
    height: 110,
    color: C.soft,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawImage(bus, { x: margin + 30, y: y - 88, width: 90, height: 90 });
  page.drawImage(train, { x: margin + 200, y: y - 88, width: 90, height: 90 });
  page.drawImage(plane, { x: margin + 370, y: y - 88, width: 90, height: 90 });
  page.drawText("Bus", { x: margin + 58, y: y - 98, size: 9, font: fontBold, color: C.purple });
  page.drawText("Train", { x: margin + 225, y: y - 98, size: 9, font: fontBold, color: C.purple });
  page.drawText("Plane", { x: margin + 395, y: y - 98, size: 9, font: fontBold, color: C.purple });
  y -= 120;

  y = sectionTitle(page, "Part 1 — Count & write", margin, y, fontBold);
  const sums = [
    "1. 3 buses + 2 cars = ______ vehicles",
    "2. 5 trains - 1 train = ______ trains",
    "3. 4 planes + 4 planes = ______ planes",
    "4. Write the missing number:  2 , 3 , __ , 5 , 6",
  ];
  for (const s of sums) {
    page.drawText(s, { x: margin, y, size: 12, font, color: C.text });
    y -= 22;
  }

  y = sectionTitle(page, "Part 2 — Quiz (circle one)", margin, y, fontBold);
  page.drawText("5. Which number is bigger?", {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: C.text,
  });
  y -= 18;
  ["7", "4"].forEach((o, i) => circleOption(page, margin + i * 100, y, o, font, fontBold));
  y -= 26;

  page.drawText("6. 2 + 3 equals…", {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: C.text,
  });
  y -= 18;
  ["4", "5", "6"].forEach((o, i) => circleOption(page, margin + i * 100, y, o, font, fontBold));
  y -= 28;

  y = sectionTitle(page, "Part 3 — Draw 4 aeroplanes in the sky box", margin, y, fontBold);
  page.drawRectangle({
    x: margin,
    y: Math.max(90, y - 140),
    width: 510,
    height: 130,
    borderColor: C.purple,
    borderWidth: 1.5,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Transport Maths Count");
  return doc.save();
}

/** Class 2 Space Creative */
async function buildSpaceCreative() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Space Creative Prompt", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  y -= 16;
  page.drawText("Class 2 · Creative Thinking · Space", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 18;

  const rocket = await doc.embedPng(loadArt("cut_rocket.png"));
  const star = await doc.embedPng(loadArt("cut_star.png"));
  const moon = await doc.embedPng(loadArt("cut_moon.png"));
  const space = await doc.embedPng(loadArt("theme-space.png"));

  page.drawRectangle({
    x: margin,
    y: y - 95,
    width: 510,
    height: 105,
    color: C.soft,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawImage(rocket, { x: margin + 20, y: y - 88, width: 80, height: 80 });
  page.drawImage(star, { x: margin + 130, y: y - 80, width: 70, height: 70 });
  page.drawImage(moon, { x: margin + 230, y: y - 80, width: 70, height: 70 });
  page.drawImage(space, { x: margin + 360, y: y - 88, width: 90, height: 90 });
  y -= 115;

  y = sectionTitle(page, "Imagine & write (or draw first, then write)", margin, y, fontBold);
  const prompts = [
    "1. What would you pack in your space bag?",
    "2. Name your spaceship: ________________________________",
    "3. Who would you take with you? Why?",
    "4. What would you eat on the Moon?",
  ];
  for (const p of prompts) {
    page.drawText(p, { x: margin, y, size: 11, font: fontBold, color: C.text });
    y -= 16;
    page.drawLine({
      start: { x: margin, y },
      end: { x: 555, y },
      thickness: 0.8,
      color: C.line,
    });
    y -= 14;
    page.drawLine({
      start: { x: margin, y },
      end: { x: 555, y },
      thickness: 0.8,
      color: C.line,
    });
    y -= 20;
  }

  y = sectionTitle(page, "Quick space quiz — circle one", margin, y, fontBold);
  page.drawText("5. Which one can fly into space?", {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: C.text,
  });
  y -= 18;
  ["Bus", "Rocket", "Train"].forEach((o, i) =>
    circleOption(page, margin + i * 130, y, o, font, fontBold),
  );
  y -= 28;

  page.drawText("6. Draw your planet picnic:", {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: C.text,
  });
  y -= 8;
  page.drawRectangle({
    x: margin,
    y: Math.max(90, y - 110),
    width: 510,
    height: 100,
    borderColor: C.purple,
    borderWidth: 1.5,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Space Creative Prompt");
  return doc.save();
}

/** Jr KG Fruits Writing */
async function buildFruitsWriting() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Fruits Writing Words", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  y -= 16;
  page.drawText("Jr KG · Writing · Fruits  ·  Trace slowly. Then write on your own.", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 20;

  const fruits = await doc.embedPng(loadArt("theme-fruits.png"));
  page.drawImage(fruits, { x: margin, y: y - 90, width: 100, height: 100 });
  page.drawRectangle({
    x: margin + 120,
    y: y - 90,
    width: 390,
    height: 100,
    color: C.peach,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawText("Today's fruit words", {
    x: margin + 140,
    y: y - 30,
    size: 12,
    font: fontBold,
    color: C.purple,
  });
  page.drawText("APPLE   ·   MANGO   ·   GRAPE", {
    x: margin + 140,
    y: y - 55,
    size: 14,
    font: fontBold,
    color: C.text,
  });
  page.drawText("Say each word aloud before writing.", {
    x: margin + 140,
    y: y - 78,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 115;

  const words = [
    { word: "APPLE", dots: "A P P L E" },
    { word: "MANGO", dots: "M A N G O" },
    { word: "GRAPE", dots: "G R A P E" },
  ];
  for (const w of words) {
    page.drawRectangle({
      x: margin,
      y: y - 70,
      width: 510,
      height: 78,
      borderColor: C.purple,
      borderWidth: 1,
      color: C.white,
    });
    page.drawText(w.word, {
      x: margin + 16,
      y: y - 28,
      size: 18,
      font: fontBold,
      color: C.purple,
    });
    page.drawText(`Trace:  ${w.dots}`, {
      x: margin + 16,
      y: y - 48,
      size: 12,
      font,
      color: C.muted,
    });
    page.drawText("Write:  __  __  __  __  __", {
      x: margin + 16,
      y: y - 66,
      size: 12,
      font: fontBold,
      color: C.text,
    });
    y -= 88;
  }

  y = sectionTitle(page, "Quiz — circle the fruit word", margin, y, fontBold);
  page.drawText("Which word means a red or green fruit often in lunch boxes?", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.text,
  });
  y -= 18;
  ["MANGO", "APPLE", "BUS"].forEach((o, i) =>
    circleOption(page, margin + i * 140, y, o, font, fontBold),
  );
  y -= 28;

  page.drawText("Draw your favourite fruit:", {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: C.text,
  });
  y -= 8;
  page.drawRectangle({
    x: margin,
    y: Math.max(90, y - 90),
    width: 240,
    height: 80,
    borderColor: C.purple,
    borderWidth: 1.5,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Fruits Writing Words");
  return doc.save();
}

/** Class 3 Monsoon Life Skills */
async function buildMonsoonLifeSkills() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Monsoon Life Skills", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  y -= 16;
  page.drawText("Class 3 · Life Skills · Monsoon", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 18;

  const monsoon = await doc.embedPng(loadArt("theme-monsoon.png"));
  page.drawRectangle({
    x: margin,
    y: y - 85,
    width: 510,
    height: 95,
    color: C.soft,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawImage(monsoon, { x: margin + 16, y: y - 78, width: 80, height: 80 });
  page.drawText("Rainy days need smart & kind choices.", {
    x: margin + 110,
    y: y - 30,
    size: 12,
    font: fontBold,
    color: C.purple,
  });
  page.drawText("Read each situation. Circle the best answer, then write your own tip.", {
    x: margin + 110,
    y: y - 48,
    size: 10,
    font,
    color: C.text,
  });
  y -= 105;

  const scenarios = [
    {
      q: "1. It rains heavily on the way home. What is safest?",
      opts: ["Run across a flooded road", "Wait in a safe shelter with an adult", "Play in deep water"],
    },
    {
      q: "2. A younger child has no umbrella. What shows kindness?",
      opts: ["Ignore them", "Share cover / tell a teacher", "Laugh at them"],
    },
    {
      q: "3. Your shoes are muddy at the door. You should…",
      opts: ["Walk on the carpet", "Remove / clean shoes first", "Hide the mud"],
    },
  ];

  for (const s of scenarios) {
    page.drawText(s.q, { x: margin, y, size: 11, font: fontBold, color: C.text });
    y -= 18;
    s.opts.forEach((o, i) => {
      circleOption(page, margin, y, o, font, fontBold);
      y -= 16;
    });
    y -= 10;
  }

  y = sectionTitle(page, "Write your monsoon safety tip", margin, y, fontBold);
  page.drawText("4. One tip for your family: ___________________________________________", {
    x: margin,
    y,
    size: 11,
    font,
    color: C.text,
  });
  y -= 18;
  page.drawLine({
    start: { x: margin, y },
    end: { x: 555, y },
    thickness: 0.8,
    color: C.line,
  });
  y -= 22;

  page.drawText("5. Draw a helpful monsoon action (sharing an umbrella, wiping shoes…)", {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: C.text,
  });
  y -= 8;
  page.drawRectangle({
    x: margin,
    y: Math.max(90, y - 110),
    width: 510,
    height: 100,
    borderColor: C.purple,
    borderWidth: 1.5,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Monsoon Life Skills");
  return doc.save();
}

/** Nursery Hindi Swar Tracing */
async function buildHindiSwarTracing() {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const deva = await doc.embedFont(devanagariBytes, { subset: true });
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Hindi Swar Tracing", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  page.drawText("(स्वर अभ्यास)", {
    x: margin + 205,
    y,
    size: 16,
    font: deva,
    color: C.purple,
  });
  y -= 16;
  page.drawText("Nursery · Hindi Varnamala · Swar  ·  Say each swar aloud, then trace.", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 14;
  page.drawLine({
    start: { x: margin, y },
    end: { x: 555, y },
    thickness: 1.5,
    color: C.purple,
  });
  y -= 20;

  // Swar showcase card
  page.drawRectangle({
    x: margin,
    y: y - 72,
    width: 510,
    height: 80,
    color: C.soft,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawText("आज के स्वर", {
    x: margin + 16,
    y: y - 22,
    size: 12,
    font: deva,
    color: C.purple,
  });
  page.drawText("(Today's vowels)", {
    x: margin + 16 + deva.widthOfTextAtSize("आज के स्वर", 12) + 8,
    y: y - 22,
    size: 11,
    font: fontBold,
    color: C.purple,
  });
  const swarRow = "अ  आ  इ  ई  उ  ऊ  ए  ऐ  ओ  औ";
  page.drawText(swarRow, {
    x: margin + 16,
    y: y - 56,
    size: 24,
    font: deva,
    color: C.text,
  });
  y -= 94;

  y = sectionTitle(page, "Part 1 — Trace each swar (darker first, then the grey ones)", margin, y, fontBold);
  const traceLetters = ["अ", "आ", "इ", "ई", "उ", "ऊ"];
  const grey = rgb(0.78, 0.75, 0.85);
  for (const letter of traceLetters) {
    page.drawRectangle({
      x: margin,
      y: y - 40,
      width: 510,
      height: 46,
      borderColor: C.line,
      borderWidth: 1,
      color: C.white,
    });
    page.drawText(letter, {
      x: margin + 18,
      y: y - 28,
      size: 26,
      font: deva,
      color: C.purple,
    });
    for (let i = 0; i < 6; i++) {
      page.drawText(letter, {
        x: margin + 90 + i * 70,
        y: y - 28,
        size: 26,
        font: deva,
        color: grey,
      });
    }
    y -= 52;
  }
  y -= 8;

  y = sectionTitle(page, "Part 2 — Circle every", margin, y, fontBold);
  page.drawText("अ", {
    x: margin + 152,
    y: y + 18,
    size: 15,
    font: deva,
    color: C.purple,
  });
  page.drawText("in this row", {
    x: margin + 172,
    y: y + 18,
    size: 13,
    font: fontBold,
    color: C.purple,
  });
  page.drawText("आ    अ    इ    अ    ई    अ    उ    आ    अ", {
    x: margin + 4,
    y: y - 10,
    size: 22,
    font: deva,
    color: C.text,
  });
  y -= 44;

  y = sectionTitle(page, "Part 3 — Colour the star when you finish!", margin, y, fontBold);
  const star = await doc.embedPng(loadArt("cut_star.png"));
  page.drawRectangle({
    x: margin,
    y: Math.max(88, y - 78),
    width: 510,
    height: 74,
    borderColor: C.purple,
    borderWidth: 1.5,
    color: C.white,
  });
  page.drawImage(star, { x: margin + 20, y: Math.max(94, y - 72), width: 62, height: 62 });
  const cheerY = Math.max(118, y - 46);
  page.drawText("शाबाश!", {
    x: margin + 100,
    y: cheerY,
    size: 14,
    font: deva,
    color: C.purple,
  });
  page.drawText("Well done! Say all ten swars once more to a grown-up.", {
    x: margin + 100 + deva.widthOfTextAtSize("शाबाश!", 14) + 10,
    y: cheerY,
    size: 11,
    font,
    color: C.text,
  });

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Hindi Swar Tracing");
  return doc.save();
}

/** Class 1 Hindi Vyanjan Practice */
async function buildHindiVyanjanPractice() {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);
  const page = doc.addPage([595.28, 841.89]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const deva = await doc.embedFont(devanagariBytes, { subset: true });
  const margin = 42;
  let y = await drawBrandHeader(doc, page, font, fontBold);

  page.drawText("Hindi Vyanjan Practice", {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: C.text,
  });
  page.drawText("(व्यंजन अभ्यास)", {
    x: margin + 235,
    y,
    size: 16,
    font: deva,
    color: C.purple,
  });
  y -= 16;
  page.drawText("Class 1 · Hindi Varnamala · Vyanjan  ·  Read, match, and write.", {
    x: margin,
    y,
    size: 10,
    font,
    color: C.muted,
  });
  y -= 14;
  page.drawLine({
    start: { x: margin, y },
    end: { x: 555, y },
    thickness: 1.5,
    color: C.purple,
  });
  y -= 20;

  // Vyanjan showcase card
  page.drawRectangle({
    x: margin,
    y: y - 72,
    width: 510,
    height: 80,
    color: C.peach,
    borderColor: C.purple,
    borderWidth: 1,
  });
  page.drawText("आज के व्यंजन", {
    x: margin + 16,
    y: y - 22,
    size: 12,
    font: deva,
    color: C.purple,
  });
  page.drawText("(Today's consonants)", {
    x: margin + 16 + deva.widthOfTextAtSize("आज के व्यंजन", 12) + 8,
    y: y - 22,
    size: 11,
    font: fontBold,
    color: C.purple,
  });
  page.drawText("क  ख  ग  घ    च  छ  ज  झ    ट  ठ", {
    x: margin + 16,
    y: y - 56,
    size: 24,
    font: deva,
    color: C.text,
  });
  y -= 94;

  y = sectionTitle(page, "Part 1 — Match the letter to its picture (draw a line)", margin, y, fontBold);
  const rabbit = await doc.embedPng(loadArt("cut_rabbit.png"));
  const lion = await doc.embedPng(loadArt("cut_lion.png"));
  const elephant = await doc.embedPng(loadArt("cut_elephant.png"));
  const parrot = await doc.embedPng(loadArt("cut_parrot.png"));
  // Letters on the left; pictures on the right in a shuffled order.
  const pairs = [
    { letter: "ख", word: "खरगोश" },
    { letter: "श", word: "शेर" },
    { letter: "ह", word: "हाथी" },
    { letter: "त", word: "तोता" },
  ];
  const shuffledArt = [lion, parrot, rabbit, elephant];
  const rowH = 64;
  for (let i = 0; i < pairs.length; i++) {
    const ry = y - 6 - i * rowH;
    page.drawText(pairs[i].letter, {
      x: margin + 20,
      y: ry - 34,
      size: 28,
      font: deva,
      color: C.purple,
    });
    page.drawText(pairs[i].word, {
      x: margin + 70,
      y: ry - 28,
      size: 13,
      font: deva,
      color: C.muted,
    });
    page.drawCircle({
      x: margin + 190,
      y: ry - 24,
      size: 4,
      color: C.purple,
    });
    page.drawCircle({
      x: margin + 380,
      y: ry - 24,
      size: 4,
      color: C.purple,
    });
    page.drawImage(shuffledArt[i], {
      x: margin + 410,
      y: ry - 52,
      width: 56,
      height: 56,
    });
  }
  y -= 6 + pairs.length * rowH + 8;

  y = sectionTitle(page, "Part 2 — Write the missing letter", margin, y, fontBold);
  const sequences = ["क  ख  ___  घ", "च  छ  ज  ___", "___  ठ"];
  let sx = margin;
  for (const seq of sequences) {
    page.drawText(seq, { x: sx, y: y - 12, size: 20, font: deva, color: C.text });
    sx += 175;
  }
  y -= 48;

  y = sectionTitle(page, "Part 3 — Trace and write", margin, y, fontBold);
  const grey = rgb(0.78, 0.75, 0.85);
  const traceRow = ["क", "ख", "ग", "घ"];
  for (let i = 0; i < traceRow.length; i++) {
    const bx = margin + i * 128;
    page.drawRectangle({
      x: bx,
      y: Math.max(88, y - 60),
      width: 118,
      height: 56,
      borderColor: C.line,
      borderWidth: 1,
      color: C.white,
    });
    page.drawText(traceRow[i], {
      x: bx + 14,
      y: Math.max(102, y - 46),
      size: 26,
      font: deva,
      color: C.purple,
    });
    page.drawText(traceRow[i], {
      x: bx + 56,
      y: Math.max(102, y - 46),
      size: 26,
      font: deva,
      color: grey,
    });
    page.drawText("__", {
      x: bx + 92,
      y: Math.max(102, y - 46),
      size: 16,
      font: fontBold,
      color: C.muted,
    });
  }

  await drawBrandFooter(doc, page, font, fontBold);
  await finishMeta(doc, "Hindi Vyanjan Practice");
  return doc.save();
}

const builders = [
  ["class-1-animals-reading-adventure.pdf", buildAnimalsReading],
  ["nursery-festival-coloring-fun.pdf", buildFestivalColoring],
  ["class-1-transport-maths-count.pdf", buildTransportMaths],
  ["class-2-space-creative-prompt.pdf", buildSpaceCreative],
  ["jr-kg-fruits-writing-words.pdf", buildFruitsWriting],
  ["class-3-monsoon-life-skills.pdf", buildMonsoonLifeSkills],
  ["nursery-hindi-swar-tracing.pdf", buildHindiSwarTracing],
  ["class-1-hindi-vyanjan-practice.pdf", buildHindiVyanjanPractice],
];

mkdirSync(outDir, { recursive: true });

for (const [file, build] of builders) {
  const bytes = await build();
  const path = join(outDir, file);
  writeFileSync(path, bytes);
  console.log("Wrote", path);
}

console.log("Done:", builders.length, "illustrated quiz worksheets");
