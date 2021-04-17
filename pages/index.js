import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/societies";

import facilitiesData from "../public/facilities";
import ImageModal from "../components/imageModal";

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
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="home intro">
        <img src="IIT_Kharagpur_Logo.svg" />
        <div className="headings">
          <h1>Technology Students' Gymkhana</h1>
          <p>Indian Institute of Technology Kharagpur</p>
        </div>
      </section>

      {/* uncomment the code below after making the website single paged */}
      {/* <section className="facilities">
        <h2>Facilities &amp; Events</h2>
        <div className="image-modals">
          {facilitiesData.data.map((facility) => (
            <ImageModal images={facility.images} description={facility.description} title={facility.title} />
          ))}
        </div>
      </section> */}
    </Layout>
  );
}
