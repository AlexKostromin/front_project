import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/shared/content/posts";
import { PageShell, Section } from "@/shared/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const dateFmt = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(72px, 10vw, 128px)" }}>
        <article style={{ maxWidth: 720 }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              color: "var(--accent)",
              textDecoration: "none",
              marginBottom: 32,
            }}
          >
            ← Ко всем материалам
          </Link>

          {post.tag && (
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
              {post.tag}
            </p>
          )}

          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {post.title}
          </h1>

          <p style={{ opacity: 0.55, fontSize: 14, marginTop: 16 }}>
            {dateFmt.format(new Date(post.date))}
          </p>

          <div style={{ marginTop: 40, display: "grid", gap: 24 }}>
            {(post.body ?? [post.excerpt]).map((paragraph, i) => (
              <p
                key={i}
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.7,
                  opacity: 0.85,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Section>
    </PageShell>
  );
}
