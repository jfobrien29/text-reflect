import React from 'react';

import BaseLayout from '@/containers/BaseLayout';

const Landing: React.FC<any> = () => (
  <BaseLayout>
    <div className="flex flex-col w-full align-center">
      <div className="flex flex-col justify-center max-w-3xl h-screen px-4 negative-landing-margin mx-auto">
        <h1 className="text-xl leading-7 md:text-4xl font-semibold">
          Remember every experience.
        </h1>
      </div>
    </div>
  </BaseLayout>
);

export default Landing;
