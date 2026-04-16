import type { CSSProperties, ReactNode } from "react";

export function Container({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        maxWidth: 1200,
        marginInline: "auto",
        paddingInline: "clamp(20px, 4vw, 48px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
