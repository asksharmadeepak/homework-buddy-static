/** Real-path generator hub cards for homepage + tools index (no aspirational / Soon items). */

export type GeneratorHubItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  /** Pastel background for Brainator-style cards */
  tint: string;
  featured?: boolean;
};

export const generatorHubItems: GeneratorHubItem[] = [
  {
    title: "Printable helper",
    description: "Describe tonight’s practice and print one calm sheet.",
    href: "/tools/chat",
    icon: "/activities/creative.png",
    tint: "bg-[#F0EBFF]",
    featured: true,
  },
  {
    title: "Maths practice",
    description: "Counting, sums, and word problems by age.",
    href: "/activities/maths",
    icon: "/activities/maths.png",
    tint: "bg-[#E8F4FF]",
  },
  {
    title: "Reading",
    description: "Passages and comprehension for early readers.",
    href: "/activities/reading",
    icon: "/activities/reading.png",
    tint: "bg-[#FFE8F0]",
  },
  {
    title: "Hindi",
    description: "Swar, vyanjan, and calm Hindi practice hubs.",
    href: "/activities/hindi",
    icon: "/activities/hindi.png",
    tint: "bg-[#FFF0E0]",
  },
  {
    title: "Colouring",
    description: "Fine-motor colouring with theme talk.",
    href: "/activities/coloring",
    icon: "/activities/coloring.png",
    tint: "bg-[#FFF9DB]",
  },
  {
    title: "Free sample PDFs",
    description: "Preview and download ready-made worksheets.",
    href: "/worksheets",
    icon: "/classes/nursery.png",
    tint: "bg-[#E8FFF4]",
  },
  {
    title: "Worksheet generator guide",
    description: "How good generators work — then use the app.",
    href: "/tools/worksheet-generator",
    icon: "/activities/writing.png",
    tint: "bg-[#F0EBFF]",
  },
  {
    title: "Get the app",
    description: "Unlimited class + theme PDFs on Google Play.",
    href: "/download",
    icon: "/brand/app_icon.png",
    tint: "bg-[#FFE8F0]",
  },
];
