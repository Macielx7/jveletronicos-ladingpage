import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData/StructuredData";
import { SITE_NAME, SITE_URL } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | iPhones Premium com Garantia e Atendimento VIP`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "iPhones lacrados, nota fiscal, garantia e parcelamento inteligente. JV Eletrônicos: autoridade em Apple premium com entrega rápida e suporte humano no WhatsApp.",
  keywords: [
    "iPhone",
    "JV Eletrônicos",
    "Apple",
    "iPhone lacrado",
    "iPhone parcelado",
    "iPhone premium",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — iPhones premium com experiência de boutique`,
    description:
      "Condições exclusivas, procedência comprovada e atendimento imediato. Fale com um especialista no WhatsApp.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | iPhones premium`,
    description:
      "Lacrado, garantia, nota fiscal e parcelamento. Atendimento VIP no WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
