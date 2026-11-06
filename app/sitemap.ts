import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { getCategories } from "@/data/catalog";
import { categoryPath, getIndexableVendorPaths } from "@/lib/marketplace";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/marketplace", changeFrequency: "weekly", priority: 0.9 },
    { path: "/buyers", changeFrequency: "monthly", priority: 0.8 },
    { path: "/vendors", changeFrequency: "monthly", priority: 0.8 },
    { path: "/verify", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/services", changeFrequency: "monthly", priority: 0.7 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/refund", changeFrequency: "yearly", priority: 0.4 },
    { path: "/other-policy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...getCategories().map((category) => ({
      url: absoluteUrl(categoryPath(category)),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...getIndexableVendorPaths().map((vendor) => ({
      url: absoluteUrl(vendor.path),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
