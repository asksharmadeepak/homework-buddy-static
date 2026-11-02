/** Visible app-CTA copy. Store URLs stay the same; only the words change. */
export function appCtaCopy(input: {
  className?: string;
  classSlug?: string;
  activitySlug?: string;
}): { title: string; body: string; storeLabel: string } {
  const name = input.className;
  if (input.activitySlug === "hindi") {
    return {
      title: "Want more Hindi practice worksheets?",
      body: "Explore more Hindi learning activities and create printable worksheets for your child.",
      storeLabel: "Create more worksheets",
    };
  }
  if (input.activitySlug === "maths" && name) {
    return {
      title: `Need more ${name} Maths practice?`,
      body: "Create additional Maths activities and printable worksheets with Homework Buddy.",
      storeLabel: "Explore Homework Buddy",
    };
  }
  if (input.classSlug === "nursery") {
    return {
      title: "Need more Nursery worksheets?",
      body: "Create more early-learning worksheets with different activities and themes using Homework Buddy.",
      storeLabel: "Get Homework Buddy",
    };
  }
  if (name) {
    return {
      title: `Need more ${name} worksheets?`,
      body: `Create more ${name} activities and printable worksheets with different themes in Homework Buddy.`,
      storeLabel: "Get Homework Buddy",
    };
  }
  return {
    title: "Need more worksheets for your child?",
    body: "Choose your child's class, select an activity and theme, preview your worksheet and download a printable PDF.",
    storeLabel: "Get Homework Buddy",
  };
}
