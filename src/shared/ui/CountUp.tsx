"use client";

import { useEffect, useRef, useState } from "react";

const NUMERIC = /^([+\-]?)(\d+(?:\.\d+)?)(.*)$/;

export function CountUp({
  value,
  duration = 1400,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const match = value.match(NUMERIC);
  const target = match ? parseFloat(match[2]) : null;
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const [current, setCurrent] = useState(target == null ? null : 0);
  const started = useRef(false);

  useEffect(() => {
    if (target == null) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCurrent(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setCurrent(target);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  if (!match || target == null) {
    return (
      <span ref={ref} className={className} style={style}>
        {value}
      </span>
    );
  }

  const [, prefix, , suffix] = match;
  const display =
    decimals > 0
      ? (current ?? 0).toFixed(decimals)
      : Math.round(current ?? 0).toLocaleString("ru-RU");

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
