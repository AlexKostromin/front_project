import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "@/shared/providers/Providers";
import { site } from "@/shared/config/site";
import { CookieBanner } from "@/widgets/cookie-banner/ui/CookieBanner";
import { ContactModal } from "@/features/contact";
import { FloatingChat } from "@/widgets/floating-chat/ui/FloatingChat";
import "./globals.css";

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  keywords: [
    "ИИ для юристов",
    "legaltech",
    "судебная практика",
    "анализ документов",
    "правовая аналитика",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.locale}
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
    >
      <body>
        <Providers>
          {children}
          <FloatingChat />
          <ContactModal />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
