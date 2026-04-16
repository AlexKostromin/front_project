"use client";

import { CheckOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { pricing } from "@/shared/content/pricing";
import { useContactModal } from "@/features/contact";

const { Text, Title } = Typography;

export function PricingGrid() {
  const openContact = useContactModal((s) => s.openModal);

  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        alignItems: "stretch",
      }}
    >
      {pricing.map((plan) => {
        const isFeatured = plan.featured;
        return (
          <div
            key={plan.slug}
            style={{
              position: "relative",
              padding: 32,
              borderRadius: 20,
              border: isFeatured ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: isFeatured
                ? "color-mix(in oklab, var(--accent) 6%, var(--bg-raised))"
                : "var(--bg-raised)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              boxShadow: isFeatured
                ? "0 32px 60px -40px color-mix(in oklab, var(--accent) 60%, transparent)"
                : undefined,
            }}
          >
            {isFeatured && (
              <span
                style={{
                  position: "absolute",
                  top: -12,
                  left: 24,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "var(--accent)",
                  color: "#fff",
                }}
              >
                Популярный
              </span>
            )}

            <div>
              <Title
                level={3}
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display), serif",
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {plan.name}
              </Title>
              <Text style={{ display: "block", marginTop: 6, opacity: 0.7, fontSize: 14 }}>
                {plan.tagline}
              </Text>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: 40,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {plan.price}
              </div>
              {plan.priceHint && (
                <Text style={{ display: "block", marginTop: 6, opacity: 0.6, fontSize: 13 }}>
                  {plan.priceHint}
                </Text>
              )}
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                flex: 1,
              }}
            >
              {plan.features.map((f) => (
                <li
                  key={f}
                  style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14 }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: "color-mix(in oklab, var(--accent) 18%, transparent)",
                      color: "var(--accent)",
                      fontSize: 10,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <CheckOutlined />
                  </span>
                  <span style={{ opacity: 0.85, lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>

            <Button
              type={isFeatured ? "primary" : "default"}
              size="large"
              onClick={openContact}
              block
            >
              {plan.cta}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
