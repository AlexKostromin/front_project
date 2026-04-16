"use client";

import { Collapse } from "antd";
import { faq } from "@/shared/content/faq";
import { Section, SectionHeading } from "@/shared/ui";

export function Faq() {
  return (
    <Section id="faq" ariaLabelledBy="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow="FAQ"
        title="Частые вопросы"
        description="Если нужного ответа нет — напишите нам, команда разберёт вашу задачу."
      />
      <Collapse
        accordion
        bordered={false}
        expandIconPlacement="end"
        items={faq.map((item, i) => ({
          key: String(i),
          label: (
            <span
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {item.q}
            </span>
          ),
          children: (
            <p style={{ margin: 0, fontSize: 16, opacity: 0.75, lineHeight: 1.6 }}>{item.a}</p>
          ),
          style: {
            borderBottom: "1px solid var(--border)",
            padding: "12px 0",
            background: "transparent",
          },
        }))}
        style={{ background: "transparent" }}
      />
    </Section>
  );
}
