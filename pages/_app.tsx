import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Top Rates Application</title>
        <link key={1} rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
