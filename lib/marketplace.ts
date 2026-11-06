import { getAllVendorsWithCategory, getCategories } from "@/data/catalog";
import { categoryProducts } from "@/data/marketplace-products";
import { toSlug } from "@/lib/slugs";

export function vendorLogoPath(name: string): string {
  const cleanName = name.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
  const file = cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase();
  return `/assets/vendor_logos/${file}.png`;
}

export type MarketplaceListing = {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  website?: string;
  pricing?: string;
  features?: string[];
};

export function getMarketplaceListings(): MarketplaceListing[] {
  return getAllVendorsWithCategory().map((vendor) => ({
    id: toSlug(vendor.name),
    name: vendor.name,
    description: vendor.description,
    category: vendor.category,
    logo: vendorLogoPath(vendor.name),
    website: vendor.url,
  }));
}

export function getCategoryBySlug(slug: string): string | null {
  return getCategories().find((category) => toSlug(category) === slug) ?? null;
}

export function categoryPath(category: string): string {
  return `/marketplace/category/${toSlug(category)}`;
}

const CATEGORY_ALIASES: Record<string, string> = {
  support: "Helpdesk",
  automation: "Workflow Automation",
  "hr software": "HRMS",
  "crm software": "CRM",
  "billing & accounting software": "Accounting",
  "billing and accounting software": "Accounting",
  "pos software": "POS",
  "website builders": "Website Builder",
  "cms platforms": "Content Management System (CMS)",
  marketing: "Marketing Automation",
  finance: "Accounting",
  billing: "Accounting",
  sales: "CRM",
  inventory: "Inventory Management",
  education: "Education / School Management",
  healthcare: "Healthcare Management",
  cybersecurity: "Cybersecurity",
};

export function resolveCategory(label: string): { name: string; href: string } {
  const categories = getCategories();
  const direct = categories.find((category) => category.toLowerCase() === label.toLowerCase());
  if (direct) return { name: direct, href: categoryPath(direct) };

  const alias = CATEGORY_ALIASES[label.toLowerCase()];
  if (alias && categories.includes(alias)) return { name: alias, href: categoryPath(alias) };

  const bySlug = categories.find((category) => toSlug(category) === toSlug(label));
  if (bySlug) return { name: bySlug, href: categoryPath(bySlug) };

  return { name: label, href: `/marketplace?search=${encodeURIComponent(label)}` };
}

/** Indexable category URL when the label matches the catalog, otherwise marketplace search. */
export function marketplaceHrefForLabel(label: string): string {
  return resolveCategory(label).href;
}

export function getIndexableVendorPaths(): { path: string; name: string }[] {
  const bySlug = new Map<string, string>();

  for (const vendor of getAllVendorsWithCategory()) {
    bySlug.set(toSlug(vendor.name), vendor.name);
  }

  for (const category of categoryProducts) {
    for (const product of category.products) {
      bySlug.set(toSlug(product.name), product.name);
    }
  }

  return Array.from(bySlug.entries())
    .map(([slug, name]) => ({ path: `/marketplace/${slug}`, name }))
    .sort((a, b) => a.path.localeCompare(b.path));
}
