import React from 'react';
import Link from 'next/link';

import { TWITTER_LINK } from '@/utils/constants';
import { IBlogPost, LANDING_BLOG_POSTS } from '@/blogs/all';
import BaseLayout from '@/containers/BaseLayout';

export const HighlighedBlogPost: React.FC<{ post: IBlogPost }> = ({ post }) => {
  return (
    <div>
      <div
        className="mt-6 flex flex-col md:flex-row md:gap-2 items-baseline"
        key={post.slug}
      >
        <h3 className="text-lg underline">
          {post.isExternal ? (
            <a href={post.link} target="_blank" rel="noreferrer">
              {post.title}
            </a>
          ) : (
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          )}
        </h3>
        <p className="text-sm italic">{post.date}</p>
      </div>
      <p className="mt-1 elipsis-2-lines-text text-sm">{post.excerpt}</p>
    </div>
  );
};

const Landing: React.FC<any> = () => (
  <BaseLayout
    title="Jack O'Brien's personal site"
    description="Co-Founder and CTO of OnePager, interested in software, startups, education, biotech, and climate
    change solutions. At my core, I like to build things."
  >
    <div className="flex flex-col w-full align-center">
      <div className="flex flex-col justify-center max-w-3xl h-screen px-4 negative-landing-margin mx-auto">
        <h1 className="text-xl leading-7 md:text-4xl font-semibold">
          I'm the CTO & Co-Founder of{' '}
          <a className="underline" href="https://onepager.vc">
            OnePager
          </a>
          , interested in software, startups, education, biotech, and climate
          change solutions. At my core, I'm a builder.
        </h1>
      </div>

      <div className="px-4 max-w-2xl mt-1 mx-auto ">
        <div className="w-full h-px bg-white mx-auto" />

        <h2 className="mt-8 text-lg">
          For my latest,{' '}
          <a className="underline" href={TWITTER_LINK}>
            follow me on Twitter!
          </a>
        </h2>

        <h2 className="mt-8 italic text-lg">Highlighted blog posts</h2>

        {LANDING_BLOG_POSTS.map((post: IBlogPost) => {
          return (
            <HighlighedBlogPost
              post={post}
              key={`${post.date}-${post.title}`}
            />
          );
        })}
      </div>
    </div>
  </BaseLayout>
);

export default Landing;
