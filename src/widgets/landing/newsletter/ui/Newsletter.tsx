"use client";

import { Flex, Typography } from "antd";
import { NewsletterForm } from "@/features/newsletter-subscribe/ui/NewsletterForm";
import { Section } from "@/shared/ui";

const { Title, Paragraph } = Typography;

export function Newsletter() {
  return (
    <Section id="newsletter">
      <Flex
        vertical
        gap={24}
        style={{
          padding: "clamp(40px, 6vw, 72px)",
          borderRadius: 20,
          border: "1px solid var(--border)",
          background: "color-mix(in oklab, var(--accent) 4%, transparent)",
          maxWidth: 720,
        }}
      >
        <Title
          level={2}
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Рассылка для юристов
        </Title>
        <Paragraph style={{ margin: 0, fontSize: 17, opacity: 0.75 }}>
          Раз в две недели присылаем материалы о legaltech, ИИ в праве и обновлениях продукта. Без
          спама, отписаться можно в один клик.
        </Paragraph>
        <NewsletterForm />
      </Flex>
    </Section>
  );
}
