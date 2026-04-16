"use client";

import { Typography } from "antd";
import { press } from "@/shared/content/press";
import { Section } from "@/shared/ui";

const { Text } = Typography;

export function Press() {
  return (
    <Section id="press" style={{ paddingBlock: "clamp(40px, 6vw, 72px)" }}>
      <Text
        style={{
          display: "block",
          textAlign: "center",
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: 0.55,
          marginBottom: 24,
        }}
      >
        О нас писали
      </Text>
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {press.map(({ name }) => (
          <Text
            key={name}
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: 20,
              opacity: 0.55,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </Text>
        ))}
      </div>
    </Section>
  );
}
