import React from 'react';
import { MetaProps } from '../types/layout';
// import Image from 'next/image';

type BlogProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Blog = ({ children }: BlogProps): JSX.Element => {
  return (
    <>
      <main>
        <div className="max-w-2xl px-8 py-4 mx-auto">{children}</div>
      </main>
    </>
  );
};

export default Blog;
