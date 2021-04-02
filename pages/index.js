import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/societies";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="intro">
        <h1>Technology Students' Gymkhana</h1>
        <p>Indian Institute of Technology Kharagpur</p>
      </section>
    </Layout>
  );
}
