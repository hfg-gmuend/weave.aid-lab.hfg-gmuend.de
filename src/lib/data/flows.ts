export interface FlowLink {
  label: string;
  url: string;
  thumb: string;
}

export interface Flow {
  id: number;
  title: string;
  category: string;
  youtube: string;
  links: FlowLink[];
}

export const flows: Flow[] = [
  {
    id: 1,
    title: "Kling 3.0 Elements Explained: How to Build Cinematic AI Video Workflows in Weavy",
    category: "workflow",
    youtube: "https://www.youtube.com/watch?v=HnGADNc8tmU",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/4dwSphvWk8s9p6xiHnb1GP/", thumb: "/assets/flow-1.png" },
    ],
  },
  {
    id: 2,
    title: "Weavy Compare Node – Tough Choices Made Easy",
    category: "feature",
    youtube: "https://www.youtube.com/watch?v=yoOIFBpBeDk",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/xIhRLLcYnkAEi30fvVyVX2", thumb: "/assets/flow-2.png" },
    ],
  },
  {
    id: 3,
    title: "Weavy Prompt Variables – No More Static Prompts",
    category: "feature",
    youtube: "https://www.youtube.com/watch?v=leLgmplzV9A",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/AcdWrzX9zsvHNMWcxRfsyf/", thumb: "/assets/flow-3.png" },
    ],
  },
  {
    id: 4,
    title: "How to Use Prompt Variables in Weavy: Step-by-Step Tutorial",
    category: "tutorial",
    youtube: "https://www.youtube.com/watch?v=kA_QQ77i0_E",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/Vmj1k59RVKNpm7pnE5olM0/", thumb: "/assets/flow-4.png" },
    ],
  },
  {
    id: 5,
    title: "How to Go Beyond Static Prompts: Advanced Prompt Variables in Weavy",
    category: "tutorial",
    youtube: "https://www.youtube.com/watch?v=CCz7qQgwUwI",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/Z0KBgmH1NP979g6RBxtNBZ", thumb: "/assets/flow-5.png" },
    ],
  },
  {
    id: 6,
    title: "Replay Weavy Flow State #1 – Live With Rory Flynn",
    category: "live",
    youtube: "https://www.youtube.com/watch?v=AxV8TR3BdqI",
    links: [
      { label: "Flow A", url: "https://app.weavy.ai/flow/hxqDZ0MI8gYbeTEK8wlgND", thumb: "/assets/flow-6a.png" },
      { label: "Flow B", url: "https://app.weavy.ai/flow/0k0sVt5jsdmXyJlSkoUju8/", thumb: "/assets/flow-6b.png" },
      { label: "Flow C", url: "https://app.weavy.ai/flow/0yeWzFPUTCfV5ZDQn7usXl/", thumb: "/assets/flow-6c.png" },
    ],
  },
  {
    id: 7,
    title: "How to Build Consistent AI Machines: a Weavy Workflow Tutorial",
    category: "tutorial",
    youtube: "https://www.youtube.com/watch?v=r8UXsp2f7M4",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/WJ7ItvZApbfzCgBcpEi2Kl", thumb: "/assets/flow-7.png" },
    ],
  },
  {
    id: 8,
    title: "Level Up Your Workflows with System Prompts",
    category: "tutorial",
    youtube: "https://www.youtube.com/watch?v=CW2FohzNxMI",
    links: [
      { label: "Flow A", url: "https://app.weavy.ai/flow/XVaA078kDhD2CXL9IfOaHN", thumb: "/assets/flow-8a.png" },
      { label: "Flow B", url: "https://app.weavy.ai/flow/wF5rxs66oMIE0fgJLI2Ztf", thumb: "/assets/flow-8b.png" },
      { label: "Flow C", url: "https://app.weavy.ai/flow/YANQxyBcjvtp2Pd5RkNdzE", thumb: "/assets/flow-8c.png" },
      { label: "Flow D", url: "https://app.weavy.ai/flow/c9qYILDTDqCF8YxyjaQwEj", thumb: "/assets/flow-8d.png" },
    ],
  },
  {
    id: 9,
    title: "Video Compositor Deep Dive | Match Split & Picture-in-Picture Effects in Weavy",
    category: "feature",
    youtube: "https://www.youtube.com/watch?v=GJDH6UIfKWo",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/exgABVaXQ37X3tI9C5ZFu5", thumb: "/assets/flow-9.png" },
    ],
  },
  {
    id: 10,
    title: "Weavy Iterators – From One Giraffe to an Entire Zoo",
    category: "feature",
    youtube: "https://www.youtube.com/watch?v=yw-8rfVseiY",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/wOvuFMAkSufJ2RoG8skLfH", thumb: "/assets/flow-10.png" },
    ],
  },
  {
    id: 11,
    title: "How to Use Iterators in Weavy – Batch Prompts, Images, and Variations (Full Tutorial)",
    category: "tutorial",
    youtube: "https://www.youtube.com/watch?v=_uIxc7IaW9c",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/wOvuFMAkSufJ2RoG8skLfH", thumb: "/assets/flow-11.png" },
    ],
  },
  {
    id: 12,
    title: "Everything You Can Do to Images – Now for Video | Weavy Video Transformation",
    category: "feature",
    youtube: "https://www.youtube.com/watch?v=K-AVMMLJbpQ",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/dvS9AhzPxvlzuI9hnUdVJz", thumb: "/assets/flow-12.png" },
    ],
  },
  {
    id: 13,
    title: "Build Multi-Layer AI Videos with Weavy's Compositor",
    category: "workflow",
    youtube: "https://www.youtube.com/watch?v=kfbWz9_bJoA",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/dvS9AhzPxvlzuI9hnUdVJz", thumb: "/assets/flow-13.png" },
    ],
  },
  {
    id: 14,
    title: "How We Finally Fixed VEO's Voice Problem (and Made It Even Better)",
    category: "workflow",
    youtube: "https://www.youtube.com/watch?v=AwkZJXDw8FQ",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/yLzK65cxJvODT0FGo1zBbF", thumb: "/assets/flow-14.png" },
    ],
  },
  {
    id: 15,
    title: "AI Workflow for Brand Design – Build Your System with Weavy",
    category: "workflow",
    youtube: "https://www.youtube.com/watch?v=vhC9SJLtEIc",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/8VFi3fuRYZ6T6Eu4RpKs4C", thumb: "/assets/flow-15.png" },
    ],
  },
  {
    id: 16,
    title: "How to Build a Brand System with AI – Full Workflow Tutorial Using Weavy",
    category: "tutorial",
    youtube: "https://www.youtube.com/watch?v=EUoxqNlGOUM",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/8VFi3fuRYZ6T6Eu4RpKs4C", thumb: "/assets/flow-16.png" },
    ],
  },
  {
    id: 17,
    title: "Weavy Compositor: Layer-Based Editing Meets Generative AI",
    category: "feature",
    youtube: "https://www.youtube.com/watch?v=XEHwuVAEx8g",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/a2JaRDaY05DuuRhTemiM5U", thumb: "/assets/flow-17.png" },
    ],
  },
  {
    id: 18,
    title: "Test & Compare AI Models in One Creative Flow | Weavy Workflow Demo",
    category: "workflow",
    youtube: "https://www.youtube.com/watch?v=suieSOi7KiM",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/dIjHiwG4WWVtodBraoA2", thumb: "/assets/flow-18.png" },
    ],
  },
  {
    id: 19,
    title: "Tutorial 01: How to Build Your First AI Workflow in Weavy (The Right Way)",
    category: "tutorial-series",
    youtube: "https://www.youtube.com/watch?v=ihOFi5lpQr8",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/AcmG6pds6B8AcDDt2bR9", thumb: "/assets/flow-19.png" },
    ],
  },
  {
    id: 20,
    title: "Tutorial 02: Total Creative Control – Layer, Mask, and Compose Like a Pro",
    category: "tutorial-series",
    youtube: "https://www.youtube.com/watch?v=zQGutL3RZbU",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/OKgXiTXuSlAiI8AOHg86tn", thumb: "/assets/flow-20.png" },
    ],
  },
  {
    id: 21,
    title: "Tutorial 03: Using 3D in Weavy – How the Pros Do It",
    category: "tutorial-series",
    youtube: "https://www.youtube.com/watch?v=9uTXPdZbidc",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/SZXXYN7L9PN2SCTVYAlt", thumb: "/assets/flow-21.png" },
    ],
  },
  {
    id: 22,
    title: "Tutorial 04: Build Your Own Design App – From Workflow to Scalable Tool",
    category: "tutorial-series",
    youtube: "https://www.youtube.com/watch?v=aEoHwSdWWWM",
    links: [
      { label: "Flow A", url: "https://app.weavy.ai/flow/w2XgD044RfY7I0RmzQiF", thumb: "/assets/flow-22a.png" },
      { label: "Flow B", url: "https://app.weavy.ai/flow/XvULalxaRR01K0RA1T0Kqx", thumb: "/assets/flow-22b.png" },
    ],
  },
  {
    id: 23,
    title: "AI Sketch to Render Workflow for Architects – From Concept to Client-Ready",
    category: "architecture",
    youtube: "https://www.youtube.com/watch?v=I4OtIpyI2d0",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/XKQz8kaj11ZpGXmxnHuSi9", thumb: "/assets/flow-23.png" },
    ],
  },
  {
    id: 24,
    title: "ControlNet for Architects – From Floorplans to Visual Concepts with AI",
    category: "architecture",
    youtube: "https://www.youtube.com/watch?v=5uYIeHZ_a7c",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/iHGPWhMzTjNLF9JYEHXrqj", thumb: "/assets/flow-24.png" },
    ],
  },
  {
    id: 25,
    title: "AI Visualization Style Change for Architects — Explore Multiple Aesthetics",
    category: "architecture",
    youtube: "https://www.youtube.com/watch?v=EQLRpDV9O74",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/BWudT5VUXUF6dSTW2jwiB8", thumb: "/assets/flow-25.png" },
    ],
  },
  {
    id: 26,
    title: "From Moodboard to Architectural Concept with AI — Fast Ideation Workflow",
    category: "architecture",
    youtube: "https://www.youtube.com/watch?v=OmQoVyVPwsM",
    links: [
      { label: "Flow", url: "https://app.weavy.ai/flow/Q7Qz1PvwKDeOhPXJ3VYFu1", thumb: "/assets/flow-26.png" },
    ],
  },
];

export const categories = [...new Set(flows.map((f) => f.category))];

export const categoryLabels: Record<string, string> = {
  workflow: 'Workflow',
  feature: 'Feature',
  tutorial: 'Tutorial',
  'tutorial-series': 'Tutorial Series',
  live: 'Live',
  architecture: 'Architecture',
};

export function getCategoryCount(category: string | null): number {
  if (!category) return flows.length;
  return flows.filter((f) => f.category === category).length;
}
