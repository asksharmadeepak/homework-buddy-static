/** Shared types + helpers for the printable worksheet chat tool. */

export type WorksheetChatResult = {
  title: string;
  instructions: string;
  items: string[];
  parentTip: string;
  drawingPrompt: string;
};

export const CHAT_CLASS_OPTIONS = [
  { slug: "nursery", label: "Nursery" },
  { slug: "jr-kg", label: "Jr KG" },
  { slug: "sr-kg", label: "Sr KG" },
  { slug: "class-1", label: "Class 1" },
  { slug: "class-2", label: "Class 2" },
  { slug: "class-3", label: "Class 3" },
] as const;

export const CHAT_ACTIVITY_OPTIONS = [
  { slug: "", label: "Any activity" },
  { slug: "reading", label: "Reading" },
  { slug: "writing", label: "Writing" },
  { slug: "maths", label: "Maths" },
  { slug: "hindi", label: "Hindi" },
  { slug: "coloring", label: "Colouring" },
] as const;

export const CHAT_STARTERS = [
  {
    label: "Nursery tracing",
    classSlug: "nursery",
    activitySlug: "writing",
    prompt: "Gentle line and shape tracing for tonight, about 10 minutes",
  },
  {
    label: "Class 1 Hindi",
    classSlug: "class-1",
    activitySlug: "hindi",
    prompt: "Simple vyanjan practice with pictures, calm 15 minutes",
  },
  {
    label: "Class 2 word problems",
    classSlug: "class-2",
    activitySlug: "maths",
    prompt: "Easy addition and subtraction word problems with everyday objects",
  },
  {
    label: "Jr KG letters",
    classSlug: "jr-kg",
    activitySlug: "writing",
    prompt: "Letter tracing for a few alphabet letters with big spacing",
  },
] as const;

export const GENERATE_WORKSHEET_PATH = "/.netlify/functions/generate-worksheet";

export function trackChatEvent(
  name: "chat_generate_success" | "chat_limit_hit" | "chat_print_click",
  params: Record<string, string | number> = {},
) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, {
      event_category: "worksheet_chat",
      page_path: window.location.pathname,
      ...params,
    });
  } catch {
    /* ignore */
  }
}
