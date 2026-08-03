import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Saddle Bronc Blog - Rules, Scoring, Stock & Training",
  description:
    "Saddle bronc rules explained, how the 100-point score works, the mark-out rule and why it differs by association, reading a draw, and the bucking horses themselves — from SaddleBronc.Pro.",
  alternates: { canonical: "https://www.saddlebronc.pro/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-brand">
        SaddleBronc.Pro Blog
      </h1>
      <p className="mt-3 text-muted">
        Rules, scoring, stock, and training — written for people who actually
        nod for one.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-ink-border bg-ink-raised/70 p-6 transition hover:border-brand"
          >
            <p className="text-xs tracking-wider text-muted-dim uppercase">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#d5dcea]">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-2 hover:underline"
            >
              Read more &rarr;
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
