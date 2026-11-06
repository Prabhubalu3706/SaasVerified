import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "SaaS Verify helps buyers shortlist software, audits vendors, and includes Refund Assurance with free buyer membership.",
  path: "/services",
});

const services = [
  {
    title: "Buyer shortlists",
    description:
      "Tell us what you need to buy. We compare verified options against those requirements and send a shortlist, usually within 3-5 business days.",
    points: [
      "Free buyer membership",
      "Recommendations based on the audit, not vendor commissions",
      "Demo requests through the platform",
    ],
    href: "/buyers",
    cta: "For buyers",
  },
  {
    title: "Vendor verification",
    description:
      "Vendors apply for an independent audit of features, pricing, onboarding, support, integrations, and security. Applying is free.",
    points: [
      "Review typically takes 3-5 business days",
      "Trust Seal for products that pass",
      "Feedback and a chance to reapply if they do not",
    ],
    href: "/vendors",
    cta: "For vendors",
  },
  {
    title: "Marketplace",
    description:
      "Browse software by category and open a product page before you book another demo. Category pages cover CRM, HRMS, accounting, and the rest of the catalog.",
    points: [
      "Category pages you can share",
      "Product pages with the vendor's own description",
      "Links through to the vendor website",
    ],
    href: "/marketplace",
    cta: "Browse the marketplace",
  },
  {
    title: "Refund Assurance",
    description:
      "Buyer membership includes Refund Assurance when a verified vendor does not deliver a claim that was part of the audit.",
    points: [
      "Included with free membership",
      "Covers mismatched onboarding, support, or feature claims",
      "SaaS Verify can talk to the vendor about the claim",
    ],
    href: "/refund",
    cta: "Read the refund policy",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What SaaS Verify does</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Independent vendor audits, a marketplace for buyers, and protection when a verified claim does not hold.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.points.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="text-[#12b76a] mr-2">✓</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="inline-block bg-[#12b76a] text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-[#f0fdf4] rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Talk to the team</h2>
        <p className="text-xl text-gray-600 mb-6">
          Buyers and vendors can reach SaaS Verify from the contact page.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#12b76a] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
