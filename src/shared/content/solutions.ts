import {
  AuditOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  LineChartOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import type { Solution } from "@/entities/solution/model/types";

const raw: Omit<Solution, "href">[] = [
  {
    slug: "jurisprudence",
    title: "Поиск судебной практики",
    description:
      "Более 75 миллионов решений из 75 судов — с умной фильтрацией и краткими выжимками по делу.",
    Icon: FileSearchOutlined,
  },
  {
    slug: "analytics",
    title: "Аналитические отчёты",
    description:
      "Готовые отчёты по судебной практике под ваш запрос: тренды, статистика, позиции судов.",
    Icon: LineChartOutlined,
  },
  {
    slug: "document-analysis",
    title: "Анализ документов",
    description:
      "Загрузите договор или иск — получите структурированный разбор, риски и рекомендации.",
    Icon: AuditOutlined,
  },
  {
    slug: "case-analysis",
    title: "Анализ процессов",
    description: "Оценка перспектив дела на основе схожей практики и позиции конкретных судей.",
    Icon: SolutionOutlined,
  },
  {
    slug: "drafting",
    title: "Подготовка документов",
    description: "Составление исков, жалоб и процессуальных документов по вашим шаблонам и стилю.",
    Icon: FileTextOutlined,
  },
];

export const solutions: Solution[] = raw.map((s) => ({
  ...s,
  href: `/solutions/${s.slug}`,
}));
