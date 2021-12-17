import React from 'react';
import BaseLayout from '@/containers/BaseLayout';
import { ALL_BLOGS, Blog } from '@/blogs/all';

const BlogPost: React.FC<any> = ({ slug }) => {
  const blog: Blog = ALL_BLOGS.get(slug)!;
  console.log(blog.post?.toString());
  return (
    <BaseLayout>
      <div className="flex flex-col max-w-3xl p-6 bg-white text-slate-700 rounded-md shadow-xl">
        <h1 className="text-2xl font-semibold">{blog.title}</h1>

        {blog.post}
      </div>
    </BaseLayout>
  );
};

export default BlogPost;
