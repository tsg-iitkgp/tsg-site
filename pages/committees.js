import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/committeeCard";
import committeesData from "../public/committeesData";
import Router from "next/router";

export default function Committees() {
  return (
    <Layout>
      <Head>
        <title>Committees</title>
      </Head>
      <section className="societies content">
        <h1>Committees</h1>
        <h2>Social &amp; Cultural Societies</h2>
        <div className="society-cards">
          {committeesData.data
            .filter((a) => a.category === "Socult")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>

        <h2>Tech Societies</h2>
        <div className="society-cards">
          {committeesData.data
            .filter((a) => a.category === "Tech")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>

        <h2>Sports &amp; Games Societies</h2>
        <div className="society-cards">
          {committeesData.data
            .filter((a) => a.category === "Sports & Games")
            .map((society) => {
              return (
                <Card
                  name={society.name}
                  facebook_link={society.facebook_link}
                  wiki_link={society.wiki_link}
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                  website={society.website}
                />
              );
            })}
        </div>
      </section>
    </Layout>
  );
}
