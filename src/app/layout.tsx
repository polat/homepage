import "./main.css";

import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import cx from "@/lib/cx";

const fontText = Inter({
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const fontDisplay = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ademilter.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Polat İnceler",
    template: `%s | Polat İnceler`,
  },
  description: "Agency Director at Infomedya, PHP & WordPress & Laravel Developer, Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={cx(fontText.variable, fontDisplay.variable)}>
      <body className="bg-zinc-50 py-24 text-xl text-zinc-700">
        <main>{children}</main>
      </body>
    </html>
  );
}
