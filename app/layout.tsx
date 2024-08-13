import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "./_components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("PRODUCTION_SITE_URL"),
  title: {
    default: "star-wars-app",
    template: "star-wars-app | %s",
  },
  description: "Star-wars-app is a sample application for something",
  openGraph: {
    title: "star-wars-app",
    description: "Star-wars-app is a sample application for something",
    url: "PRODUCTION_SITE_URL",
    images: ["/favicon.ico"],
    locale: "en-US",
    alternateLocale: "ja-JP",
    type: "website",
  },
  twitter: {
    title: "star-wars-app",
    card: "summary_large_image",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
