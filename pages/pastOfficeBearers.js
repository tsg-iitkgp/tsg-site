import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import senateData from "../public/senateData";

const years = ["2020", "2019", "2018", "2017", "2016"];

export default function Sports() {
  const [currentYear, setCurrentYear] = useState("2020");

  return (
    <Layout>
      <Head>
        <title>Past Office Bearers</title>
      </Head>
      <section className="office">
        <h2> Past Office Bearers</h2>

        <select value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Now render based on the value of the currentYear */}
        {senateData.data
          .filter((obj) => obj.year == currentYear)
          .map((item) => (
            <div>
              <div className="member">
                <h2>Vice President:</h2>
                <h3>{item.vp}</h3>
              </div>
              <div className="member">
                <h2> General Secretary Sports:</h2>
                <h3> {item.gsecsSports} </h3>
              </div>

              <div className="member">
                <h2> General Secretary Social and Cultural:</h2>
                <h3> {item.gsecsSocult} </h3>
              </div>

              <div className="member">
                <h2>General Secretary Technology:</h2>
                <h3>{item.gsecsTech}</h3>
              </div>

              <div className="member">
                <h2>General Secretary Students' Welfare:</h2>
                <h3>{item.gsecsStudentwelfare}</h3>
              </div>
            </div>
          ))}
      </section>
    </Layout>
  );
}
