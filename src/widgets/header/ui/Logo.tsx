import Link from "next/link";
import { site } from "@/shared/config/site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={site.name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        color: "inherit",
        textDecoration: "none",
        fontFamily: "var(--font-display), serif",
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: "-0.02em",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: 10,
          height: 10,
          borderRadius: 3,
          background: "var(--accent, #D4A054)",
        }}
      />
      {site.name}
    </Link>
  );
}
