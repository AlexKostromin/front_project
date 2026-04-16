"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { AntdProvider } from "./AntdProvider";
import { QueryProvider } from "./QueryProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AntdRegistry>
        <AntdProvider>
          <QueryProvider>{children}</QueryProvider>
        </AntdProvider>
      </AntdRegistry>
    </ThemeProvider>
  );
}
