import type { Metadata } from "next";
import "./globals.css";

const title = "Mind.new — The Foundation Model for the Neurodiverse Brain";
const description = "AQAL predicts how autistic brains experience sight, sound, and language. 1,545 brain scans, 1,002 FDR connections, 7 sensory networks — real-time on CPU.";
const url = "https://mind.new";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ["autism", "neurodiversity", "AI", "brain encoding", "sensory processing", "fMRI", "foundation model", "autism research", "neuroscience", "accessibility"],
  authors: [{ name: "Ibrahim Raza" }, { name: "Meraj Faheem" }],
  creator: "Leeza Care Research & Development Foundation",
  publisher: "Leeza Care",
  openGraph: {
    title,
    description,
    url,
    siteName: "mind.new",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "mind.new — AI Foundation Model for the Neurodiverse Brain" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/brainlogo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
