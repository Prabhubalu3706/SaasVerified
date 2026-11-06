import type { Metadata } from "next";
import Link from "next/link";
import { MarketplaceBrowser } from "@/components/marketplace/MarketplaceBrowser";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategories } from "@/data/catalog";
import { categoryPath } from "@/lib/marketplace";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Software marketplace",
  description:
    "Browse SaaS products by category. Compare CRM, HRMS, accounting, and other software, then open a product page before you buy.",
  path: "/marketplace",
});

export default function MarketplacePage() {
  const categories = getCategories();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Marketplace", item: absoluteUrl("/marketplace") },
          ],
        }}
      />
      <MarketplaceBrowser />
      <nav aria-label="Software categories" className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by category</h2>
        <ul className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={categoryPath(category)}
                className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 hover:border-[#12b76a] hover:text-[#12b76a]"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
