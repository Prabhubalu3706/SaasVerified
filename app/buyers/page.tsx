import type { Metadata } from "next";
import { BuyersHero } from "@/components/buyers/BuyersHero";
import { WhyBuyingIsHard } from "@/components/buyers/WhyBuyingIsHard";
import { BuyerJourney } from "@/components/buyers/BuyerJourney";
import { ExploreMarketplace } from "@/components/buyers/ExploreMarketplace";
import { WhatYouGet } from "@/components/buyers/WhatYouGet";
import { BuyerProtection } from "@/components/buyers/BuyerProtection";
import { BuyerCaseStudies } from "@/components/buyers/BuyerCaseStudies";
import { BuyerFAQs } from "@/components/buyers/BuyerFAQs";
import { FinalCTA } from "@/components/common/FinalCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "For buyers",
  description:
    "Shortlist software with SaaS Verify. Compare verified vendors, request demos, and get Refund Assurance with free buyer membership.",
  path: "/buyers",
});

export default function BuyersPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BuyersHero />
      </div>
      <WhyBuyingIsHard />
      <BuyerJourney />
      <ExploreMarketplace />
      <WhatYouGet />
      <BuyerProtection />
      <BuyerCaseStudies />
      <BuyerFAQs />
      <FinalCTA />
    </>
  );
}

