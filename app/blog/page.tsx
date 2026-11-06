import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "How SaaS Verify audits vendors, what buyers should check before purchasing, and how Refund Assurance works.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Guides</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          How verification, buyer protection, and vendor audits work at SaaS Verify.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block bg-[#dcfce7] text-[#027a48] text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#12b76a]">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>SaaS Verify</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-[#12b76a] hover:text-green-700 font-semibold"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
