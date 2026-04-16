"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof Pick<HTMLElementTagNameMap, "div" | "section" | "article">;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -64px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
    // `visible` читаем только из initial state — пересоздавать observer при его изменении не нужно.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as never} style={style}>
      {children}
    </Tag>
  );
}
