import React from 'react';
import { IBlogPost } from '../all';

export const SLUG = 'leaving-google-for-onepager';
export const TITLE = 'Leaving Google for OnePager';
export const DATE = 'Coming soon...';
export const EXCERPT =
  'I spent months deciding if I should leave Google. I loved my job, my team, and the impact I was having on millions of students. On the other hand, I knew I was a small cog in a massive Google machine.';

const BlogPost: React.FC<any> = () => {
  return (
    <>
      <p className="mt-8 text-lg">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is... (I call this the lazy Lorem)
      </p>

      <p className="mt-8 text-lg">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is
      </p>

      <p className="mt-8 text-lg">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is
      </p>
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
