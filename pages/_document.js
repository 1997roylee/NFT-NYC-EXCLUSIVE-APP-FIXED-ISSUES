import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link
          rel="stylesheet"
          media="screen"
          href="https://fontlibrary.org//face/open-sauce-one"
          type="text/css"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}