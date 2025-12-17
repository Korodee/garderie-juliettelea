import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garderie JulietteLea",
  description:
    "Une garderie de qualité sur le boulevard Decarie à Montréal. Découvrez notre approche éducative bilingue et notre environnement sécuritaire pour enfants de 0 à 5 ans.",
  metadataBase: new URL("https://garderiejuliettelea.ca"),
  openGraph: {
    title: "Garderie JulietteLea",
    description: "Une garderie de qualité sur le boulevard Decarie à Montréal",
    url: "https://garderiejuliettelea.ca",
    siteName: "Garderie JulietteLea",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
