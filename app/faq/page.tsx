import type { Metadata } from "next";
import { FAQPageClient } from "@/components/faq/FAQPageClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { allFaqItems } from "@/data/faqs";
import { faqPageSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers for buyers and vendors: what SaaS Verify audits, how Refund Assurance works, and how to apply for verification.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(allFaqItems())} />
      <FAQPageClient />
    </>
  );
}
