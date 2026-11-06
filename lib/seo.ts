import type { Metadata } from "next";

export const SITE_NAME = "SaaS Verify";
export const SITE_DESCRIPTION =
  "SaaS Verify audits software vendors so you can compare products, see real pricing and onboarding, and buy with buyer protection.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const LOGO_PATH = "/assets/saas-verified-logo.png";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/saas_verify/",
  "https://www.facebook.com/profile.php?id=61584069910004",
  "https://www.linkedin.com/company/saasverify",
  "https://www.youtube.com/@saasverify",
];

export function absoluteUrl(path = "/"): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, max - 1);
  const trimmed = sliced.replace(/\s+\S*$/, "");
  return `${trimmed || sliced}…`;
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Page title stays short so the root template can append the brand once. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
