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
      <h1>Committees</h1>
      <h2>Sports &amp; Games Committee</h2>
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
        <h2>Social &amp; Cultural Committee</h2>
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

        <h2>Technology Committee</h2>
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
        <h2>Students' Welfare Committee</h2>
        <div className="society-cards">
          {committeesData.data
            .filter((a) => a.category === "studentwelfare")
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
