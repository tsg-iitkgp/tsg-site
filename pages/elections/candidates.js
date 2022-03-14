import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Card from "../../components/electionCard";
import electionData from "../../public/electionsData";

const posts = [
  { value: "Football", key: "Football" },
  { value: "Cricket", key: "Cricket" },
  { value: "Hockey", key: "Hockey" },
  { value: "Tennis", key: "Tennis" },
  { value: "Indoor Games", key: "IndoorGames" },
  { value: "Volleyball", key: "Volleyball" },
  { value: "Basketball", key: "Basketball" },
  { value: "Badminton", key: "Badminton" },
  { value: "Gymnasium & Weightlifting", key: "Gymnasium" },
  { value: "Athletics", key: "Athletics" },
  { value: "Aquatics", key: "Aquatics" },
  { value: "Squash", key: "Squash" },
  { value: "Entertainment", key: "Entertainment" },
  { value: "Dramatics", key: "Dramatics" },
  { value: "Journal", key: "Journal" },
  { value: "Literary", key: "Literary" },
  { value: "Film & Photography", key: "Film" },
  { value: "Fine Arts & Modelling", key: "FineArts" },
  { value: "Knowledge Cup", key: "KnowledgeCup" },
  { value: "Application Cup", key: "ApplicationCup" },
  { value: "Innovation Cup", key: "InnovationCup" },
  { value: "Strategy Cup", key: "StrategyCup" },
  { value: "Academic Help", key: "Ahelp" },
  { value: "Community & Crisis", key: "CnC" },
];

export default function Elections() {
  const [currentTab, setCurrentTab] = useState("VP");
  const [currentPost, setCurrentPost] = useState({ value: "Football", key: "Football" });

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>TSG Elections</title>
      </Head>
      <section className="points content">
        <h2>Technology Students' Gymkhana Elections 2021-2022</h2>

        <div className="tabs">
          <div className={`tab ${currentTab == "VP" ? "active" : ""}`} onClick={() => handleTabChange("VP")}>
            Vice President
          </div>
          <div
            className={`tab ${currentTab == "Gsec_Sports" ? "active" : ""}`}
            onClick={() => handleTabChange("Gsec_Sports")}
          >
            G.Sec Sports &amp; Games
          </div>
          <div
            className={`tab ${currentTab == "Gsec_Socult" ? "active" : ""}`}
            onClick={() => handleTabChange("Gsec_Socult")}
          >
            G.Sec Social &amp; Cultural
          </div>{" "}
          <div
            className={`tab ${currentTab == "Gsec_Tech" ? "active" : ""}`}
            onClick={() => handleTabChange("Gsec_Tech")}
          >
            G.Sec Tech
          </div>
          <div className={`tab ${currentTab == "Gsec_WM" ? "active" : ""}`} onClick={() => handleTabChange("Gsec_WM")}>
            G.Sec Students' Welfare (Male)
          </div>
          <div className={`tab ${currentTab == "Gsec_WF" ? "active" : ""}`} onClick={() => handleTabChange("Gsec_WF")}>
            G.Sec Students' Welfare (Female)
          </div>
          <div className={`tab ${currentTab == "Secy" ? "active" : ""}`} onClick={() => handleTabChange("Secy")}>
            Secretaries
          </div>
        </div>
        {currentTab === "Secy" && (
          <select
            value={JSON.stringify(currentPost)}
            onChange={(e) => {
              setCurrentPost(JSON.parse(e.target.value));
            }}
          >
            {posts.map((post) => (
              <option key={post.key} value={JSON.stringify(post)}>
                {post.value}
              </option>
            ))}
          </select>
        )}
        <h2>Candidates</h2>
        <div className="main-content">
          <div className="society-cards">
            <div className="cards">
              {electionData[currentTab === "Secy" ? currentTab + "_" + currentPost.key : currentTab].map((contact) => {
                return (
                  <Card
                    key={contact.RollNo}
                    Name={contact.Name}
                    Hall={contact.Hall}
                    Description={contact.Description}
                    RollNo={contact.RollNo}
                    Email={contact.Email}
                    Proposal={contact.Proposal}
                    ProposalLink={contact.ProposalLink}
                    FacebookLink={contact.FacebookLink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
