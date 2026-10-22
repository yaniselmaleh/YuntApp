import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr-FR">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800|Playfair+Display:400,700"
            rel="stylesheet"
          />
        </Head>
        <body data-lang="fr" data-countrycode="fr">
          <main>
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    );
  }
}
