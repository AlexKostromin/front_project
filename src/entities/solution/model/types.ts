import type { ComponentType } from "react";

export type SolutionIcon = ComponentType<{ style?: React.CSSProperties }>;

export type Solution = {
  slug: string;
  title: string;
  description: string;
  Icon: SolutionIcon;
  href?: string;
};
