import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xelphrixtechnologies.com"),
  title: {
    default: "Xelphrix Technologies | Cloud, SaaS, and DevOps Engineering",
    template: "%s",
  },
  description:
    "Xelphrix Technologies delivers cloud architecture, SaaS product engineering, DevOps automation, and enterprise digital solutions.",
  applicationName: "Xelphrix Technologies",
  authors: [{ name: "Xelphrix Technologies" }],
  creator: "Xelphrix Technologies",
  publisher: "Xelphrix Technologies",
  category: "Technology",
  icons: {
    icon: [
      { url: "/asets/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/asets/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/asets/favicon/favicon.ico",
    apple: { url: "/asets/favicon/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/asets/favicon/site.webmanifest",
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com",
  },
  openGraph: {
    title: "Xelphrix Technologies",
    description:
      "Cloud architecture, SaaS engineering, and DevOps automation for modern businesses.",
    url: "https://www.xelphrixtechnologies.com",
    siteName: "Xelphrix Technologies",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/saas.jpg",
        width: 1200,
        height: 630,
        alt: "Xelphrix Technologies cloud and SaaS engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelphrix Technologies",
    description:
      "Cloud architecture, SaaS engineering, and DevOps automation for modern businesses.",
    images: ["/images/saas.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xelphrix Technologies",
  url: "https://www.xelphrixtechnologies.com",
  logo: "https://www.xelphrixtechnologies.com/images/saas.jpg",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 9217354100",
      contactType: "customer support",
      areaServed: "IN",
      email: "info@xelphrixtechnologies.com",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Xelphrix Technologies",
  url: "https://www.xelphrixtechnologies.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#25343F]">
      <body className="bg-[#EAEFEF] text-[#25343F] overscroll-none">
        
        <Navbar />

        <main>
          {children}
        </main>

        <FloatingContactButtons />

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-VG4RJ9K2RP`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VG4RJ9K2RP');
          `}
        </Script>

      </body>
    </html>
  );
}