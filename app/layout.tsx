import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@/components/Analytics";
import { ConditionalNavbar } from "@/components/ui/ConditionalNavbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, LOGO_PATH, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_PROFILES } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: {
    default: "SaaS Verify | Find and buy the right software",
    template: "%s | SaaS Verify",
  },
  description: SITE_DESCRIPTION,
  keywords: ["SaaS Verify", "verified SaaS", "software marketplace", "SaaS vendor verification", "buyer protection"],
  authors: [{ name: "SaaS Verify" }],
  creator: "SaaS Verify",
  publisher: "SaaS Verify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/assets/SaaS_ico.png",
    shortcut: "/assets/SaaS_ico.png",
    apple: "/assets/SaaS_ico.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "SaaS Verify | Find and buy the right software",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Verify | Find and buy the right software",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      process.env.GOOGLE_VERIFICATION ||
      "9MT_xvCVykH6Dh1sk9te_jrxJrDCGBr4lGI3N6pvvrs",
  },
  other: {
    "scroll-restoration": "manual",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} max-w-full`}>
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2FR6R59');`,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.className} max-w-full`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2FR6R59"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Analytics />
        <Providers>
          <ConditionalNavbar>
            <main className="min-h-screen max-w-full">{children}</main>
          </ConditionalNavbar>
        </Providers>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${absoluteUrl("/")}#organization`,
                name: SITE_NAME,
                url: absoluteUrl("/"),
                logo: absoluteUrl(LOGO_PATH),
                email: "hello@saasverify.com",
                description: SITE_DESCRIPTION,
                sameAs: SOCIAL_PROFILES,
              },
              {
                "@type": "WebSite",
                "@id": `${absoluteUrl("/")}#website`,
                name: SITE_NAME,
                url: absoluteUrl("/"),
                description: SITE_DESCRIPTION,
                publisher: { "@id": `${absoluteUrl("/")}#organization` },
              },
            ],
          }}
        />
        {/* Tawk.to Live Chat Script */}
        <Script
          id="tawk-to-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69844fa6275f611c365dfc8d/1jgmde8nk';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

