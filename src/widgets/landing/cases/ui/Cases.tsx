"use client";

import { Carousel, Flex, Typography } from "antd";
import { cases, clientLogos } from "@/shared/content/cases";
import { Section, SectionHeading } from "@/shared/ui";

const { Title, Paragraph, Text } = Typography;

export function Cases() {
  return (
    <Section id="cases" ariaLabelledBy="cases-heading">
      <SectionHeading
        id="cases-heading"
        eyebrow="Клиенты"
        title="Нам доверяют ведущие юридические команды"
      />

      <Carousel autoplay autoplaySpeed={6000} dots={{ className: "inspire-carousel-dots" }}>
        {cases.map((item) => (
          <div key={item.company}>
            <Flex
              vertical
              gap={28}
              style={{
                padding: "clamp(28px, 4vw, 56px)",
                borderRadius: 20,
                border: "1px solid var(--border)",
                background: "color-mix(in oklab, var(--accent) 4%, transparent)",
                minHeight: 280,
              }}
            >
              <Text
                style={{
                  opacity: 0.6,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {item.company}
              </Text>
              <Title
                level={3}
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(22px, 2.6vw, 30px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                «{item.quote}»
              </Title>
              <Flex vertical gap={2}>
                <Text strong>{item.author.name}</Text>
                <Text style={{ opacity: 0.6, fontSize: 14 }}>{item.author.role}</Text>
              </Flex>
            </Flex>
          </div>
        ))}
      </Carousel>

      <Flex
        wrap
        justify="center"
        gap={32}
        style={{
          marginTop: 64,
          paddingTop: 48,
          borderTop: "1px solid var(--border)",
          opacity: 0.7,
        }}
      >
        {clientLogos.map((name) => (
          <Text
            key={name}
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </Text>
        ))}
      </Flex>

      <style>{`
        .inspire-carousel-dots li button { background: var(--accent) !important; opacity: 0.35; }
        .inspire-carousel-dots li.slick-active button { opacity: 1 !important; }
      `}</style>
      <Paragraph style={{ display: "none" }} aria-hidden>
        carousel-fallback
      </Paragraph>
    </Section>
  );
}
