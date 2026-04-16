import {
  AuditOutlined,
  CloudServerOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import type { ComponentType } from "react";

export type Compliance = {
  label: string;
  hint: string;
  Icon: ComponentType;
};

export const compliance: Compliance[] = [
  { label: "152-ФЗ", hint: "Персональные данные", Icon: SafetyOutlined },
  { label: "Серверы в РФ", hint: "Российская инфраструктура", Icon: CloudServerOutlined },
  { label: "AES-256 · TLS 1.3", hint: "Шифрование данных", Icon: LockOutlined },
  { label: "ISO 27001", hint: "Управление ИБ", Icon: SafetyCertificateOutlined },
  { label: "Резидент Сколково", hint: "Инновационный центр", Icon: AuditOutlined },
];
