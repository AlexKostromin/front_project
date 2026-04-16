"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Space, Typography } from "antd";
import { Section } from "@/shared/ui";
import { useContactModal } from "@/features/contact";
import { HeroMock } from "./HeroMock";

const { Title, Paragraph, Text } = Typography;

export function Hero() {
  const openContact = useContactModal((s) => s.openModal);
  return (
    <Section
      id="hero"
      style={{
        paddingBlock: "clamp(96px, 14vw, 176px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Row gutter={[64, 64]} align="middle">
        <Col xs={24} lg={13}>
          <Flex vertical gap={28}>
            <Text
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              AI · LEGAL · RU
            </Text>
            <Title
              level={1}
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(44px, 6.6vw, 84px)",
                lineHeight: 1.02,
                fontWeight: 500,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Больше, чем ИИ&nbsp;— <em style={{ fontStyle: "italic", opacity: 0.85 }}>партнёр</em>
              &nbsp;в&nbsp;юридической практике.
            </Title>
            <Paragraph style={{ fontSize: 19, opacity: 0.72, margin: 0, maxWidth: 560 }}>
              Инструменты для поиска практики, анализа документов и подготовки процессуальных
              материалов. Калибровано юристами и инженерами — без галлюцинаций, без компромиссов по
              безопасности.
            </Paragraph>
            <Space size={12} wrap style={{ marginTop: 8 }}>
              <Button
                type="primary"
                size="large"
                onClick={openContact}
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Связаться
              </Button>
              <Button size="large" href="#solutions">
                Посмотреть возможности
              </Button>
            </Space>
          </Flex>
        </Col>
        <Col xs={0} lg={11}>
          <HeroMock />
        </Col>
      </Row>
    </Section>
  );
}
