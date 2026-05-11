import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OliveOak — Hyderabad's Finest Luxury Interior Design Studio",
  description:
    "OliveOak is a Singapore-heritage luxury interior design studio crafting bespoke spaces for Hyderabad's most discerning homes and offices. Custom furniture, lighting, and space planning.",
  keywords: [
    "luxury interior design Hyderabad",
    "interior design studio Hyderabad",
    "Singapore heritage interior design",
    "bespoke interiors Hyderabad",
    "OliveOak",
    "TEV Contractors Singapore",
  ],
  openGraph: {
    title: "OliveOak — Hyderabad's Finest Luxury Interior Design",
    description:
      "Singapore's precision. Hyderabad's soul. Bespoke interiors for those who value distinction.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="grain-overlay">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
