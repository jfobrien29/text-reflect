import React from 'react';
import { IBlogPost } from '../all';
import { Divider, P } from '../common';

export const SLUG = 'introducing-text-reflect';
export const TITLE = 'Introducing Text Reflect';
export const DATE = '2021-12-20';
export const EXCERPT = `I think there's a need to be more concious about your life.`;

const BlogPost: React.FC<any> = () => {
  return (
    <article>
      <P>
        I think we all need to be more concious about the decisions we're making
        in our lives. I've tried a several times to diary or take take notes on
        my experiences, with some success. Always I've lost steam, or not known
        what to do once I've collected my notes.
      </P>
      <P>
        That's why I'm testing out this new tool, text reflect. Record the
        decisions you make, the choices you had, and the average experiences you
        have every day. We'll send you daily reminders, and all you need to do
        is text back to record your thoughts.
      </P>
      <P>
        Then, each month we'll send you a round up of your thoughts, your
        monthly sentiment, and a word cloud of your most used phrases.
      </P>
      <Divider />
      <P>
        Hope you enjoy it! If you have any questions, feel free to reach out via
        Twitter.
      </P>
      <P> - Jack</P>
    </article>
  );
};

export const IntroducingTextReflect: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};
