import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen grid grid-auto-1fr-auto">
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;
