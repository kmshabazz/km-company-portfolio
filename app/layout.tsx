import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.kmandcompany.com";
const title = "KM & Company | AI-Enabled Go-To-Market & Growth Systems";
const description = "KM & Company connects go-to-market strategy, AI-enabled creative, acquisition, and enterprise-grade measurement to build growth systems businesses can trust.";

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title,
 description,
 alternates: { canonical: "/" },
 openGraph: { title, description, url: "/", siteName: "KM & Company", type: "website", locale: "en_US" },
 twitter: { card: "summary", title, description },
 robots: { index: true, follow: true },
};

const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "Organization",
 name: "KM & Company",
 url: siteUrl,
 founder: {
  "@type": "Person",
  name: "Kalifa Shabazz",
  url: "https://kalifashabazz.com",
  sameAs: ["https://www.linkedin.com/in/kalifashabazz/"],
 },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />{children}</body></html>;
}
