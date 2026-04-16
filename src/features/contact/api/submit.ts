import type { ContactInput } from "../model/schema";

export async function submitContact(input: ContactInput): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  console.info("[contact] submit", input);
}
