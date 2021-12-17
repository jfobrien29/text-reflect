import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { TWITTER_LINK } from '@/utils/constants';

// const Card: React.FC<any> = ({ title, text }) => {
//   return (
//     <div className="group w-3/4 md:w-56 h-64 p-3 border-white border rounded-sm hover:bg-white hover:shadow-lg transform duration-500 ease-in-out hover:-translate-y-1">
//       <h2 className="text-white font-semibold text-lg group-hover:text-orange">
//         {title}
//       </h2>
//       <p className="text-white text-sm group-hover:text-orange">{text}</p>
//     </div>
//   );
// };

const Landing: React.FC<any> = () => (
  <BaseLayout>
    <div className="flex flex-col max-w-2xl">
      <h1 className="text-white text-xl md:text-2xl font-semibold">
        I&apos;m a Co-Founder of{' '}
        <a className="underline" href="https://onepager.vc">
          OnePager
        </a>
        , interested in programming, startups, education, biotech, and climate
        change solutions. At my core, I like to build things.
      </h1>

      {/** divider */}
      <div className="mt-8 h-px bg-white w-3/4 mx-auto" />

      <h2 className="mt-8 text-lg">
        For my latest,{' '}
        <a className="underline" href={TWITTER_LINK}>
          follow me on Twitter.
        </a>
      </h2>

      <h2 className="mt-8 italic text-lg">Highlighed blog posts</h2>

      <h3 className="mt-4 text-lg">Coming soon...</h3>
    </div>
  </BaseLayout>
);

export default Landing;
