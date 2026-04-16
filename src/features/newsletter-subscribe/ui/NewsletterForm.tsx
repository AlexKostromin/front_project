"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { App, Button, Flex, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { subscribeToNewsletter } from "../api/subscribe";
import { newsletterSchema, type NewsletterInput } from "../model/schema";

export function NewsletterForm() {
  const { message } = App.useApp();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await subscribeToNewsletter(values);
      message.success("Спасибо! Мы добавили вас в рассылку.");
      reset();
    } catch {
      message.error("Не удалось подписаться. Попробуйте ещё раз.");
    }
  });

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      aria-label="Подписка на рассылку"
      style={{ width: "100%", maxWidth: 480 }}
    >
      <Flex gap={8} align="flex-start" wrap>
        <Form.Item
          validateStatus={errors.email ? "error" : undefined}
          help={errors.email?.message}
          style={{ flex: 1, minWidth: 220, marginBottom: 0 }}
        >
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                type="email"
                placeholder="you@company.ru"
                aria-label="Email"
                autoComplete="email"
              />
            )}
          />
        </Form.Item>
        <Button type="primary" size="large" htmlType="submit" loading={isSubmitting}>
          Подписаться
        </Button>
      </Flex>
    </Form>
  );
}
