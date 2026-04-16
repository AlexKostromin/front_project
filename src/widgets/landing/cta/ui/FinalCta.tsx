"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { Section } from "@/shared/ui";
import { useContactModal } from "@/features/contact";

const { Title, Paragraph } = Typography;

export function FinalCta() {
  const openContact = useContactModal((s) => s.openModal);
  return (
    <Section id="contact">
      <div
        style={{
          borderRadius: 24,
          padding: "clamp(48px, 7vw, 96px)",
          background:
            "linear-gradient(135deg, color-mix(in oklab, #3B4FE0 14%, transparent) 0%, color-mix(in oklab, var(--accent) 12%, transparent) 100%)",
          border: "1px solid var(--border)",
        }}
      >
        <Flex vertical gap={24} align="flex-start" style={{ maxWidth: 720 }}>
          <Title
            level={2}
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Готовы попробовать в своей практике?
          </Title>
          <Paragraph style={{ fontSize: 18, opacity: 0.75, margin: 0 }}>
            Покажем возможности на ваших задачах и соберём пилот под процессы команды.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            onClick={openContact}
            icon={<ArrowRightOutlined />}
            iconPlacement="end"
          >
            Связаться с командой
          </Button>
        </Flex>
      </div>
    </Section>
  );
}
