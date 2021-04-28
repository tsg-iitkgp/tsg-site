import { useState } from "react";
import { isSameMinute } from "date-fns";
import Head from "next/head";
import Layout from "../components/layout";
import pointsData from "../public/pointsData";

const years = ["2020", "2019", "2018", "2017", "2016"];

export default function InterIIT() {
  const [currentTab, setCurrentTab] = useState("sports");
  const [currentYear, setCurrentYear] = useState("2019");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>InterIIT 2019</title>
      </Head>
      <section className="awards content">
        <h2>
          InterIIT {currentYear} {currentTab} Standings - Men
        </h2>
        <div className="tabs">
          <div className={`tab ${currentTab == "sports" ? "active" : ""}`} onClick={() => handleTabChange("sports")}>
            Sports &amp; Games
          </div>
          <div className={`tab ${currentTab == "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
            Technology
          </div>
          <div className={`tab ${currentTab == "socult" ? "active" : ""}`} onClick={() => handleTabChange("socult")}>
            Socult
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
                <th>Sport</th>
                <th>
                  <span className="medal gold"></span> Gold
                </th>
                <th>
                  <span className="medal silver"></span> Silver
                </th>
                <th>
                  <span className="medal bronze"></span> Bronze
                </th>
              </tr>
            </thead>
            <tbody>
              {pointsData.interIIT[0].map((item) => (
                <tr>
                  <td>{item.Sport}</td>
                  <td>{item.Gold} </td>
                  <td>{item.Silver} </td>
                  <td>{item.Bronze} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>
          InterIIT {currentYear} {currentTab} Standings - Women
        </h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sport</th>
                <th>
                  <span className="medal gold"></span> Gold
                </th>
                <th>
                  <span className="medal silver"></span> Silver
                </th>
                <th>
                  <span className="medal bronze"></span> Bronze
                </th>
              </tr>
            </thead>
            <tbody>
              {pointsData.interIIT[0].map((item) => (
                <tr>
                  <td>{item.Sport}</td>
                  <td>{item.Gold} </td>
                  <td>{item.Silver} </td>
                  <td>{item.Bronze} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
