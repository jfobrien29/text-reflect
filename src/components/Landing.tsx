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

const Landing: React.FC<any> = () => {
  return (
    <BaseLayout>
      <div className="bg-orange">
        {/** Header */}
        <div className="flex flex-col">
          <h1 className=" text-white text-3xl font-semibold max-w-2xl">
            I'm a Co-Founder of{' '}
            <a className="underline" href="https://onepager.vc">
              OnePager
            </a>
            , interested in programming, startups, education, biotech, and
            climate change solutions. At my core, I'm a builder.
          </h1>

          <h2 className="mt-8 text-lg">
            For my latest thoughts,{' '}
            <a className="underline" href={TWITTER_LINK}>
              follow me on Twitter.
            </a>
          </h2>

          <h2 className="mt-8 italic text-lg">Highlighed blog posts</h2>

          <h3 className="mt-4 text-lg">Coming soon...</h3>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Landing;
