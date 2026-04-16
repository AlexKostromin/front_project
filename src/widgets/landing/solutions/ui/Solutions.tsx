"use client";

import { Col, Row } from "antd";
import { solutions } from "@/shared/content/solutions";
import { Section, SectionHeading } from "@/shared/ui";
import { SolutionCard } from "./SolutionCard";

export function Solutions() {
  return (
    <Section id="solutions" ariaLabelledBy="solutions-heading">
      <SectionHeading
        id="solutions-heading"
        eyebrow="Возможности"
        title="Решения для ежедневной работы"
        description="Пять инструментов, закрывающих большую часть юридической рутины — от первичного поиска до финального документа."
      />
      <Row gutter={[24, 24]}>
        {solutions.map((solution) => (
          <Col key={solution.slug} xs={24} sm={12} lg={8}>
            <SolutionCard solution={solution} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}
