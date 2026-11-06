import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.slug }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const post = getBlogPost(params.id);
  if (!post) {
    return { title: "Article not found", robots: { index: false, follow: false } };
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated,
          author: { "@type": "Organization", name: "SaaS Verify", url: absoluteUrl("/") },
          publisher: { "@type": "Organization", name: "SaaS Verify", url: absoluteUrl("/") },
          mainEntityOfPage: url,
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/blog" className="hover:text-gray-900">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900">{post.title}</li>
        </ol>
      </nav>
      <article>
        <div className="mb-4">
          <span className="inline-block bg-[#dcfce7] text-[#027a48] text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">
          By SaaS Verify ·{" "}
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
