import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RateMe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen grid grid-auto-1fr-auto font-mono">
        <NavigationBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
