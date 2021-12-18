import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { ALL_BLOGS_MAP, IBlogPost } from '@/blogs/all';
import Link from 'next/link';

const BlogListing: React.FC<any> = ({ slug }) => {
  const blog: IBlogPost | undefined = ALL_BLOGS_MAP.get(slug);

  if (!blog) {
    return null;
  }

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <h2 className="mt-8 text-2xl font-semibold">{blog.title}</h2>
        <p className="mt-1 text-md italic">{blog.date}</p>
        <p className="mt-2 text-md elipsis-2-lines-text">{blog.excerpt}</p>
      </a>
    </Link>
  );
};

const Blog: React.FC<BlogProps> = ({ slugs }) => (
  <BaseLayout>
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className=" text-white text-3xl font-semibold">Blog</h1>

      {slugs
        ?.filter((slug: string) => ALL_BLOGS_MAP.has(slug))
        .map((slug: string) => (
          <BlogListing key={slug} slug={slug} />
        ))}
    </div>
  </BaseLayout>
);

export interface BlogProps {
  slugs: string[];
}

export default Blog;
