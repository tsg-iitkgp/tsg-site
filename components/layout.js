import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";

export const siteTitle = "TSG";

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Technology Student's Gymkhana" />
        <meta name="description" content="Indian Institute of Technology" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="%PUBLIC_URL%" />
        <meta property="og:title" content="Technology Student's Gymkhana" />
        <meta property="og:description" content="Indian Institute of Technology" />
        <meta property="og:image" content="%PUBLIC_URL%/preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="%PUBLIC_URL%" />
        <meta property="twitter:title" content="Technology Student's Gymkhana" />
        <meta property="twitter:description" content="Indian Institute of Technology" />
        <meta property="twitter:image" content="%PUBLIC_URL%/preview.png" />
      </Head>
      <Navbar />
      <main>
        {!home && (
          <div className="backToHome">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
