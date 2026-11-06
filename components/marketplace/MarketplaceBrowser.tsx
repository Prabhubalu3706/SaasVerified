"use client";

import { useState, useMemo, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceFilters } from "@/components/marketplace/MarketplaceFilters";
import { MarketplaceGrid } from "@/components/marketplace/MarketplaceGrid";
import { getCategories } from "@/data/catalog";
import { getMarketplaceListings } from "@/lib/marketplace";

const allVendors = getMarketplaceListings();

function MarketplaceContent({
  initialCategory,
  heading,
  description,
}: {
  initialCategory?: string;
  heading?: string;
  description?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : ([] as string[]),
    pricing: [] as string[],
    features: [] as string[],
  });
  const hasInitializedFromUrl = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 150);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (hasInitializedFromUrl.current) return;

    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    if (!categoryParam && !searchParam) return;

    hasInitializedFromUrl.current = true;

    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      const categoryOptions = getCategories();
      if (categoryOptions.includes(decodedCategory)) {
        setFilters((prev) => ({
          ...prev,
          categories: [decodedCategory],
        }));
      } else {
        setSearchQuery(decodedCategory);
      }
    }

    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam));
    }

    const url = new URL(window.location.href);
    url.searchParams.delete("category");
    url.searchParams.delete("search");
    router.replace(url.pathname + url.search, { scroll: false });

    setTimeout(() => {
      const searchElement = document.getElementById("marketplace-search");
      if (searchElement) {
        const elementTop = searchElement.getBoundingClientRect().top + window.pageYOffset;
        const stickyOffset = window.innerHeight * 0.05 + 56;
        window.scrollTo({
          top: elementTop - stickyOffset,
          behavior: "smooth",
        });
      }
    }, 100);
  }, [searchParams, router]);

  const filteredVendors = useMemo(() => {
    let result = [...allVendors];

    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase();
      result = result.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(query) ||
          vendor.description.toLowerCase().includes(query) ||
          vendor.category.toLowerCase().includes(query)
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter((vendor) => filters.categories.includes(vendor.category));
    }

    if (filters.pricing.length > 0) {
      result = result.filter((vendor) => {
        const pricing = vendor.pricing?.toLowerCase() || "";
        return filters.pricing.some((filterPrice) => {
          if (filterPrice === "Free" || filterPrice === "Free Trial") {
            return pricing.includes("free");
          }
          return true;
        });
      });
    }

    if (filters.features.length > 0) {
      result = result.filter((vendor) =>
        filters.features.some((feature) => vendor.features?.includes(feature))
      );
    }

    return result;
  }, [debouncedSearchQuery, filters]);

  return (
    <div className="min-h-screen">
      <MarketplaceHero title={heading} description={description} />

      <MarketplaceFilters
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <MarketplaceGrid
        vendors={filteredVendors}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        onFiltersChange={setFilters}
      />
    </div>
  );
}

export function MarketplaceBrowser(props: {
  initialCategory?: string;
  heading?: string;
  description?: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Loading marketplace...</p>
        </div>
      }
    >
      <MarketplaceContent {...props} />
    </Suspense>
  );
}
