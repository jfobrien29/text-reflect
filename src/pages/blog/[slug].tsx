import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { ALL_BLOGS_MAP, BLOG_SLUGS } from '@/blogs/all';
import BlogPost from '@/components/BlogPost';

export default function BlogPage({ slug }: { slug: string }) {
  return <BlogPost slug={slug} />;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  if (!ALL_BLOGS_MAP.has(params.slug)) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  return {
    props: { slug: params.slug || null },
  };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: BLOG_SLUGS.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};
