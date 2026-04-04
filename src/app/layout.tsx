import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind.new — The Foundation Model for the Neurodiverse Brain",
  description: "An AI model that understands how neurodiverse minds experience the world. Predicting neural responses to sight, sound, and language.",
  openGraph: {
    title: "Mind.new — The Foundation Model for the Neurodiverse Brain",
    description: "An AI model that understands how neurodiverse minds experience the world.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
