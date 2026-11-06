export const buyerSections = [
  {
    title: "GETTING STARTED",
    questions: [
      { question: "What is SaaS Verify?", answer: "SaaS Verify is an independent verification platform that audits SaaS vendors to help buyers make confident purchasing decisions." },
      { question: "How do I find verified SaaS products?", answer: "Browse our marketplace to find verified SaaS products, or submit a request for personalized recommendations." },
    ],
  },
  {
    title: "TRUST & PROTECTION",
    questions: [
      { question: "What's Refund Assurance?", answer: "Refund Assurance protects you if a verified vendor fails to deliver on their verified claims. We intervene to resolve disputes and may provide refund assistance.", featured: true },
      { question: "What does the Trust Seal mean?", answer: "The Trust Seal indicates that a vendor has passed our independent verification audit, meeting standards for features, pricing transparency, onboarding, support, and more." },
      { question: "How much does Refund Assurance cost?", answer: "Refund Assurance is included with your free membership. There are no additional costs for buyer protection." },
    ],
  },
  {
    title: "BUYING",
    questions: [
      { question: "Can I request a demo?", answer: "Yes, you can request demos through our platform. We'll connect you with verified vendors that match your requirements." },
    ],
  },
];

export const vendorSections = [
  {
    title: "ELIGIBILITY",
    questions: [
      { question: "Who can apply for verification?", answer: "Any SaaS vendor can apply for verification. We evaluate products across all categories and sizes." },
      { question: "Does SaaS verification cost anything?", answer: "There is no cost to apply for verification. The application process is free." },
    ],
  },
  {
    title: "PROCESS",
    questions: [
      { question: "How do I apply for verification?", answer: "Click 'Become a Verified Vendor' and fill out the application form with your product details, contact information, and business information." },
      { question: "How long does verification take?", answer: "The verification process typically takes 3-5 business days after we receive your complete application." },
      { question: "What exactly do you evaluate during verification?", answer: "We evaluate features, pricing transparency, onboarding maturity, support & SLA delivery, integrations, and security & compliance." },
    ],
  },
  {
    title: "MARKETING",
    questions: [
      { question: "Can I use the Trust Seal in my marketing?", answer: "Yes, once verified, you can use the Trust Seal badge in your marketing materials, website, and promotional content." },
    ],
  },
];

export function homeFaqItems() {
  return [...buyerSections, ...vendorSections].flatMap((section) => section.questions);
}
