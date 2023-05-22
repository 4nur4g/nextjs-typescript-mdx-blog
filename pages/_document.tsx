import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-darkback text-gray-900 dark:text-white transition duration-500 ease-in-out">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
