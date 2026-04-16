import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  style,
  bleed = false,
  ariaLabelledBy,
}: {
  id?: string;
  children: ReactNode;
  style?: CSSProperties;
  bleed?: boolean;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      style={{
        paddingBlock: "clamp(64px, 10vw, 128px)",
        ...style,
      }}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
