import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/electionCard";
import electionData from "../public/electionsData";

const posts = ["badminton", "squash"];

export default function Elections() {
  const [currentTab, setCurrentTab] = useState("vp");
  const [currentPost, setCurrentPost] = useState("2018-19");

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
          <div className={`tab ${currentTab == "vp" ? "active" : ""}`} onClick={() => handleTabChange("vp")}>
            Vice President
          </div>
          <div
            className={`tab ${currentTab == "gsecSports" ? "active" : ""}`}
            onClick={() => handleTabChange("gsecSports")}
          >
            G.Sec Sports &amp; Games
          </div>
          <div
            className={`tab ${currentTab == "gsecSoCult" ? "active" : ""}`}
            onClick={() => handleTabChange("gsecSoCult")}
          >
            G.Sec SoCult
          </div>{" "}
          <div
            className={`tab ${currentTab == "gsecTech" ? "active" : ""}`}
            onClick={() => handleTabChange("gsecTech")}
          >
            G.Sec Tech
          </div>
          <div className={`tab ${currentTab == "gsecSW" ? "active" : ""}`} onClick={() => handleTabChange("gsecSW")}>
            G.Sec Student Welfare
          </div>
          <div className={`tab ${currentTab == "secy" ? "active" : ""}`} onClick={() => handleTabChange("secy")}>
            Secretaries
          </div>
        </div>
        <h2>Candidates</h2>
        {currentTab === "secy" && (
          <select value={currentPost} onChange={(e) => setCurrentPost(e.target.value)}>
            {posts.map((post) => (
              <option key={post} value={post}>
                {post}
              </option>
            ))}
          </select>
        )}
        <div className="main-content">
          <div className="society-cards">
            <div className="cards">
              {electionData.VPData.map((contact) => {
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
                    SOPLink="https://youtu.be/dQw4w9WgXcQ"
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
