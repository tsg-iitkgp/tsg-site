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

      <h2>Sports &amp; Games Societies</h2>
      <div className="society-cards">
        {committeesData.data
          .filter((a) => a.category === "Sports & Games")
          .map((society) => {
            return (
              <Card
                name={society.name}
                shortform={society.shortform}
                description={society.description}
                Heads={society.Heads}
              />
            );
          })}
      </div>

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
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
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
                  shortform={society.shortform}
                  description={society.description}
                  Heads={society.Heads}
                />
              );
            })}
        </div>
      </section>
    </Layout>
  );
}
