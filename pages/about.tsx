import React from 'react';
import { MetaProps } from '../types/layout';

export const About = (): JSX.Element => {
  const customMeta: MetaProps = {
    title: 'About - Anurag Pradhan',
  };

  return (
    <>
      <div className="max-w-2xl px-8 py-4 mx-auto">
        <h1>About Page</h1>
        <p>Welcome to the about page</p>
      </div>
    </>
  );
};

export default About;
