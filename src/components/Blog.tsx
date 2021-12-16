import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const Blog: React.FC<any> = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col max-w-2xl">
        <h1 className=" text-white text-2xl font-semibold">Blog</h1>

        <p className="mt-8 text-lg">Coming soon...</p>
      </div>
    </BaseLayout>
  );
};

export default Blog;
