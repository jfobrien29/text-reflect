import React from 'react';
import BaseLayout from '@/containers/BaseLayout';

const Blog: React.FC<any> = () => (
  <BaseLayout>
    <div className="flex flex-col max-w-2xl">
      <h1 className=" text-white text-2xl font-semibold">Blog</h1>

      <p className="mt-8 text-lg">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is
      </p>
    </div>
  </BaseLayout>
);

export default Blog;
