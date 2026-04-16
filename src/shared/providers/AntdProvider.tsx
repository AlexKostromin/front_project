"use client";

import { ConfigProvider, App as AntApp } from "antd";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";
import { darkTheme, lightTheme } from "@/shared/config/theme";

export function AntdProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? darkTheme : lightTheme;
  return (
    <ConfigProvider theme={theme}>
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  );
}
