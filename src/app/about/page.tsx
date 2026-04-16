import type { Metadata } from "next";
import { Col, Flex, Row, Typography } from "antd";
import { team } from "@/shared/content/team";
import { PageShell, Section, SectionHeading } from "@/shared/ui";

const { Paragraph, Text, Title } = Typography;

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Inspire — команда юристов и инженеров, строящая инструменты для ежедневной юридической практики.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(72px, 10vw, 128px)" }}>
        <header style={{ maxWidth: 760, marginBottom: 64 }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent)",
              margin: 0,
              marginBottom: 12,
            }}
          >
            О компании
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(36px, 5.2vw, 60px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            Юристы и инженеры, перестраивающие профессию изнутри
          </h1>
          <Paragraph style={{ marginTop: 24, fontSize: 18, opacity: 0.78, maxWidth: 640 }}>
            Inspire создан практикующими юристами в партнёрстве с инженерами, у которых за плечами
            поисковые системы и LLM-инфраструктура. Мы калибруем продукт на реальных делах и
            работаем с обратной связью команд, которые им пользуются каждый день.
          </Paragraph>
        </header>

        <SectionHeading
          eyebrow="Команда"
          title="Кто стоит за продуктом"
          description="Ключевые роли, отвечающие за продукт, право и инфраструктуру."
        />

        <Row gutter={[24, 24]}>
          {team.map((member) => (
            <Col key={member.name} xs={24} sm={12} lg={8}>
              <Flex
                vertical
                gap={16}
                style={{
                  height: "100%",
                  padding: 28,
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  background: "color-mix(in oklab, var(--bg-raised) 50%, transparent)",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background: "color-mix(in oklab, var(--accent) 18%, transparent)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-display), serif",
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <Title level={3} style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                    {member.name}
                  </Title>
                  <Text
                    style={{ display: "block", marginTop: 4, fontSize: 13, color: "var(--accent)" }}
                  >
                    {member.role}
                  </Text>
                </div>
                <Paragraph style={{ margin: 0, fontSize: 14, opacity: 0.72 }}>
                  {member.bio}
                </Paragraph>
              </Flex>
            </Col>
          ))}
        </Row>
      </Section>
    </PageShell>
  );
}
