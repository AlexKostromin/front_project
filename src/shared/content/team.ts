export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Анна Лебедева",
    role: "CEO, со-основатель",
    bio: "12 лет в корпоративной практике. Руководила юрдепартаментом финтех-холдинга.",
    initials: "АЛ",
  },
  {
    name: "Дмитрий Орлов",
    role: "CTO, со-основатель",
    bio: "Ex-tech lead команды поиска в крупном маркетплейсе. NLP, ретривал, LLM.",
    initials: "ДО",
  },
  {
    name: "Мария Соколова",
    role: "Head of Legal Research",
    bio: "Кандидат юридических наук. Отвечает за калибровку моделей на судебной практике.",
    initials: "МС",
  },
  {
    name: "Игорь Васнецов",
    role: "Head of Product",
    bio: "Десять лет проектирует SaaS-продукты для профессиональных рынков.",
    initials: "ИВ",
  },
  {
    name: "Екатерина Морозова",
    role: "Head of Customer Success",
    bio: "Ведёт внедрение в юрдепартаментах и крупных частных практиках.",
    initials: "ЕМ",
  },
  {
    name: "Павел Громов",
    role: "Head of Security",
    bio: "ISO 27001, 152-ФЗ. Отвечает за инфраструктуру и защиту данных клиентов.",
    initials: "ПГ",
  },
];
