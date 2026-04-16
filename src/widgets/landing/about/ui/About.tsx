"use client";

import { Col, Flex, Row, Typography } from "antd";

import { partners } from "@/shared/content/partners";
import { Section, SectionHeading } from "@/shared/ui";

const { Paragraph, Text } = Typography;

export function About() {
  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <Row gutter={[48, 48]} align="top">
        <Col xs={24} lg={10}>
          <SectionHeading
            id="about-heading"
            eyebrow="О нас"
            title="Сокращаем бюрократию и переопределяем юридическую рутину"
          />
        </Col>
        <Col xs={24} lg={14}>
          <Paragraph style={{ fontSize: 18, opacity: 0.8, margin: 0, maxWidth: 560 }}>
            Inspire — команда юристов и инженеров, которая строит инструменты для ежедневной
            практики. Мы верим, что технологии должны освобождать время специалистов для
            содержательной работы, а не добавлять новый слой сложности.
          </Paragraph>
          <Paragraph style={{ fontSize: 16, opacity: 0.65, marginTop: 24, maxWidth: 560 }}>
            Продукт создаётся в сотрудничестве с партнёрами из юридической индустрии и
            технологическими платформами.
          </Paragraph>
        </Col>
      </Row>

      <div
        style={{
          marginTop: 72,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {partners.map((partner) => (
          <Flex
            key={partner.name}
            vertical
            gap={4}
            style={{
              padding: "20px 24px",
              border: "1px solid var(--border)",
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 17,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              {partner.name}
            </Text>
            {partner.caption && (
              <Text style={{ opacity: 0.6, fontSize: 13 }}>{partner.caption}</Text>
            )}
          </Flex>
        ))}
      </div>
    </Section>
  );
}
