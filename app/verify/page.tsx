import { VerifyHero } from "@/components/verify/VerifyHero";
import { WhyVerificationExists } from "@/components/verify/WhyVerificationExists";
import { VerificationProcess } from "@/components/verify/VerificationProcess";
import { WhatWeAuditVerify } from "@/components/verify/WhatWeAuditVerify";
import { ScoringSection } from "@/components/verify/ScoringSection";
import { VerifyFinalCTA } from "@/components/verify/VerifyFinalCTA";
import { VendorModal } from "@/components/modals/VendorModal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How verification works",
  description:
    "See how SaaS Verify audits features, pricing, onboarding, support, integrations, and security before a product earns a Trust Seal.",
  path: "/verify",
});

export default function VerifyPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <VerifyHero />
      </div>
      <WhyVerificationExists />
      <VerificationProcess />
      <WhatWeAuditVerify />
      <ScoringSection />
      <VerifyFinalCTA />
      <VendorModal />
    </>
  );
}

