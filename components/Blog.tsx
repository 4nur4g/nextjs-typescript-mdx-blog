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
        {/* <div className="grid grid-cols-[max-content_max-content] gap-3 max-w-2xl px-8 py-4 mx-auto">
          <Image
            className="rounded-lg"
            src={'/images/anurag.jpg'}
            width={150}
            height={150}
          />
          <div className="self-end">
            <h1 className="m-0 font-semibold text-2xl">Anuarg Pradhan</h1>
            <p className="m-0">Full stack/Android developer</p>
            <p className="m-0">Documenting my journey here</p>
          </div>
        </div> */}
        <div className="max-w-2xl px-8 py-4 mx-auto">{children}</div>
      </main>
    </>
  );
};

export default Blog;
