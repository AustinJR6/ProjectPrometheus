import posts from '../../posts.json';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Blog - Project Prometheus',
  description: 'Campaign updates and thoughts from Elias Rittenhouse.'
};

export default function Blog(): ReactElement {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="border p-4 rounded shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm mb-2 italic">By {post.author} on {post.date}</p>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
