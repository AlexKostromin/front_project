"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { App, Button, Flex, Form, Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import { submitContact } from "../api/submit";
import { contactSchema, type ContactInput } from "../model/schema";
import { useContactModal } from "../model/store";

const { TextArea } = Input;

export function ContactModal() {
  const { message } = App.useApp();
  const open = useContactModal((s) => s.open);
  const closeModal = useContactModal((s) => s.closeModal);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", message: "" },
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await submitContact(values);
      message.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
      reset();
      closeModal();
    } catch {
      message.error("Не удалось отправить. Попробуйте ещё раз.");
    }
  });

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <Modal
      open={open}
      title="Связаться с командой"
      onCancel={handleClose}
      footer={null}
      destroyOnHidden
      width={520}
    >
      <Form
        layout="vertical"
        onFinish={onSubmit}
        aria-label="Форма обратной связи"
        style={{ marginTop: 8 }}
      >
        <Form.Item
          label="Имя"
          required
          validateStatus={errors.name ? "error" : undefined}
          help={errors.name?.message}
        >
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input {...field} size="large" placeholder="Иван Иванов" autoComplete="name" />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Компания"
          validateStatus={errors.company ? "error" : undefined}
          help={errors.company?.message}
        >
          <Controller
            control={control}
            name="company"
            render={({ field }) => (
              <Input
                {...field}
                size="large"
                placeholder="Юридическая фирма «Пример»"
                autoComplete="organization"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          required
          validateStatus={errors.email ? "error" : undefined}
          help={errors.email?.message}
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
                autoComplete="email"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Краткое описание задачи"
          required
          validateStatus={errors.message ? "error" : undefined}
          help={errors.message?.message}
        >
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <TextArea
                {...field}
                rows={4}
                placeholder="Расскажите, какие процессы хотите автоматизировать"
              />
            )}
          />
        </Form.Item>

        <Flex gap={12} justify="flex-end">
          <Button onClick={handleClose} disabled={isSubmitting}>
            Отмена
          </Button>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Отправить
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
}
