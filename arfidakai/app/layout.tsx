import type { Metadata } from "next";
import "./styles/index.css";
import { portfolioData } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
  description: portfolioData.hero.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
