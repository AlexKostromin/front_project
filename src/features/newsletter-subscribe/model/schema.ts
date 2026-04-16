import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().min(1, "Укажите email").email("Некорректный email"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
