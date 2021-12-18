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
export const EXCERPT = `My top reads from 2021. I've reflected on my favorite books and articles the past several years, but this year (and in years to come) I'm making my list public. I wholeheartedly recommend a read of everything on this mentioned!`;

const BlogPost: React.FC<any> = () => {
  return (
    <article>
      <P>
        If you're reading this, I'm probably recommending you a book! I like to
        think back on my favorite books and articles at the end of the year, and
        this year (and in years to come) I'm published the best of the best. I
        wholeheartedly recommend a read of everything mentioned!
      </P>
      <Heading2 id="books">My Top 3 Books</Heading2>
      <P>
        Of the books I read this year, these three stuck with me more than the
        rest.
      </P>
      <Heading3 id="book1">
        The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the
        Human Race{' '}
      </Heading3>
      <SubTitle>by Walter Isaacson</SubTitle>

      <Heading4>Why this book is awesome</Heading4>
      <P>
        This book is a deep dive into the nascent gene editing technique CRISPR,
        the scientists who discovered it, and the ethics of tampering with
        evolution. It’s extremely well written, story driven, and hard to stop
        thinking about.
      </P>
      <P>
        CRISPR gene editing is already changing the world as we know it—this is
        not hyperbole. Jennifer Doudna’s groundbreaking paper on CRISPR was only
        published in 2012, and by 2018 the first known children with with CRISPR
        edited genes were born in China.
      </P>
      <P>
        Worth the read for excellent background on the discovery of CRISPR, the
        competitive race to patent it, and the ethics of editing a genome.
        CRISPR gene editing can be done in somatic cells (ex. eye cells, liver
        cells) and germ line cells (ex. stem cells that become a baby).
        Therapies in somatic cells can cure disease for that single patient, but
        editing done to germ line cells will affect that person and all of that
        person's decedents. What happens to the world when artificial changes
        can only be bought by some and are inherited by their bloodline forever?
        What happens when we play with the delicate balance of genetics in our
        own bodies and the ecosystems of world? No one knows, but we’ve
        definitely turned a corner.
      </P>
      <P>
        Walter Isaacson is an incredible author, and the book is beautifully
        written. He makes a point to stress how easy it is to use CRISPR
        technology, and even has a chapter about his own experience editing
        cells in a lab. I had some FOMO after reading, so I went and got an at
        home CRISPR kit and attempted to edit genes in my apartment.{' '}
        <A href="https://twitter.com/thejackobrien/status/1454879546335969283?s=20">
          It was a big success
        </A>
        , and I don't think there's anything like in-Manhattan-apartment
        biohacking to cement my belief in CRISPR as a groundbreaking innovation.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I found this book thanks to a conversation I had in 2020 with Ernie
        Parizeau, former VC and adjunct professor of entrepreneurship. I was
        asking him for career advice on whether I should leave Google to start a
        company (I didn't leave for another year), and he suggested I read from
        a series of books he’d curated on entrepreneurship, life, and venture
        capital. It's been an awesome resource to me,{' '}
        <A href="https://docs.google.com/document/d/1Z9hXCGS9YGyF8jkoJV2F8UJqMUvIWyRKUaYcDEZYTYs/edit">
          and you can check out the complete list here
        </A>
        .
      </P>

      <P>
        <A href="https://www.amazon.com/dp/B08MFT5J95/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">
          Check out The Code Breaker on Amazon
        </A>
      </P>

      <Heading3 id="book2">
        Liftoff: Elon Musk and the Desperate Early Days That Launched SpaceX
      </Heading3>
      <SubTitle>by Eric Berger</SubTitle>

      <Heading4>Why this book is awesome</Heading4>
      <P>
        SpaceX started as a chaotic scrappy startup just like Google or Amazon,
        but they wanted to make something much more ambitious: reusable orbital
        rockets. It was so ambitious they almost didn’t make it out of thier
        infancy, and Musk almost went broke. Today, SpaceX has single handedly
        reclaimed US space dominance and transformed the space industry. It’s a
        wild story how they got there.
      </P>
      <P>
        One andidote that stuck out to me: an intern litterally crawled into a
        rocket fuselage to stop it from collapsing during air freight and saved
        the day (and maybe the company). The reason they had the rocket on air
        freight? SpaceX couldn't secure a launch pad in the US, so they had to
        build one near a US military base in the middle of the Pacific Ocean.
      </P>
      <P>
        I’m not an Elon fan boy, but it's hard not to respect his ambition after
        reading this story. He took his $200m payout from PayPal and tried to
        build a rocket company from scratch! That amount of money was budgetted
        to fund the launch of 3 rockets, only one of which had to be successful
        for the company to survive (spoiler alert, there’s a ton of explosions
        and it comes down to the wire). This book follows the early engineers at
        SpaceX and their mission to get something into orbit and prove that
        privatized and cheaper space travel was possible.
      </P>
      <P>
        I read this book and thought "damn, I should have been a mechanical
        engineer!" But more than that, I got lost in the excitement of space
        travel, the work of ambitious & talented people, and the chaos of an
        early stage company.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I found this book the first week it came out after{' '}
        <A href="https://twitter.com/Austen/status/1368939482687229955?s=20">
          someone tweeted an interesting paragraph
        </A>
        . Reading about startups + space, I was hooked. Consider this a positive
        data point on taking random advice from Twitter!
      </P>

      <P>
        <A href="https://www.amazon.com/dp/B088FQK2K2/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1">
          Check out Lift Off on Amazon
        </A>
      </P>

      <Heading3 id="book3">Project Hail Mary: A Novel</Heading3>
      <SubTitle>by Andy Weir</SubTitle>

      <Heading4>Why this book is awesome</Heading4>
      <P>
        The best fiction book I’ve read in a long time. This book finds a way to
        make crazy science seem believable enough for some truly outrageous
        ideas. If you liked reading The Martian by Andy Weir, you’ll love this
        book. It’s the Martian, taken 100 steps further.
      </P>
      <P>
        Half of the book revolves around our main character, a biology professor
        on a solo mission in deep space. The other half happens as a series of
        flashbacks on earth. Slowly, it's revealed why a mission to deep space
        was necessary, how that mission would be theoretically possible, and how
        the entire whole world rallies together make it happen. It's an awesome
        page turner, and I think they're making a movie out of it soon.
      </P>
      <Heading4>How I found it</Heading4>
      <P>
        I’d read a ton of non-fiction/startupy books and wanted to turn back
        into fiction. I liked the Martian, and saw that this book had been
        recently released. I think it's incredible science fiction, and was hard
        to put down.
      </P>

      <P>
        <A href="https://www.amazon.com/Project-Hail-Mary-Andy-Weir-ebook/dp/B08FHBV4ZX/ref=sr_1_1?crid=2S11IXHLZ6NWT&keywords=hail+mary&qid=1639796465&s=digital-text&sprefix=hail+ma%2Cdigital-text%2C160&sr=1-1">
          Check out Project Hail Mary on Amazon
        </A>
      </P>

      {/* <Heading3 id="book-honorable-mentions">Honorable Mention Books</Heading3>
      <Heading4>Lean Startup by Eric Ries</Heading4>
      <P>
        Excellent framework for creative metrics driven startups. Your goal at a
        startup is to test your business model as soon as possible: build, test,
        analyze. Great advice on crafting metrics, how to measure success, and
        when to pivot. Was a great read before starting a company.
      </P>

      <Heading4>Ready Player One</Heading4>
      <P>
        A distopian future where people escape the apocalyptic real world for
        life inside a VR game. Quick page turner, extremely nerdy (in a good
        way), and more relevant today with the impending ~metaverse~. Spoiler
        alert, the moral of the story is that you have your best experiences in
        the real world, not online.
      </P> */}

      <Heading2 id="articles">My Top 3 Articles</Heading2>
      <P>
        I probably read (skim) at least 3 articles per day from sources like the{' '}
        <A href="https://thehustle.co/">The Hustle</A>,{' '}
        <A href="https://www.washingtonpost.com/">The Washington Post</A>, and
        my Twitter feed. It’s rare I remember an article more than a week, but
        the best ones stick with me. (For the record, I found these three
        articles via Twitter)
      </P>

      <Heading3 id="article1">
        <A href="https://apoorvagovind.substack.com/p/how-to-waste-your-career-one-comfortable?r=9ajfy&utm_campaign=post&utm_medium=web&utm_source=twitter">
          How to waste your career, one comfortable year at a time
        </A>
      </Heading3>
      <SubTitle>By Apoorva Govind</SubTitle>
      <P>
        This article struck a nerve with me when I was deciding to leave Google
        and work on OnePager full time. It starts with the question “What's the
        most expensive mistake you've made in your career?”
      </P>
      <P>
        Apoorva claims the answer is complacency. Complacency, she says, is a
        cancer for big aspirations and your reputation. But how do you know when
        you’re being complacent and it’s time to make a change? Apoorva asks
        herself 5 questions every quarter, requiring a hit rate of 3/5 to
        continue down her current path:
      </P>
      <ul className="mt-6 list-disc ml-6 orange-list">
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
        point but rarely all five at once, it's a great system to structure your
        life and know if it's time for change.{' '}
        <A href="https://apoorvagovind.substack.com/p/how-to-waste-your-career-one-comfortable?r=9ajfy&utm_campaign=post&utm_medium=web&utm_source=jackobrien">
          Read the full article here for more depth.
        </A>
      </P>

      <Heading3 id="article2">
        <A href="https://cdixon.org/2009/09/19/climbing-the-wrong-hill/">
          Climbing the wrong hill
        </A>
      </Heading3>
      <SubTitle>By Chris Dixon</SubTitle>
      <P>
        Chris Dixon, entreprenuer and current a16z investor, wrote this article
        in 2009, but I stumbled across it in the fall of 2021. Awesome reasoning
        why it’s best to experiment with various roles and opportunities early
        on in your career. You don’t want to commit too much time to climbing
        the wrong hill in your life and find the peak of that hill isn't as high
        as you thought. It's in our nature to keep trudging forward, but picking
        the right hill is the real challenge.
      </P>
      <P>
        It’s a short post about 6 paragraphs long,{' '}
        <A href="https://cdixon.org/2009/09/19/climbing-the-wrong-hill/">
          and absolutely worth the read
        </A>
        .
      </P>

      <Heading3 id="article3">
        <A href="https://www.quantamagazine.org/the-evolutionary-argument-against-reality-20160421/">
          The Evolutionary Argument Against Reality
        </A>
      </Heading3>
      <SubTitle>By Amanda Gefter</SubTitle>
      <P>
        Ok this article's insane, and I had it in my notes as the “mind bending
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
        Hope you enjoyed this list, and if you end up reading something let me
        know!
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
