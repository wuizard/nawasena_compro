import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/config/site";
import { LocaleProvider } from "@/features/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const title = "Nawasena Ananta | Teknologi & Produk Digital";
const description =
  "Nawasena Ananta merancang dan membangun software, aplikasi web dan mobile, produk digital, serta solusi automation dan AI untuk bisnis.";
const ogAlt = "Nawasena Ananta Teknologi | Building What Comes Next.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/brand/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/icons/favicon.ico", sizes: "any" },
    ],
    apple: "/brand/icons/apple-touch-icon.png",
  },
  manifest: "/brand/icons/site.webmanifest",
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [{ url: "/brand/social/open-graph-1200x630.png", width: 1200, height: 630, alt: ogAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: "/brand/social/open-graph-1200x630.png", alt: ogAlt }],
  },
};

export const viewport: Viewport = {
  themeColor: "#101B31",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" data-theme="dark" className={`dark ${inter.variable} ${mono.variable} antialiased`}>
      <body className="min-h-dvh">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
