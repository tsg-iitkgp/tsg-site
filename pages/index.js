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
      <section>
        <h2>Technology Student's Gymkhana</h2>
        <p>
          This is a basic design for the new website of Student's Gymkhana, made using next.js.
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <p>The blog is the basic flat normal structure.</p>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}
