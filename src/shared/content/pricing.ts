export type PricingPlan = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceHint?: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

export const pricing: PricingPlan[] = [
  {
    slug: "start",
    name: "Старт",
    tagline: "Для индивидуальных юристов и бутиков",
    price: "9 900 ₽",
    priceHint: "в месяц за пользователя",
    features: [
      "Поиск практики по базам РФ",
      "Анализ документов до 20 стр.",
      "300 запросов к ассистенту в месяц",
      "Email-поддержка",
    ],
    cta: "Начать",
  },
  {
    slug: "team",
    name: "Команда",
    tagline: "Для юридических отделов и средних фирм",
    price: "24 900 ₽",
    priceHint: "в месяц за пользователя",
    featured: true,
    features: [
      "Всё из тарифа «Старт»",
      "Безлимит запросов и анализа документов",
      "Командные шаблоны и база знаний",
      "Интеграция с вашими СЭД и хранилищами",
      "Приоритетная поддержка · SLA 8 часов",
    ],
    cta: "Запросить демо",
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    tagline: "Для корпораций и крупных юрфирм",
    price: "По запросу",
    priceHint: "индивидуальные условия",
    features: [
      "Всё из тарифа «Команда»",
      "On-premise или выделенный контур",
      "Кастомные эвалы и домены права",
      "Интеграции под ваши процессы",
      "Персональный менеджер · SLA 2 часа",
    ],
    cta: "Связаться",
  },
];
