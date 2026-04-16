import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalPages, legalSlugs, type LegalPage } from "@/shared/content/legal";
import { PageShell, Section } from "@/shared/ui";

type Props = { params: Promise<{ slug: LegalPage["slug"] }> };

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) return {};
  return { title: page.title };
}

const dateFmt = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function LegalPageRoute({ params }: Props) {
  const { slug } = await params;
  const page = legalPages[slug];
  if (!page) notFound();

  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(72px, 10vw, 128px)" }}>
        <article style={{ maxWidth: 760 }}>
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
            Правовое
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {page.title}
          </h1>
          <p style={{ opacity: 0.55, fontSize: 14, marginTop: 12 }}>
            Обновлено {dateFmt.format(new Date(page.updated))}
          </p>
          <p style={{ marginTop: 32, fontSize: 18, opacity: 0.8, lineHeight: 1.7 }}>{page.lead}</p>
          <div style={{ marginTop: 48, display: "grid", gap: 40 }}>
            {page.sections.map((s) => (
              <section key={s.heading}>
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {s.heading}
                </h2>
                <p style={{ margin: 0, fontSize: 16, opacity: 0.78, lineHeight: 1.7 }}>{s.body}</p>
              </section>
            ))}
          </div>
        </article>
      </Section>
    </PageShell>
  );
}
