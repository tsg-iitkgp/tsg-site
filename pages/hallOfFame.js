import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { ResponsiveBar } from "@nivo/bar";
import pointsData from "../public/pointsData";
import Chart from "../components/chart";

export default function Fame() {
  const [currentTab, setCurrentTab] = useState("sports");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <section className="points content">
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
          <div className={`tab ${currentTab == "specialRecog" ? "active" : ""}`} onClick={() => handleTabChange("specialRecog")}>
            Special Recognition
          </div>
        </div>
        <div className="chart">
          {currentTab == "sports" ? (
            <Chart
              data={pointsData.sportsData}
              keys={[
                "badminton",
                "lawnTennis",
                "football",
                "basketball",
                "hockey",
                "bridge",
                "tableTennis",
                "volleyball",
                "weightlifting",
                "sqaush",
                "chess",
                "cricket",
                "athletics",
              ]}
              layout={"vertical"}
            />
          ) : (
            <Chart
              data={pointsData.socultData}
              keys={[
                "easternVocals",
                "westernVocals",
                "easternInstrumentals",
                "groups",
                "westernInstrumentals",
                "sketching",
                "cartooning",
                "painting",
                "clayModelling",
                "bengaliElocution",
                "debate",
                "englishElocution",
                "wtgw",
                "quiz",
                "stagePlay",
                "choreography",
                "streetPlay",
              ]}
              layout={"vertical"}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
