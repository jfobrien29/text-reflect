import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { TWITTER_LINK } from '@/utils/constants';
import { IBlogPost, LANDING_BLOG_POSTS } from '@/blogs/all';
import Link from 'next/link';

// const Card: React.FC<any> = ({ title, text }) => {
//   return (
//     <div className="group w-3/4 md:w-56 h-64 p-3 border-white border rounded-sm hover:bg-white hover:shadow-lg transform duration-500 ease-in-out hover:-translate-y-1">
//       <h2 className="text-white font-semibold text-lg group-hover:text-orange">
//         {title}
//       </h2>
//       <p className="text-white text-sm group-hover:text-orange">{text}</p>
//     </div>
//   );
// };

const Landing: React.FC<any> = () => (
  <BaseLayout
    title="Jack O'Brien's personal site"
    description="Co-Founder & CTO of OnePager, interested in software, startups, education, biotech, and climate
  change solutions. At my core, I like to build things."
  >
    <div className="flex flex-col max-w-2xl px-4">
      <h1 className="text-white text-xl md:text-2xl font-semibold">
        I&apos;m a Co-Founder of{' '}
        <a className="underline" href="https://onepager.vc">
          OnePager
        </a>
        , interested in software, startups, education, biotech, and climate
        change solutions. At my core, I like to build things.
      </h1>

      {/** divider */}
      <div className="mt-12 w-full h-px bg-white  mx-auto" />

      <h2 className="mt-8 text-lg">
        For my latest,{' '}
        <a className="underline" href={TWITTER_LINK}>
          follow me on Twitter!
        </a>
      </h2>

      <h2 className="mt-8 italic text-lg">Highlighed blog posts</h2>

      {LANDING_BLOG_POSTS.map((post: IBlogPost) => {
        return (
          <div>
            <div
              className="flex flex-col md:flex-row gap-2 mt-4 items-baseline"
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
            <p className="elipsis-1-lines-text">{post.excerpt}</p>
          </div>
        );
      })}
    </div>
  </BaseLayout>
);

export default Landing;
