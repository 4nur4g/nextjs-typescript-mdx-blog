import React from 'react';
import { MetaProps } from '../types/layout';

export const About = (): JSX.Element => {
  const customMeta: MetaProps = {
    title: 'About - Anurag Pradhan',
  };

  return (
    <>
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </>
  );
};

export default About;
