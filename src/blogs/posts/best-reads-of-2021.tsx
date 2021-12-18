import React from 'react';
import { IBlogPost } from '../all';
import {
  A,
  Divider,
  Heading2,
  Heading3,
  Heading4,
  P,
  Quote,
  SubTitle,
} from '../common';

export const SLUG = 'best-reads-of-2021';
export const TITLE = 'Best Reads of 2021';
export const DATE = '2021-12-17';
export const EXCERPT =
  'Every year I make a list of the best books and articles I’ve read, and this time I’m making it public. I wholeheartedly recommend a read of everything on this list.';

const BlogPost: React.FC<any> = () => {
  return (
    <article>
      <P>
        The past few years I've made a list of the best books and articles I’ve
        read, but This this time I’m making it public. I wholeheartedly
        recommend a read of everything on this list!
      </P>
      <Heading2>Top 3 Books</Heading2>
      <P>
        Of the books I read this year, these three stuck out above the rest.
      </P>
      <Heading3>
        The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the
        Human Race{' '}
      </Heading3>
      <SubTitle>by Walter Isaacson</SubTitle>
      <Heading4>Why this book is awesome</Heading4>
      <P>
        This book is about CRISPR gene editing, the scientists behind the
        discoveries, and the ethics of it all. It’s well written, story driven,
        and hard to stop thinking about. I think it’s a must read.
      </P>
      <P>
        After reading this book, it feels clear to me that CRISPR gene editing
        is going to change the world fast. Jennifer Doudna’s groundbreaking
        paper on CRISPR was only published in 2012, and already in 2021 we’re
        seeing multiple FDA approved therapies treating human patients (editing
        their genes!).
      </P>
      <P>
        Worth the read for excellent background on the discovery of CRISPR, the
        competitive race to patent gene editing, the companies and therapies
        already in use today, and finally the ethics of editing a genome. CRISPR
        gene editing can be done in somatic cells (ex. eye cells, liver cells)
        and germ line cells (ex. stem cells that will become a fetus). Therapies
        in somatic cells have the promise of curing debilitating diseases for
        that single person, and editing done to germ line cells will affect that
        person and all of that persons decedents. What happens to the world when
        artificial changes can only be bought by the rich and are inherited
        forever? What happens when we play with the delicate balance of genetics
        in our own bodies and the ecosystems of the earth? No one knows, but
        we’ve turned a corner.
      </P>
      <P>
        Walter Isaacson is an incredible author, and the book is beautifully
        written. He makes a point to stress how easy it is to use CRISPR
        technology, and even has a chapter written about his own experience in a
        lab editing cells. I had some FOMO after reading, so I went and got an
        at home CRISPR kit myself and tried to edit cells in my apartment. It
        was a big success, and cemented my beliefs in CRISPR as a groundbreaking
        innovation.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I found this book thanks to a conversation I had in 2020 with Ernie
        Parizeau, former VC and adjunct professor of entrepreneurship, about
        whether or not I should leave my job to start a company. From that
        conversation Ernie suggested I read from a series of books he’d brought
        together over the years. It’s been an awesome resource to me, see the
        complete list here.
      </P>
      <Heading3>
        Liftoff: Elon Musk and the Desperate Early Days That Launched SpaceX
      </Heading3>
      <SubTitle>by Eric Berger</SubTitle>
      <Heading4>Why this book is awesome</Heading4>
      <P>
        SpaceX started as a chaotic startup not unlike Google or Amazon, but
        they wanted to make something much more ambitious: orbital rockets.
        SpaceX almost didn’t make it out of infancy, and Elon Musk almost went
        broke. Today, they’ve revived and transformed the space industry. It’s a
        wild story of how they made it.
      </P>
      <P>
        I’m not an Elon fan boy, but this book made me respect him. He took his
        $200m payout from PayPal, and tried to build rocket company from
        scratch! That amount of money was meant to fund the launch of 3 rockets,
        one of which had to be successful (spoiler alert, there’s a ton of
        explosions). This book follows a group of the early engineers at SpaceX
        and their mission to get something into orbit to prove out private space
        travel.
      </P>
      <P>
        They can’t secure a launch pad in the US, so they launch their first
        rockets from a small US military launch pad in the middle of the
        pacific. They can’t get
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I found this book the first week it came out after someone tweeted a
        paragraph from the book. Startups + space, I was hooked. A great read as
        I was thinking about startups.
      </P>
      <Heading3>Project Hail Mary: A Novel</Heading3>
      <SubTitle>by Andy Weir</SubTitle>
      <Heading4>Why this book is awesome</Heading4>
      <P>
        The best fiction book I’ve read in a long time. This book finds a way to
        make the science seem believable for some truly outrageous ideas. I
        can’t say much about the plot without giving more away, but I think if
        you liked reading the Martian by Andy Weir, you’ll love this book. It’s
        the Martian, taken 5 steps further into the stars.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I’d read a ton of non-fiction/startupy books and wanted to turn back
        into fiction. I liked the Martian, and saw that this book had been
        recently released. It’s incredible science fiction, and was hard to put
        down.
      </P>
      <Heading2>Top 3 Articles</Heading2>
      <P>
        I probably read at least 3 articles per day from sources like the The
        Hustle, Washington Post, and my twitter feed. It’s rare I save and share
        an article, but those I do I think are worth noting. (For the record, I
        found all of these via Twitter)
      </P>
      <Heading3>
        <A href="https://apoorvagovind.substack.com/p/how-to-waste-your-career-one-comfortable?r=9ajfy&utm_campaign=post&utm_medium=web&utm_source=twitter">
          How to waste your career, one comfortable year at a time
        </A>
      </Heading3>
      <SubTitle>By Apoorva Govind</SubTitle>
      <P>
        This article struck a nerve with me when I was deciding between leaving
        Google or working on OnePager full time. It starts with the question
        “What's the most expensive mistake you've made in your career?”
      </P>
      <P>
        The answer discussed in this article is complacency. Complacency is a
        cancer for big aspirations and your reputation. But how do you know when
        you’re being complacent and it’s time to make a change? Apoorva asks
        herself 5 questions every quarter, requiring a hit rate of 3/5 to
        continue down her current path:
      </P>
      <ul className="mt-6 list-disc ml-6">
        <li>
          <span className="font-semibold">Accomplishment</span>: Have I done
          anything noteworthy these last three months?
        </li>
        <li className="mt-2">
          <span className="font-semibold">Impact</span>: Would I write a line in
          my resume about the work I have done over these three months? Would I
          value this specific work experience if I was hiring for my own
          company?{' '}
        </li>
        <li className="mt-2">
          <span className="font-semibold">Growth/Future alignment</span>: Have I
          acquired valuable insights or skills? Are these skills aligned with my
          future goals?
        </li>
        <li className="mt-2">
          <span className="font-semibold">Challenge</span>: Have there been days
          when I was thinking about a work problem in the shower so profoundly
          that I forgot if I used the soap or not?
        </li>
        <li className="mt-2">
          <span className="font-semibold">Community</span>: Am I excited and
          happy to go to work every morning and see my teammates. Do I believe
          in the mission, vision, and leadership of this team or company? 
        </li>
      </ul>
      <P>
        I thought this framework was killer. Having felt all of these at some
        point but rarely all five at once, it a great system to structure your
        life and know if it's time for change.{' '}
        <A href="https://apoorvagovind.substack.com/p/how-to-waste-your-career-one-comfortable?r=9ajfy&utm_campaign=post&utm_medium=web&utm_source=jackobrien">
          Read the full article for more depth.
        </A>
      </P>
      <Heading3>
        <A href="https://cdixon.org/2009/09/19/climbing-the-wrong-hill/">
          Climbing the wrong hill
        </A>
      </Heading3>
      <SubTitle>By Chris Dixon</SubTitle>
      <P>
        Chris Dixon, entreprenuer and current a16z investor, wrote this article
        in 2009, but I stumbled upon it in the fall of 2021. Awesome reasoning
        why it’s best to experiment with various roles and opportunities early
        on in your career. You don’t want to commit too much time to climbing
        the wrong hill in your life, and it's always is tempting to keep
        trudging forward.
      </P>
      <P>
        It’s a short post about 6 paragraphs long,{' '}
        <A href="https://cdixon.org/2009/09/19/climbing-the-wrong-hill/">
          and absolutely worth the read
        </A>
        .
      </P>
      <Heading3>
        <A href="https://www.quantamagazine.org/the-evolutionary-argument-against-reality-20160421/">
          The Evolutionary Argument Against Reality
        </A>
      </Heading3>
      <SubTitle>By Amanda Gefter</SubTitle>
      <P>
        Ok this article's insane, had this in my notes as the “mind bending
        article.” It’s an interview with cognitive scientist Donald Hoffman, who
        claims that our perceptions of the world do not truly depict the reality
        we’re living in. It sounds crazy, but it’s worth a read.
      </P>
      <P>
        I was grabbed by their discussion of neuroscience and quantum
        physics—two at odds studies that meet in the middle at consciousness.
      </P>
      <Quote>
        On one side you’ll find researchers scratching their chins raw trying to
        understand how a three-pound lump of gray matter obeying nothing more
        than the ordinary laws of physics can give rise to first-person
        conscious experience. This is the aptly named “hard problem.”
      </Quote>
      <Quote>
        On the other side are quantum physicists, marveling at the strange fact
        that quantum systems don’t seem to be definite objects localized in
        space until we come along to observe them — whether we are conscious
        humans or inanimate measuring devices. Experiment after experiment has
        shown — defying common sense — that if we assume that the particles that
        make up ordinary objects have an objective, observer-independent
        existence, we get the wrong answers.
      </Quote>
      <P>
        AKA consciousness in the brain doesn’t make sense to neuroscientists,
        and quantum physics doesn’t make sense without consciousness.
        Interesting thought, and the discussion on reality is mind bending.
      </P>
      <Divider />
      <P>
        Hope you enjoyed this list, and if you end up reading something please
        let me know!
      </P>
      <P> - Jack</P>
    </article>
  );
};

export const BestOf2021: IBlogPost = {
  slug: SLUG,
  title: TITLE,
  date: DATE,
  excerpt: EXCERPT,
  post: <BlogPost />,
};

export default BlogPost;
