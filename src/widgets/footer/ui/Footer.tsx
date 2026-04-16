"use client";

import { Col, Divider, Flex, Row, Typography } from "antd";
import Link from "next/link";
import { footerNav, site } from "@/shared/config/site";
import { Container } from "@/shared/ui";

const { Title, Text, Paragraph } = Typography;

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border, rgba(0,0,0,0.06))",
        paddingBlock: "64px 32px",
        marginTop: 64,
      }}
    >
      <Container>
        <Row gutter={[48, 48]}>
          <Col xs={24} md={8}>
            <Title
              level={4}
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: 24,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {site.name}
            </Title>
            <Paragraph style={{ marginTop: 12, opacity: 0.7, maxWidth: 360 }}>
              {site.description}
            </Paragraph>
          </Col>

          {footerNav.map((column) => (
            <Col key={column.title} xs={12} md={4}>
              <Text
                strong
                style={{
                  display: "block",
                  marginBottom: 16,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  opacity: 0.6,
                }}
              >
                {column.title}
              </Text>
              <Flex vertical gap={10}>
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: 14,
                      opacity: 0.8,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Col>
          ))}
        </Row>

        <Divider style={{ marginBlock: 48 }} />

        <Flex wrap justify="space-between" gap={16}>
          <Text style={{ opacity: 0.6, fontSize: 13 }}>
            © {new Date().getFullYear()} {site.legal.company}. Все права защищены.
          </Text>
          <Text style={{ opacity: 0.6, fontSize: 13 }}>{site.legal.address}</Text>
        </Flex>
      </Container>
    </footer>
  );
}
