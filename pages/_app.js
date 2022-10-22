import "../styles/globals.css";
import { AuthUserProvider } from "../auth/signin";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Head>
        <title>MacroTrack</title>
      </Head>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
