import React from 'react';
import { IBlogPost } from '../all';
import { P } from '../common';

export const SLUG = 'year-in-review-2021';
export const TITLE = '2021 Year in Review';
export const DATE = 'Coming soon...';
export const EXCERPT =
  '2021 Year in Review: Big Decisions, Big Races, and Back in NYC!';

const BlogPost: React.FC<any> = () => {
  return (
    <article>
      <P>
        Coming soon! Coming soon! Coming soon! Coming soon! Coming soon! Coming
        soon!
      </P>
      <P> - Jack</P>
    </article>
  );
};

export const YearInReview2021: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};
