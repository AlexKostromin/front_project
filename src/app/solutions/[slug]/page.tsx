import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { solutions } from "@/shared/content/solutions";
import { PageShell, Section } from "@/shared/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const { Icon } = solution;
  const others = solutions.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(72px, 10vw, 128px)" }}>
        <article style={{ maxWidth: 820 }}>
          <Link
            href="/#solutions"
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
            ← К списку возможностей
          </Link>

          <div
            aria-hidden
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "grid",
              placeItems: "center",
              background: "color-mix(in oklab, var(--accent) 16%, transparent)",
              color: "var(--accent)",
              fontSize: 28,
              marginBottom: 32,
            }}
          >
            <Icon />
          </div>

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
            {solution.title}
          </h1>
          <p style={{ marginTop: 24, fontSize: 20, opacity: 0.78, lineHeight: 1.6 }}>
            {solution.description}
          </p>

          <div style={{ marginTop: 48 }}>
            <Button
              type="primary"
              size="large"
              href="/#contact"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Обсудить внедрение
            </Button>
          </div>

          <div
            style={{
              marginTop: 96,
              paddingTop: 48,
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2
              style={{
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                opacity: 0.55,
                fontWeight: 600,
                margin: 0,
                marginBottom: 24,
              }}
            >
              Другие возможности
            </h2>
            <div style={{ display: "grid", gap: 16 }}>
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/solutions/${o.slug}`}
                  style={{
                    display: "block",
                    padding: 20,
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ fontSize: 17, fontWeight: 600 }}>{o.title}</div>
                  <div style={{ marginTop: 6, fontSize: 14, opacity: 0.7 }}>{o.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </Section>
    </PageShell>
  );
}
