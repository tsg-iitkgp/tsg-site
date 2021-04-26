import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { ResponsiveBar } from "@nivo/bar";
import pointsData from "../public/pointsData";
import Chart from "../components/chart";

const years = ["2018", "2017"];

export default function Sports() {
  const [currentTab, setCurrentTab] = useState("sports");
  const [currentYear, setCurrentYear] = useState("2018");

  return (
    <Layout>
      <Head>
        <title>Past Office Bearers</title>
      </Head>
      <section className="office content">
        <h2> Past Office Bearers</h2>

        <select className="select" value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Now render based on the value of the currentYear */}
      </section>
    </Layout>
  );
}
