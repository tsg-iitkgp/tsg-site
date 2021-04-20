import Head from "next/head";
import Layout from "../components/layout";
import { ResponsiveBar } from "@nivo/bar";
import pointsData from "../public/pointsData";
import Chart from "../components/chart";

export default function Sports() {
  return (
    <Layout>
      <Head>
        <title>Sports &amp; Games</title>
      </Head>
      <section className="about content">
        <div className="chart">
          <h2> Points Tally GC 18-19</h2>
          <Chart />
        </div>
      </section>
    </Layout>
  );
}
