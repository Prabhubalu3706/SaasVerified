import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyWeExist } from "@/components/about/WhyWeExist";
import { OurMission } from "@/components/about/OurMission";
import { FoundingStory } from "@/components/about/FoundingStory";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn about SaaS Verify and our mission to bring transparency to software procurement through independent verification.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <OurMission />
      <FoundingStory />
      {/* <Leadership /> */}
      {/* <TrustedBy /> */}
    </>
  );
}

