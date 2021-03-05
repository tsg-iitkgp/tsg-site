import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import { getSortedPostsData } from '../lib/posts';

import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section class="intro">
        <h1>Technology Student's Gymkhana</h1>
        <p>
          This is a basic design for the new website of Student's Gymkhana, made using next.js.
        </p>
      </section>
    </Layout>
  );
}
