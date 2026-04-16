import type { NewsletterInput } from "../model/schema";

export async function subscribeToNewsletter(input: NewsletterInput): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  // TODO: подключить реальный эндпоинт подписки
  console.info("[newsletter] subscribe", input.email);
}
