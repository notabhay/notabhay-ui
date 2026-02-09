export interface TargetApp {
  slug: string;
  port: number;
}

export const templateTargets: TargetApp[] = [
  { slug: "void", port: 3001 },
  { slug: "neon", port: 3002 },
  { slug: "brutalist", port: 3003 },
  { slug: "bloom", port: 3004 },
  { slug: "editorial", port: 3005 },
  { slug: "glass", port: 3006 },
  { slug: "swiss", port: 3007 },
  { slug: "ember", port: 3008 },
  { slug: "candy", port: 3009 },
];
