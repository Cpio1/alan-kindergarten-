import type { Metadata, Viewport } from "next";
import { Nunito, Onest } from "next/font/google";
import { MotionProvider } from "@/components/shared/Reveal";
import { contacts, site } from "@/data/kindergarten";
import "./globals.css";

// Екі шрифт та казах әріптерін (ә, ғ, қ, ң, ө, ұ, ү, һ, і) cyrillic-ext жиынында толық қамтиды.
const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-onest",
  display: "swap",
});

const title = `${site.name} — ${site.tagline}`;
const description = `${site.description} 1,6–6 жас, 6 топ, қазақ тілінде тәрбие, күніне 4 мезгіл тамақтану. ${contacts.address}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description,
  applicationName: site.name,
  keywords: ["балабақша", "бөбекжай", "Алан", "мектепке дейінгі тәрбие", "қазақ тілі", "балалар", "үйірмелер"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: false, email: false },
  other: { "color-scheme": "light only" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#FFF9F0",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: "+77477771420",
  address: { "@type": "PostalAddress", streetAddress: contacts.address },
  openingHours: "Mo-Fr 07:20-18:00",
  sameAs: [contacts.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={`${nunito.variable} ${onest.variable}`} style={{ colorScheme: "light" }}>
      <body className="bg-cream font-body text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
