import { ReactNode } from 'react';
import { IntroducingTextReflect } from './posts/indroducing-text-reflect';

export interface IBlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
  post?: ReactNode;
  isExternal?: boolean;
}

export const ALL_BLOG_POSTS: IBlogPost[] = [IntroducingTextReflect];

export const HOSTED_BLOG_POSTS: IBlogPost[] = [IntroducingTextReflect];

export const ALL_BLOGS_MAP = new Map<string, IBlogPost>(
  ALL_BLOG_POSTS.reduce((postsMap, post) => {
    postsMap.set(post.slug, post);
    return postsMap;
  }, new Map<string, IBlogPost>()),
);

export const BLOG_SLUGS = ALL_BLOG_POSTS.map((post) => post.slug);
export const HOSTED_BLOG_SLUGS = HOSTED_BLOG_POSTS.map((post) => post.slug);
