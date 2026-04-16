import type { Metadata } from "next";
import { PageShell, Section } from "@/shared/ui";
import { PricingGrid } from "@/widgets/landing/pricing/ui/PricingGrid";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Прозрачные тарифы Inspire для юристов, команд и корпораций. Старт, Команда и Enterprise с гибкими условиями.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <PageShell>
      <Section style={{ paddingBlock: "clamp(72px, 10vw, 128px)" }}>
        <header
          style={{ textAlign: "center", maxWidth: 720, marginInline: "auto", marginBottom: 64 }}
        >
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
            Тарифы
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(36px, 5.2vw, 60px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              margin: 0,
            }}
          >
            Выберите тариф под задачи вашей практики
          </h1>
          <p style={{ marginTop: 20, fontSize: 18, opacity: 0.75 }}>
            От индивидуальных юристов до корпоративных юрдепартаментов. Прозрачные условия, без
            скрытых платежей.
          </p>
        </header>
        <PricingGrid />
      </Section>
    </PageShell>
  );
}
