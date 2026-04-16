"use client";

import { Typography } from "antd";
import { compliance } from "@/shared/content/compliance";
import { Section } from "@/shared/ui";

const { Text } = Typography;

export function Compliance() {
  return (
    <Section id="compliance" style={{ paddingBlock: "clamp(40px, 6vw, 72px)" }}>
      <div
        style={{
          padding: "28px 32px",
          borderRadius: 16,
          border: "1px solid var(--border)",
          background: "color-mix(in oklab, var(--bg-raised) 50%, transparent)",
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          alignItems: "center",
        }}
      >
        {compliance.map(({ label, hint, Icon }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              aria-hidden
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                display: "grid",
                placeItems: "center",
                background: "color-mix(in oklab, var(--accent) 14%, transparent)",
                color: "var(--accent)",
                fontSize: 17,
                flexShrink: 0,
              }}
            >
              <Icon />
            </div>
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <Text strong style={{ fontSize: 14, lineHeight: 1.2 }}>
                {label}
              </Text>
              <Text style={{ fontSize: 12, opacity: 0.6, lineHeight: 1.3 }}>{hint}</Text>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
