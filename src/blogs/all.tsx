import { ReactNode } from 'react';
import { ElevateFounderDiversity, HowToWriteSoftware } from './external';
import { YearInReview2021 } from './posts/year-in-review-2021';
import { BestOf2021 } from './posts/best-reads-of-2021';
import { LeavingGoogleForOnePager } from './posts/leaving-google-for-onepager';

export interface IBlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
  post?: ReactNode;
  isExternal?: boolean;
}

export const LANDING_BLOG_POSTS: IBlogPost[] = [
  BestOf2021,
  HowToWriteSoftware,
  ElevateFounderDiversity,
];

export const ALL_BLOG_POSTS: IBlogPost[] = [
  BestOf2021,
  HowToWriteSoftware,
  ElevateFounderDiversity,
  LeavingGoogleForOnePager,
  YearInReview2021,
];

export const ALL_BLOGS_MAP = new Map<string, IBlogPost>(
  ALL_BLOG_POSTS.reduce((postsMap, post) => {
    postsMap.set(post.slug, post);
    return postsMap;
  }, new Map<string, IBlogPost>()),
);

export const BLOG_SLUGS = Array.from(ALL_BLOGS_MAP.keys());
