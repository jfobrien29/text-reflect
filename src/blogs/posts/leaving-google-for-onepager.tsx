import React from 'react';
import { IBlogPost } from '../all';
import { P } from '../common';

export const SLUG = 'leaving-google-for-onepager';
export const TITLE = 'Leaving Google for OnePager';
export const DATE = 'Coming soon...';
export const EXCERPT =
  'I spent months deciding if I should leave Google. I loved my job, my team, and the impact I was having on millions of students. On the other hand, I knew I was a small cog in a massive Google machine.';

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <P>
        Coming soon! Coming soon! Coming soon! Coming soon! Coming soon! Coming
        soon!
      </P>
      <P> - Jack</P>
    </>
  );
};

export const LeavingGoogleForOnePager: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};
