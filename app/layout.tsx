import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KM & Company | Paid Media, Measurement & Growth Systems",
  description:
    "KM & Company helps brands connect paid acquisition, tracking, attribution, creative testing, funnel performance, and revenue into one measurable growth system.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
