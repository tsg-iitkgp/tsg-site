import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import awardsData from "../public/awardsData.json";

const years = ["2017", "2016", "2015"];

export default function Fame() {
  const [currentTab, setCurrentTab] = useState("sports");
  const [currentYear, setCurrentYear] = useState("2015");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <section className="awards content">
        <h2>TSG Awards!</h2>

        <div className="tabs">
          <div className={`tab ${currentTab == "sports" ? "active" : ""}`} onClick={() => handleTabChange("sports")}>
            Sports &amp; Games
          </div>
          <div className={`tab ${currentTab == "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
            Technology
          </div>
          <div className={`tab ${currentTab == "socult" ? "active" : ""}`} onClick={() => handleTabChange("socult")}>
            Social & Cultural
          </div>
          <div
            className={`tab ${currentTab == "specialRecog" ? "active" : ""}`}
            onClick={() => handleTabChange("specialRecog")}
          >
            Special Recognition
          </div>
        </div>

        <select value={currentYear} onChange={(e) => setCurrentYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Institute Award</th>
                {currentTab == "sports" && <th>Game</th>}
              </tr>
            </thead>
            <tbody>
              {awardsData[currentYear][currentTab].map((winner) => (
                <tr>
                  <td>{winner.Name}</td>
                  <td>{winner.Roll} </td>
                  <td>{winner.Award}</td>
                  {currentTab == "sports" && <td>{winner.Game}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
