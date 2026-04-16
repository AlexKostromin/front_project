import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  company: z.string().optional(),
  email: z.string().min(1, "Укажите email").email("Некорректный email"),
  message: z.string().min(10, "Опишите задачу подробнее (от 10 символов)"),
});

export type ContactInput = z.infer<typeof contactSchema>;
