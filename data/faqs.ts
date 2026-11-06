export interface FAQItem {
  question: string;
  answer: string;
  featured?: boolean;
}

export interface FAQSection {
  title: string;
  questions: FAQItem[];
}

export const allFAQs: { buyers: FAQSection[]; vendors: FAQSection[] } = {
  buyers: [
    {
      title: "GETTING STARTED",
      questions: [
        { question: "What is SaaS Verify?", answer: "SaaS Verify is an independent verification platform that audits SaaS vendors to help buyers make confident purchasing decisions. We verify vendor claims about features, pricing, onboarding, support, and more to ensure you get accurate information." },
        { question: "How do I find verified SaaS products?", answer: "Browse our marketplace to find verified SaaS products, or submit a request for personalized recommendations. Our marketplace shows only verified vendors with their audit scores and detailed information." },
      ],
    },
    {
      title: "TRUST & PROTECTION",
      questions: [
        { question: "What's Refund Assurance?", answer: "Refund Assurance protects you if a verified vendor fails to deliver on their verified claims. We intervene to resolve disputes and may provide refund assistance if claims fail. This is included with your free membership.", featured: true },
        { question: "What does the Trust Seal mean?", answer: "The Trust Seal indicates that a vendor has passed our independent verification audit, meeting standards for features, pricing transparency, onboarding, support, and more. Only verified vendors can display this seal." },
        { question: "How much does Refund Assurance cost?", answer: "Refund Assurance is included with your free membership. There are no additional costs for buyer protection." },
        { question: "What is covered under Buyer Protection?", answer: "Buyer Protection covers cases where onboarding processes, support SLAs, or feature claims do not match what was verified. We intervene to resolve disputes and may provide refund assistance if claims fail." },
        { question: "What if the product fails onboarding?", answer: "If a verified vendor fails to deliver on their verified onboarding process, we step in to mediate. Depending on the case, we may assist with refunds or alternative recommendations." },
      ],
    },
    {
      title: "BUYING",
      questions: [
        { question: "Can I request a demo?", answer: "Yes, you can request demos through our platform. We'll connect you with verified vendors that match your requirements." },
        { question: "How fast will I get recommendations?", answer: "Typically within 3-5 business days after we receive your requirements. We take time to properly evaluate verified options against your specific needs." },
        { question: "Do you take commissions?", answer: "No. We are completely independent and do not take commissions from vendors. Our recommendations are based solely on verification results and your requirements." },
        { question: "Do you talk to the vendor on my behalf?", answer: "Yes, as part of our buyer protection service, we can communicate with vendors on your behalf to resolve issues related to verified claims. This is included in our buyer protection policy." },
      ],
    },
  ],
  vendors: [
    {
      title: "ELIGIBILITY",
      questions: [
        { question: "Who can apply for verification?", answer: "Any SaaS vendor can apply for verification. We evaluate products across all categories and sizes, from startups to enterprise solutions." },
        { question: "Does SaaS verification cost anything?", answer: "There is no cost to apply for verification. The application process is free." },
        { question: "Is there a cost to apply?", answer: "No, the verification application process is completely free. There are no hidden fees or charges." },
      ],
    },
    {
      title: "PROCESS",
      questions: [
        { question: "How do I apply for verification?", answer: "Click 'Become a Verified Vendor' and fill out the application form with your product details, contact information, and business information. Our team will review your application." },
        { question: "How long does verification take?", answer: "The verification process typically takes 3-5 business days after we receive your complete application. We conduct thorough audits to ensure accuracy." },
        { question: "What exactly do you evaluate during verification?", answer: "We evaluate features, pricing transparency, onboarding maturity, support & SLA delivery, integrations, and security & compliance. Each area is scored to provide an overall verification score." },
        { question: "What does the audit evaluate?", answer: "Our audit evaluates six key areas: Features (functionality claims), Pricing transparency, Onboarding maturity, Support & SLA delivery, Integrations, and Security & compliance." },
        { question: "What if we fail verification?", answer: "If your product doesn't meet the verification criteria, we provide detailed feedback on areas for improvement. You can address these issues and reapply for verification. We're committed to helping vendors improve and succeed." },
        { question: "Can we reapply after improvements?", answer: "Absolutely! We encourage vendors to reapply after making improvements. There's no limit on reapplications, and we're here to help guide you through the process to achieve verification." },
      ],
    },
    {
      title: "MARKETING",
      questions: [
        { question: "Can I use the Trust Seal in my marketing?", answer: "Yes, once verified, you can use the Trust Seal badge in your marketing materials, website, and promotional content. The badge helps build buyer trust and confidence." },
      ],
    },
    {
      title: "ONGOING",
      questions: [
        { question: "How often do audits occur?", answer: "Initial verification audits are conducted when you first apply. Re-verification audits occur annually to ensure continued compliance with our standards. We may also conduct spot checks if concerns are raised." },
        { question: "How long is the badge valid?", answer: "Verification badges are valid for one year from the date of approval. Annual re-verification ensures that your product continues to meet our standards and maintains buyer trust." },
      ],
    },
  ],
};

export function allFaqItems(): FAQItem[] {
  return [...allFAQs.buyers, ...allFAQs.vendors].flatMap((section) => section.questions);
}
