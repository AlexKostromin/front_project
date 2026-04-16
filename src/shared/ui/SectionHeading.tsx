"use client";

import { Typography } from "antd";
import type { ReactNode } from "react";

const { Title, Paragraph, Text } = Typography;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <header
      style={{
        textAlign: align,
        maxWidth: 720,
        marginInline: align === "center" ? "auto" : undefined,
        marginBottom: 48,
      }}
    >
      {eyebrow && (
        <Text
          style={{
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 16,
            color: "var(--accent, #D4A054)",
          }}
        >
          {eyebrow}
        </Text>
      )}
      <Title
        id={id}
        level={2}
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(32px, 4.5vw, 52px)",
          lineHeight: 1.1,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {title}
      </Title>
      {description && (
        <Paragraph
          style={{
            marginTop: 16,
            marginBottom: 0,
            fontSize: 18,
            opacity: 0.75,
          }}
        >
          {description}
        </Paragraph>
      )}
    </header>
  );
}
