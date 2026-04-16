export type Benefit = {
  value: string;
  label: string;
  hint?: string;
  breakdown?: string[];
};

export const benefits: Benefit[] = [
  {
    value: "+40%",
    label: "экономии времени",
    hint: "На рутинных задачах по сравнению с ручной работой",
    breakdown: ["−60% на поиске практики", "−35% на подготовке черновиков"],
  },
  {
    value: "75M+",
    label: "судебных решений",
    hint: "В единой поисковой базе",
    breakdown: ["С 2010 года", "Обновление ежедневно"],
  },
  {
    value: "75",
    label: "судов в покрытии",
    hint: "Все уровни: от мировых до ВС РФ",
    breakdown: ["34 СОЮ", "13 арбитражных", "25 КС и ВС"],
  },
  {
    value: "152-ФЗ",
    label: "соответствие",
    hint: "Данные не используются для обучения моделей",
    breakdown: ["Серверы в РФ", "AES-256, TLS 1.3"],
  },
];
