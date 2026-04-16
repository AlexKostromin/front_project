"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Flex, Row, Typography } from "antd";
import Link from "next/link";
import { posts } from "@/shared/content/posts";
import { Section, SectionHeading } from "@/shared/ui";

const { Title, Paragraph, Text } = Typography;

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function BlogTeaser() {
  return (
    <Section id="blog" ariaLabelledBy="blog-heading">
      <Flex align="end" justify="space-between" wrap gap={24} style={{ marginBottom: 48 }}>
        <SectionHeading id="blog-heading" eyebrow="Блог" title="Материалы о legaltech и ИИ" />
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "var(--accent)",
            fontWeight: 500,
            textDecoration: "none",
            marginBottom: 12,
          }}
        >
          Все материалы <ArrowRightOutlined />
        </Link>
      </Flex>

      <Row gutter={[24, 24]}>
        {posts.map((post) => (
          <Col key={post.slug} xs={24} md={8}>
            <Link
              href={`/blog/${post.slug}`}
              style={{
                display: "block",
                height: "100%",
                padding: 24,
                borderRadius: 16,
                border: "1px solid var(--border)",
                textDecoration: "none",
                color: "inherit",
                transition: "border-color 0.2s",
              }}
            >
              <Flex vertical gap={16} style={{ height: "100%" }}>
                <Flex justify="space-between" align="center">
                  {post.tag && (
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--accent)",
                      }}
                    >
                      {post.tag}
                    </Text>
                  )}
                  <Text style={{ opacity: 0.55, fontSize: 13 }}>
                    {dateFormatter.format(new Date(post.date))}
                  </Text>
                </Flex>
                <Title
                  level={3}
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </Title>
                <Paragraph style={{ margin: 0, opacity: 0.7, flex: 1 }}>{post.excerpt}</Paragraph>
              </Flex>
            </Link>
          </Col>
        ))}
      </Row>
    </Section>
  );
}
