import { i18n, LangParams, type Locale } from "@/i18n/i18n-config";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const onest = Onest({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={onest.className}>{children}</body>
    </html>
  );
}

export async function generateMetadata({
  params: { lang },
}: LangParams): Promise<Metadata> {
  const dict = await getDictionary(lang);

  return {
    title: dict.SEO_TITLE,
    description: dict.SEO_DESCRIPTION,
  };
}
