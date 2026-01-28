import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { siteConfig } from "@/config/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} min-h-dvh`}>
        <ThemeProvider>
          <div className="min-h-dvh flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
