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
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is... (I call this the lazy Lorem)
      </P>
      <P>Coming soon!</P>
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
