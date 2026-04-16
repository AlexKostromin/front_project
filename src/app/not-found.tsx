import Link from "next/link";
import { PageShell, Section } from "@/shared/ui";

export default function NotFound() {
  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(96px, 14vw, 176px)" }}>
        <div style={{ textAlign: "center", maxWidth: 560, marginInline: "auto" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent)",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Ошибка 404
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(64px, 10vw, 128px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Не найдено
          </h1>
          <p style={{ marginTop: 24, fontSize: 18, opacity: 0.72 }}>
            Такой страницы у нас нет — возможно, она была перемещена или ссылка устарела. Вернёмся к
            началу?
          </p>
          <div
            style={{
              marginTop: 40,
              display: "inline-flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 44,
                padding: "0 24px",
                borderRadius: 10,
                background: "var(--accent)",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              На главную
            </Link>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 44,
                padding: "0 24px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                color: "inherit",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Читать блог
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
