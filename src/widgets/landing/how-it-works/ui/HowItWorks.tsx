"use client";

import { Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { steps } from "@/shared/content/how-it-works";
import { Section, SectionHeading } from "@/shared/ui";

const { Title, Paragraph, Text } = Typography;

const ROTATE_MS = 3500;

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    let visible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(node);

    const id = window.setInterval(() => {
      if (!visible || paused.current) return;
      setActive((i) => (i + 1) % steps.length);
    }, ROTATE_MS);

    return () => {
      observer.disconnect();
      window.clearInterval(id);
    };
  }, []);

  return (
    <Section id="how" ariaLabelledBy="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow="Как это работает"
        title="Три шага от запроса до решения"
        description="Рабочий процесс выстроен так, чтобы вы получали проверяемый ответ, а не «магию» ИИ."
      />

      <div
        ref={wrapRef}
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
        className="how-track"
      >
        <div aria-hidden className="how-rail" />
        <div
          aria-hidden
          className="how-rail how-rail--progress"
          style={{
            width: `${((active + 1) / steps.length) * 100}%`,
          }}
        />

        {steps.map(({ num, title, description, Icon }, i) => {
          const isActive = i === active;
          return (
            <button
              key={num}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              aria-label={`Шаг ${num}: ${title}`}
              className={`how-card${isActive ? " how-card--active" : ""}`}
            >
              <div className="how-card__head">
                <Text
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: 28,
                    fontWeight: 500,
                    color: "var(--accent)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </Text>
                <span aria-hidden className="how-card__icon">
                  <Icon />
                </span>
              </div>
              <Title level={3} style={{ margin: 0, fontSize: 19, fontWeight: 600 }}>
                {title}
              </Title>
              <Paragraph style={{ margin: 0, opacity: 0.72, fontSize: 14.5 }}>
                {description}
              </Paragraph>
            </button>
          );
        })}
      </div>

      <div className="how-dots" role="tablist" aria-label="Активный шаг">
        {steps.map((s, i) => (
          <button
            key={s.num}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Шаг ${s.num}`}
            onClick={() => setActive(i)}
            className={`how-dot${i === active ? " how-dot--active" : ""}`}
          />
        ))}
      </div>

      <style>{`
        .how-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 16px;
          padding-top: 24px;
        }
        .how-rail {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--border);
          border-radius: 2px;
          pointer-events: none;
        }
        .how-rail--progress {
          right: auto;
          background: var(--accent);
          opacity: 0.95;
          transition: width 600ms cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 16px color-mix(in oklab, var(--accent) 60%, transparent);
        }
        .how-card {
          position: relative;
          text-align: left;
          cursor: pointer;
          color: inherit;
          font: inherit;
          padding: 28px;
          border-radius: 18px;
          border: 1px solid var(--border);
          background: color-mix(in oklab, var(--bg-raised) 50%, transparent);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition:
            transform 420ms cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 420ms ease,
            border-color 420ms ease,
            background 420ms ease,
            opacity 420ms ease;
          opacity: 0.65;
        }
        .how-card:hover { opacity: 0.9; }
        .how-card--active {
          opacity: 1;
          transform: translateY(-6px);
          border-color: color-mix(in oklab, var(--accent) 55%, var(--border));
          background: linear-gradient(160deg, color-mix(in oklab, var(--accent) 12%, transparent), color-mix(in oklab, var(--bg-raised) 70%, transparent));
          box-shadow: 0 24px 60px -28px color-mix(in oklab, var(--accent) 55%, transparent);
        }
        .how-card__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .how-card__icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: color-mix(in oklab, var(--accent) 14%, transparent);
          color: var(--accent);
          font-size: 18px;
          transition: transform 420ms ease, background 420ms ease;
        }
        .how-card--active .how-card__icon {
          transform: rotate(-8deg) scale(1.08);
          background: color-mix(in oklab, var(--accent) 24%, transparent);
        }
        .how-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 36px;
        }
        .how-dot {
          width: 28px;
          height: 6px;
          border-radius: 999px;
          border: none;
          background: var(--border);
          cursor: pointer;
          padding: 0;
          transition: width 320ms ease, background 320ms ease;
        }
        .how-dot--active {
          width: 56px;
          background: var(--accent);
        }
        @media (max-width: 768px) {
          .how-track { grid-template-columns: 1fr; }
          .how-rail { display: none; }
        }
      `}</style>
    </Section>
  );
}
