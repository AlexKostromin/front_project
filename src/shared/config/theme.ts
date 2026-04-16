import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

export const brand = {
  primaryLight: "#3B4FE0",
  primaryDark: "#6B7BF0",
  accent: "#D4A054",
  bgLight: "#EEE8DA",
  bgDark: "#0B0F19",
  surfaceLight: "#F7F2E6",
  surfaceDark: "#131827",
  borderLight: "#D9D2BF",
  borderDark: "#232A3D",
  textLight: "#0E1116",
  textDark: "#F2EFE8",
  mutedLight: "#5A6475",
  mutedDark: "#9AA3B8",
} as const;

const sharedToken = {
  borderRadius: 12,
  borderRadiusLG: 16,
  borderRadiusSM: 8,
  fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: 15,
  lineHeight: 1.6,
  controlHeight: 40,
  controlHeightLG: 48,
  wireframe: false,
};

export const lightTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  token: {
    ...sharedToken,
    colorPrimary: brand.primaryLight,
    colorBgBase: brand.bgLight,
    colorBgContainer: brand.surfaceLight,
    colorBgLayout: brand.bgLight,
    colorTextBase: brand.textLight,
    colorTextSecondary: brand.mutedLight,
    colorBorder: brand.borderLight,
    colorBorderSecondary: brand.borderLight,
  },
  components: {
    Button: {
      fontWeight: 500,
      primaryShadow: "none",
    },
    Layout: {
      headerBg: "transparent",
      bodyBg: brand.bgLight,
      footerBg: brand.surfaceLight,
    },
    Typography: {
      titleMarginBottom: "0.5em",
    },
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  token: {
    ...sharedToken,
    colorPrimary: brand.primaryDark,
    colorBgBase: brand.bgDark,
    colorBgContainer: brand.surfaceDark,
    colorBgLayout: brand.bgDark,
    colorTextBase: brand.textDark,
    colorTextSecondary: brand.mutedDark,
    colorBorder: brand.borderDark,
    colorBorderSecondary: brand.borderDark,
  },
  components: {
    Button: {
      fontWeight: 500,
      primaryShadow: "none",
    },
    Layout: {
      headerBg: "transparent",
      bodyBg: brand.bgDark,
      footerBg: brand.surfaceDark,
    },
    Typography: {
      titleMarginBottom: "0.5em",
    },
  },
};
