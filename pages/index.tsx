import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
// import Image from 'next/image';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <>
      {/* <div className="grid grid-cols-[max-content_max-content] gap-3">
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
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);
  return {
    props: { posts },
  };
};

export default Index;
