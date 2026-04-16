import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/shared/content/posts";
import { PageShell, Section } from "@/shared/ui";

export const metadata: Metadata = {
  title: "Блог",
  description: "Материалы о legaltech, ИИ в праве и обновлениях продукта Inspire.",
};

const dateFmt = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogIndex() {
  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(72px, 10vw, 128px)" }}>
        <header style={{ maxWidth: 720, marginBottom: 64 }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent)",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Блог
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Материалы о legaltech
          </h1>
          <p style={{ marginTop: 16, fontSize: 18, opacity: 0.72 }}>
            Разборы задач, технологий и кейсов из ежедневной юридической практики.
          </p>
        </header>

        <div style={{ display: "grid", gap: 16 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "block",
                padding: "28px 32px",
                border: "1px solid var(--border)",
                borderRadius: 16,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                {post.tag && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--accent)",
                    }}
                  >
                    {post.tag}
                  </span>
                )}
                <span style={{ opacity: 0.55, fontSize: 13 }}>
                  {dateFmt.format(new Date(post.date))}
                </span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.25 }}>{post.title}</div>
              <div style={{ marginTop: 10, opacity: 0.7, fontSize: 15 }}>{post.excerpt}</div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
