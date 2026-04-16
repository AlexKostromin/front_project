export const site = {
  name: "Inspire",
  shortName: "Inspire",
  tagline: "ИИ-помощник для юристов",
  description: "Больше, чем ИИ для юристов — партнёр в вашей ежедневной юридической практике.",
  url: "https://example.com",
  email: "hello@example.com",
  locale: "ru",
  social: {
    telegram: "https://t.me/",
    linkedin: "https://www.linkedin.com/",
  },
  legal: {
    company: "ООО «Inspire»",
    inn: "0000000000",
    address: "Москва, Россия",
  },
} as const;

export type NavLink = { href: string; label: string };

export const primaryNav: NavLink[] = [
  { href: "#solutions", label: "Возможности" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#cases", label: "Клиенты" },
  { href: "/pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Продукт",
    links: [
      { href: "#solutions", label: "Возможности" },
      { href: "#benefits", label: "Преимущества" },
      { href: "#cases", label: "Клиенты" },
      { href: "/pricing", label: "Тарифы" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { href: "#blog", label: "Блог" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Компания",
    links: [
      { href: "/about", label: "О нас" },
      { href: "#contact", label: "Связаться" },
    ],
  },
  {
    title: "Правовое",
    links: [
      { href: "/legal/privacy", label: "Конфиденциальность" },
      { href: "/legal/terms", label: "Условия использования" },
      { href: "/legal/security", label: "Безопасность" },
    ],
  },
];
