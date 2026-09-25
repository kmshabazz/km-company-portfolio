import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KM & Company | Measurement Architecture, Data Instrumentation & Growth Systems",
  description:
    "KM & Company builds trusted measurement and growth systems across data instrumentation, event architecture, attribution, conversion, revenue analytics, and AI-enabled workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
