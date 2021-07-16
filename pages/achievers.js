import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function Fame() {
  return (
    <Layout>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <section className="m-content">
        <section className="about" id="about">
          <h2>Our Achievers</h2>
          <h4>Rahul Koshal</h4>
          <h5>3 Times Hammer throw Inter IIT record-breaker</h5>
          <img
            className="modal-image"
            src="/achievers/rahul-koshal.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/awards/person-placeholder.png";
            }}
          />
          <p>
            Rahul Koshal reached a new high by breaking the Inter IIT records for three consecutive years in Hammer
            Throw with distances of 36.00 m , 38.78 m, 40.44m in 2012, 2013 and 2014 respectively.
          </p>
          <h4>Koustav Chakraborty</h4>
          <p>
            <ol>
              <li>
                Delhi Open International Championship
                <br />
                Rank: 9th <br />
                Link:{" "}
                <a href="https://chess-results.com/tnr393176.aspx?lan=1&art=1&rd=10">
                  https://chess-results.com/tnr393176.aspx?lan=1&art=1&rd=10
                </a>
                Award: INR 40,000 + Certificate
              </li>
              <br />
              <li>
                Mumbai Mayor’s Cup:
                <br />
                Rank: 1st / 404 <br />
                Link: <a href="https://chess-results.com/tnr439709.aspx">
                  https://chess-results.com/tnr439709.aspx
                </a>{" "}
                <br />
                Award: INR 120,000 + Trophy + Certificate
                <br />
                Interview: <a href="https://fb.watch/6tm8drkC7S/">https://fb.watch/6tm8drkC7S/</a>
              </li>{" "}
              <br />
              <li>
                Goa International Championship
                <br />
                Rank: 10th / 460 <br />
                Link: <a href="https://chess-results.com/tnr423218.aspx">
                  https://chess-results.com/tnr423218.aspx
                </a>{" "}
                <br />
                Award: INR 30,000 + Certificate
              </li>
            </ol>
          </p>
        </section>
      </section>
    </Layout>
  );
}
