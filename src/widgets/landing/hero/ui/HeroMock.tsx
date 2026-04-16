import { CheckCircleFilled, SearchOutlined } from "@ant-design/icons";

const results = [
  {
    tag: "ВС РФ · 2025",
    title: "Определение № 305-ЭС24-1842",
    snippet:
      "Разъяснён порядок применения ст. 333 ГК при снижении неустойки по договорам займа между юрлицами.",
    match: "97%",
  },
  {
    tag: "9 ААС · 2024",
    title: "Постановление № 09АП-45872/2024",
    snippet:
      "Суд применил принципы добросовестности при оценке односторонних изменений условий кредитования.",
    match: "93%",
  },
  {
    tag: "АС г. Москвы · 2024",
    title: "Решение по делу № А40-112543/24",
    snippet: "Позиция суда по соотношению неустойки и убытков в контексте п. 2 ст. 394 ГК.",
    match: "89%",
  },
];

export function HeroMock() {
  return (
    <div
      aria-hidden
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 520,
        marginLeft: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -24,
          borderRadius: 28,
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--accent) 22%, transparent), color-mix(in oklab, #3B4FE0 18%, transparent))",
          filter: "blur(40px)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          borderRadius: 20,
          border: "1px solid var(--border)",
          background: "var(--bg-raised)",
          boxShadow: "0 24px 60px -24px rgba(14, 17, 22, 0.25)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 18px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E06B5E" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E4B85E" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#6EBE6E" }} />
          <span
            style={{
              marginLeft: "auto",
              fontSize: 12,
              opacity: 0.55,
              fontFamily: "var(--font-sans)",
            }}
          >
            inspire / поиск
          </span>
        </div>

        <div style={{ padding: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 10,
              background: "color-mix(in oklab, var(--accent) 8%, transparent)",
              border: "1px solid var(--border)",
            }}
          >
            <SearchOutlined style={{ opacity: 0.6 }} />
            <span style={{ fontSize: 14, opacity: 0.85 }}>
              снижение неустойки по договору займа
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 11,
                padding: "3px 8px",
                borderRadius: 6,
                background: "color-mix(in oklab, var(--accent) 22%, transparent)",
                color: "var(--accent)",
                fontWeight: 600,
              }}
            >
              ИИ
            </span>
          </div>

          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {results.map((r) => (
              <div
                key={r.title}
                style={{
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10.5,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.55,
                      fontWeight: 600,
                    }}
                  >
                    {r.tag}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircleFilled /> {r.match}
                  </span>
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 4 }}>{r.title}</div>
                <div style={{ fontSize: 12.5, opacity: 0.7, lineHeight: 1.5 }}>{r.snippet}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              padding: "10px 14px",
              borderRadius: 10,
              background: "color-mix(in oklab, var(--accent) 10%, transparent)",
              fontSize: 12,
              opacity: 0.85,
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: "var(--accent)" }}>Ответ ИИ.</strong> Позиция ВС допускает
            снижение неустойки при очевидной несоразмерности; нижестоящие инстанции применяют подход
            последовательно.
          </div>
        </div>
      </div>
    </div>
  );
}
