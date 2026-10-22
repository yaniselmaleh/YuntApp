import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yunt App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
