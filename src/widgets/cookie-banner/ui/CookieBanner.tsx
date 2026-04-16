"use client";

import { Button, Flex, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "inspire-cookie-accepted";
const { Text } = Typography;

export function CookieBanner() {
  // Стартуем скрытыми, чтобы избежать FOUC; после монтирования читаем localStorage.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании cookies"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 60,
        maxWidth: 720,
        marginInline: "auto",
        padding: "16px 20px",
        borderRadius: 14,
        border: "1px solid var(--border)",
        background: "var(--bg-raised)",
        boxShadow: "0 24px 60px -24px rgba(14, 17, 22, 0.3)",
      }}
    >
      <Flex wrap gap={16} align="center" justify="space-between">
        <Text style={{ fontSize: 14, opacity: 0.85, flex: 1, minWidth: 260 }}>
          Мы используем cookies для корректной работы сайта и аналитики. Продолжая, вы соглашаетесь
          с этим. Подробнее —{" "}
          <Link
            href="/legal/privacy"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            в политике конфиденциальности
          </Link>
          .
        </Text>
        <Button type="primary" onClick={accept}>
          Принять
        </Button>
      </Flex>
    </div>
  );
}
