import { CloudUploadOutlined, ExperimentOutlined, FileDoneOutlined } from "@ant-design/icons";
import type { ComponentType } from "react";

export type Step = {
  num: string;
  title: string;
  description: string;
  Icon: ComponentType;
};

export const steps: Step[] = [
  {
    num: "01",
    title: "Загружаете запрос или документ",
    description:
      "Текст, PDF, Word — можно задать вопрос словами или подгрузить договор, иск, постановление.",
    Icon: CloudUploadOutlined,
  },
  {
    num: "02",
    title: "ИИ анализирует и ищет по практике",
    description:
      "Модель разбирает смысл запроса, сопоставляет с 75 миллионами решений и выделяет значимые позиции.",
    Icon: ExperimentOutlined,
  },
  {
    num: "03",
    title: "Получаете ответ со ссылками",
    description:
      "Структурированный разбор с точными ссылками на источники — каждое утверждение можно проверить.",
    Icon: FileDoneOutlined,
  },
];
