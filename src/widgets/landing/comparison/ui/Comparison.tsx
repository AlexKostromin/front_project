"use client";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useState } from "react";
import { comparison } from "@/shared/content/comparison";
import { Section, SectionHeading } from "@/shared/ui";

const { Text, Title } = Typography;

export function Comparison() {
  const [active, setActive] = useState(0);
  const row = comparison[active];

  return (
    <Section id="comparison">
      <SectionHeading
        eyebrow="Отличия"
        title={
          <>
            Inspire <em style={{ fontStyle: "italic", opacity: 0.85 }}>vs</em> обычные ИИ
          </>
        }
        description="Выберите критерий слева — справа увидите, как универсальный чат-бот и Inspire отвечают на этот вопрос."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(220px, 320px) 1fr",
          gap: 32,
          alignItems: "stretch",
        }}
        className="comparison-grid"
      >
        <ul
          role="tablist"
          aria-label="Критерии сравнения"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {comparison.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.feature}>
                <button
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActive(i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    border: "1px solid",
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                    background: isActive
                      ? "color-mix(in oklab, var(--accent) 12%, transparent)"
                      : "transparent",
                    borderRadius: 14,
                    padding: "16px 18px",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    fontSize: 15,
                    fontWeight: isActive ? 600 : 500,
                    transition:
                      "background 180ms ease, border-color 180ms ease, transform 180ms ease",
                    transform: isActive ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      aria-hidden
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        display: "grid",
                        placeItems: "center",
                        fontFamily: "var(--font-display), serif",
                        fontSize: 14,
                        fontWeight: 500,
                        background: isActive
                          ? "var(--accent)"
                          : "color-mix(in oklab, var(--bg-raised) 70%, transparent)",
                        color: isActive ? "#0e1116" : "inherit",
                        opacity: isActive ? 1 : 0.7,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.feature}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      fontSize: 16,
                      color: "var(--accent)",
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 180ms ease",
                    }}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div
          role="tabpanel"
          key={row.feature}
          style={{
            position: "relative",
            border: "1px solid var(--border)",
            borderRadius: 20,
            background: "color-mix(in oklab, var(--bg-raised) 50%, transparent)",
            padding: "32px 32px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            animation: "comparison-fade 320ms ease",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            Критерий
          </Text>
          <Title
            level={3}
            style={{
              margin: 0,
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(26px, 3vw, 36px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {row.feature}
          </Title>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
            className="comparison-versus"
          >
            <SideCard
              tone="muted"
              label="Обычные ИИ"
              icon={<CloseOutlined />}
              accent="#c04040"
              text={row.generic}
            />
            <SideCard
              tone="accent"
              label="Inspire"
              icon={<CheckOutlined />}
              accent="var(--accent)"
              text={row.inspire}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes comparison-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .comparison-grid { grid-template-columns: 1fr !important; }
          .comparison-versus { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

function SideCard({
  tone,
  label,
  icon,
  accent,
  text,
}: {
  tone: "muted" | "accent";
  label: string;
  icon: React.ReactNode;
  accent: string;
  text: string;
}) {
  const isAccent = tone === "accent";
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 14,
        border: isAccent
          ? "1px solid color-mix(in oklab, var(--accent) 45%, var(--border))"
          : "1px solid var(--border)",
        background: isAccent
          ? "linear-gradient(160deg, color-mix(in oklab, var(--accent) 14%, transparent), transparent)"
          : "color-mix(in oklab, var(--bg-raised) 35%, transparent)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          aria-hidden
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            background: `color-mix(in oklab, ${accent} 18%, transparent)`,
            color: accent,
            fontSize: 12,
          }}
        >
          {icon}
        </span>
        <Text
          strong
          style={{
            fontSize: 13,
            letterSpacing: "0.04em",
            color: isAccent ? "var(--accent)" : undefined,
          }}
        >
          {label}
        </Text>
      </div>
      <Text style={{ fontSize: 15, lineHeight: 1.55, opacity: isAccent ? 0.92 : 0.72 }}>
        {text}
      </Text>
    </div>
  );
}
