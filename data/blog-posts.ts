export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-saas-verification-works",
    title: "How SaaS verification works",
    description:
      "What happens after a vendor applies to SaaS Verify, what buyers can expect, and why the audit is independent of vendor commissions.",
    date: "2026-09-12",
    updated: "2026-09-12",
    category: "Verification",
    content: [
      "SaaS Verify audits software vendors so buyers can compare products with fewer surprises. The audit looks at what a vendor says about features, pricing, onboarding, support, integrations, and security, then records whether those claims hold up.",
      "Buyers can browse the marketplace or ask for a shortlist. Recommendations are based on the verification results and the requirements you send us. SaaS Verify does not take commissions from vendors for those recommendations.",
      "Vendors apply from the vendor page. The application itself is free. After a complete application, the review typically takes 3-5 business days. If a product does not pass, the vendor gets feedback and can reapply after making changes.",
      "A Trust Seal means the product passed the audit. Verified vendors can use that seal in their own marketing. The badge is valid for one year, and products are checked again on an annual cycle.",
    ],
  },
  {
    slug: "what-we-check-before-you-buy",
    title: "What we check before you buy software",
    description:
      "The six areas SaaS Verify reviews before a product can carry a Trust Seal: features, pricing, onboarding, support, integrations, and security.",
    date: "2026-09-26",
    updated: "2026-09-26",
    category: "Buyers",
    content: [
      "Most software shortlists start with a demo and a pricing page. Those sources describe the product the vendor wants you to see. SaaS Verify checks the claims buyers usually get wrong later: what the product actually does, how pricing is presented, how onboarding works, how support is delivered, which integrations exist, and how security and compliance are handled.",
      "Each area is reviewed as part of one audit. The point is not a star rating pulled from public reviews. The point is a record of whether the vendor's own claims match what the audit found.",
      "That record is what a buyer can use before sitting through another demo. If you already know the category, start in the marketplace, open the product page, and read the description and verification details that are actually on file.",
      "If you want a shortlist instead of browsing, send your requirements. Typical recommendations go out within 3-5 business days after we have what we need to compare verified options.",
    ],
  },
  {
    slug: "how-refund-assurance-works",
    title: "How Refund Assurance works",
    description:
      "Refund Assurance is included with free buyer membership. Here is what it covers when a verified claim does not hold.",
    date: "2026-10-10",
    updated: "2026-10-10",
    category: "Buyer protection",
    content: [
      "Refund Assurance is included with free buyer membership. There is no separate fee for the protection.",
      "It applies when a verified vendor does not deliver on a claim that was part of the audit. The cases buyers ask about most often are onboarding, support SLAs, and feature claims that do not match what was verified.",
      "When that happens, SaaS Verify steps in. We can talk to the vendor about the verified claim, and depending on the case we may help with a refund or with another recommendation.",
      "The full terms, including what is not covered, are on the refund policy page. Read those terms before you rely on the protection for a purchase.",
    ],
  },
  {
    slug: "how-vendors-get-verified",
    title: "How vendors get verified",
    description:
      "Vendors can apply for a SaaS Verify audit at no charge. This is the process, the Trust Seal, and what happens if the first audit does not pass.",
    date: "2026-10-24",
    updated: "2026-10-24",
    category: "Vendors",
    content: [
      "Any SaaS vendor can apply. Company size and category do not decide eligibility. The application is free, and there is no charge to submit it.",
      "The form asks for the product, a contact, and the business details the audit needs. After the application is complete, the review typically takes 3-5 business days.",
      "If the product passes, the vendor can use the Trust Seal on their site and in campaigns. The badge stays valid for one year. Re-verification is annual, and SaaS Verify may also look again if a concern is raised.",
      "If the product does not pass, the vendor receives feedback on what to fix. They can apply again after those changes. There is no cap on reapplications.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
