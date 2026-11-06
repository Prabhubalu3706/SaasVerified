import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-lg text-gray-600 mb-8">
        That page is not on SaaS Verify. Try the marketplace or the guides.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="text-[#12b76a] font-semibold hover:underline">
          Home
        </Link>
        <Link href="/marketplace" className="text-[#12b76a] font-semibold hover:underline">
          Marketplace
        </Link>
        <Link href="/faq" className="text-[#12b76a] font-semibold hover:underline">
          FAQ
        </Link>
      </div>
    </div>
  );
}
