import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "KM & Company | AI-Enabled Go-To-Market & Growth Systems",
 description: "KM & Company connects go-to-market strategy, AI-enabled creative, acquisition, and enterprise-grade measurement to build growth systems businesses can trust.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}