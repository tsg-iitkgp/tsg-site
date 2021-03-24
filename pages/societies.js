import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";

export default function Societies() {
  return (
    <Layout home>
      <Head>
        <title>Societies</title>
      </Head>
      <section className="contact content">
        <h1>Societies &amp; Clubs</h1>
        <div className="society-cards">
          {societiesData.data.map((society) => {
            return (
              <Card
                name={society.name}
                facebook_link={society.facebook_link}
                wiki_link={society.wiki_link}
                shortform={society.shortform}
                description={society.description}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
