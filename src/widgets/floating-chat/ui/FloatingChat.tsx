"use client";

import { MessageOutlined } from "@ant-design/icons";
import { useContactModal } from "@/features/contact";

export function FloatingChat() {
  const openContact = useContactModal((s) => s.openModal);

  return (
    <button
      type="button"
      onClick={openContact}
      aria-label="Задать вопрос"
      style={{
        position: "fixed",
        right: 20,
        bottom: 88,
        zIndex: 55,
        width: 56,
        height: 56,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "var(--accent)",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: 22,
        boxShadow: "0 16px 40px -12px color-mix(in oklab, var(--accent) 70%, transparent)",
        transition: "transform 180ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <MessageOutlined />
    </button>
  );
}
