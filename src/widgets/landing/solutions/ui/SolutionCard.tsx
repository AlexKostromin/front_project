"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Flex, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";
import type { Solution } from "@/entities/solution/model/types";

const { Title, Paragraph } = Typography;

export function SolutionCard({ solution }: { solution: Solution }) {
  const { Icon, title, description, href } = solution;
  const [hover, setHover] = useState(false);
  return (
    <Card
      variant="outlined"
      hoverable={Boolean(href)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        height: "100%",
        background: "transparent",
        borderColor: hover ? "var(--accent)" : undefined,
        boxShadow: hover
          ? "0 18px 40px -24px color-mix(in oklab, var(--accent) 55%, transparent)"
          : undefined,
        transform: hover ? "translateY(-2px)" : undefined,
        transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
      }}
      styles={{ body: { padding: 28, height: "100%" } }}
    >
      <Flex vertical gap={20} style={{ height: "100%" }}>
        <div
          aria-hidden
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            display: "grid",
            placeItems: "center",
            background: hover
              ? "color-mix(in oklab, var(--accent) 28%, transparent)"
              : "color-mix(in oklab, var(--accent) 16%, transparent)",
            color: "var(--accent)",
            fontSize: 22,
            transition: "background 200ms ease",
          }}
        >
          <Icon />
        </div>
        <Title level={3} style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
          {title}
        </Title>
        <Paragraph style={{ margin: 0, opacity: 0.72, flex: 1 }}>{description}</Paragraph>
        {href && (
          <Link
            href={href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Узнать больше <ArrowRightOutlined />
          </Link>
        )}
      </Flex>
    </Card>
  );
}
