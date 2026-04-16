"use client";

import { BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Флаг монтирования нужен, чтобы избежать hydration mismatch —
  // resolvedTheme доступен только на клиенте.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      type="text"
      shape="circle"
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      icon={isDark ? <BulbFilled /> : <BulbOutlined />}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    />
  );
}
