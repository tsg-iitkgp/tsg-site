import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import senateData from "../public/senateData.json";

const posts = ["VP", "GSecSports", "GSecTech", "GSecSocult", "GSecWelfare"];

export default function Sports() {
  const [currentPost, setCurrentPost] = useState("VP");

  return (
    <Layout>
      <Head>
        <title>Past Office Bearers</title>
      </Head>
      <section className="office">
        <h2> Past Office Bearers</h2>

        <select value={currentPost} onChange={(e) => setCurrentPost(e.target.value)}>
          {posts.map((post) => (
            <option key={post} value={post}>
              {post}
            </option>
          ))}
        </select>

        {/* Now render based on the value of the currentYear */}
        {senateData[currentPost].map((item) => (
          <div className="member">
            <h3>{item.year}</h3>
            <h3>{item.name}</h3>
          </div>
        ))}
      </section>
    </Layout>
  );
}
