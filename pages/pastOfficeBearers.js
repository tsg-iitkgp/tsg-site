import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import senateData from "../public/senateData.json";

const posts = [
  "Vice President",
  "Undergraduate Representative",
  "G.Sec Social & Cultural",
  "G.Sec Sports",
  "G.Sec Student Welfare",
  "G.Sec Technology",
  "Postgraduate Representative",
  "Research Scholar Representative",
  "Women Representative",
  "Public Relations Chairperson",
  "TSG Editors",
  "Technology Coordinator",
];

export default function Sports() {
  const [currentPost, setCurrentPost] = useState("Vice President");

  return (
    <Layout>
      <Head>
        <title>Past Office Bearers</title>
      </Head>
      <section className="awards content">
        <h2> Past Office Bearers</h2>

        <select value={currentPost} onChange={(e) => setCurrentPost(e.target.value)}>
          {posts.map((post) => (
            <option key={post} value={post}>
              {post}
            </option>
          ))}
        </select>

        {/* Now render based on the value of the currentYear */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Tenure</th>
                {currentPost.includes("G.Sec") || currentPost.includes("Editors") ? (
                  <>
                    <th>Name</th>
                    <th>Name</th>
                  </>
                ) : (
                  <th>Name</th>
                )}
              </tr>
            </thead>
            <tbody>
              {senateData[currentPost].map((item) => (
                <tr>
                  <td>{item.year}</td>
                  {currentPost.includes("G.Sec") || currentPost.includes("Editors") ? (
                    <>
                      <td>{item.name[0]}</td> <td>{item.name[1]}</td>
                    </>
                  ) : (
                    <td>{item.name}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
