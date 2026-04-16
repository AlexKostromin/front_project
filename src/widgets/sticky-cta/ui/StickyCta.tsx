"use client";

import { Button } from "antd";
import { useEffect, useState } from "react";
import { useContactModal } from "@/features/contact";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const openContact = useContactModal((s) => s.openModal);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      const onScroll = () => setVisible(window.scrollY > 800);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: "-80px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 45,
        padding: "12px 24px",
        borderTop: "1px solid var(--border)",
        background: "color-mix(in oklab, var(--bg) 92%, transparent)",
        backdropFilter: "saturate(1.2) blur(12px)",
        WebkitBackdropFilter: "saturate(1.2) blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        flexWrap: "wrap",
        transform: visible ? "translateY(0)" : "translateY(120%)",
        transition: "transform 240ms ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <span style={{ fontSize: 14, opacity: 0.78 }}>
        Готовы попробовать Inspire в своей практике?
      </span>
      <Button type="primary" onClick={openContact}>
        Связаться
      </Button>
    </div>
  );
}
