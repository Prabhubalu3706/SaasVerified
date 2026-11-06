import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketplaceBrowser } from "@/components/marketplace/MarketplaceBrowser";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategories } from "@/data/catalog";
import { categoryPath, getCategoryBySlug } from "@/lib/marketplace";
import { toSlug } from "@/lib/slugs";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: toSlug(category) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return { title: "Category not found", robots: { index: false, follow: false } };
  }

  return pageMetadata({
    title: `${category} software`,
    description: `Compare ${category} software in the SaaS Verify marketplace. Read what each product does and open its page before you buy.`,
    path: categoryPath(category),
  });
}

export default function MarketplaceCategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const path = categoryPath(category);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Marketplace", item: absoluteUrl("/marketplace") },
            { "@type": "ListItem", position: 3, name: category, item: absoluteUrl(path) },
          ],
        }}
      />
      <MarketplaceBrowser
        initialCategory={category}
        heading={`${category} software`}
        description={`Compare ${category} products side by side. Each listing links to a product page with a description and the vendor's website.`}
      />
    </>
  );
}
