import React from 'react';
import { MetaProps } from '../types/layout';
import type { GetStaticProps } from 'next';

export const About = (): JSX.Element => {
  return (
    <>
      <div className="max-w-2xl px-8 py-4 mx-auto">
        <h1>About Page</h1>
        <p>Welcome to the about page</p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const customMeta: MetaProps = {
    title: 'About - Anurag Pradhan',
  };
  return {
    props: { customMeta },
  };
};

export default About;
