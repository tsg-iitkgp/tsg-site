import Head from "next/head";
import Layout from "../components/layout";

export default function Court() {
  return (
    <Layout>
      <Head>
        <title>Tennis Court</title>
      </Head>
      <section className="about content">
        <h2>Tennis Court</h2>
        <img src="court.jpeg" />
        <p>
          There are 3 courts (2 Synthetic, 1 Hard Court), a Practice wall, enough for 6 people. The students are
          expected to fill the registration and pay a sum of 300 Rupees per year to avail the facilities. This also
          includes upto 3 Tennis Balls. In 2018, Vinod Gupta funded the lawn tennis court for 2 new courts as well as 2
          coaches for a 3-week tennis training camp (open for all) in the same year (Jan - Feb). The 2 new courts are
          expected to be ready before the Inter IIT Sports 2019 (Dec), to be organised by Kharagpur.
        </p>
        <p>
          IIT Kharagpur houses 2 Tennis courts, all located in front of the Technology Students' Gymkhana building.
          Non-marking shoes are mandatory for playing in all the courts. After Durga Puja holidays, Inter IIT practice
          starts for the team.
        </p>
      </section>
    </Layout>
  );
}
