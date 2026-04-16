"use client";

import { Col, Row, Typography } from "antd";
import { benefits } from "@/shared/content/benefits";
import { CountUp, Section, SectionHeading } from "@/shared/ui";

const { Title, Text } = Typography;

export function Benefits() {
  return (
    <Section id="benefits" ariaLabelledBy="benefits-heading">
      <SectionHeading
        id="benefits-heading"
        eyebrow="Преимущества"
        title="Цифры, за которыми работа юристов и инженеров"
        description="Продукт калиброван на реальных задачах и соответствует требованиям по защите данных."
      />
      <Row gutter={[24, 48]}>
        {benefits.map((b) => (
          <Col key={b.label} xs={24} sm={12} lg={6}>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 24,
              }}
            >
              <Title
                level={3}
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                <CountUp value={b.value} />
              </Title>
              <Text
                style={{
                  display: "block",
                  marginTop: 12,
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {b.label}
              </Text>
              {b.hint && (
                <Text style={{ display: "block", marginTop: 6, fontSize: 14, opacity: 0.6 }}>
                  {b.hint}
                </Text>
              )}
              {b.breakdown && (
                <Text
                  style={{
                    display: "block",
                    marginTop: 12,
                    fontSize: 12.5,
                    opacity: 0.5,
                    letterSpacing: "0.02em",
                  }}
                >
                  {b.breakdown.join(" · ")}
                </Text>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Section>
  );
}
