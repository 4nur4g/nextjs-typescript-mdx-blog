import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="py-8 mx-auto">
      <div className="max-w-2xl px-8 mx-auto">
        {`© Copyright ${new Date().getFullYear()} `}
        <a
          className="text-gray-900 dark:text-white "
          href="https://twitter.com/"
        >
          Anurag Pradhan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
