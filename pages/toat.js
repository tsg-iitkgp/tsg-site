import Head from "next/head";
import Layout from "../components/layout";

export default function Toat() {
  return (
    <Layout>
      <Head>
        <title>TOAT</title>
      </Head>
      <section className="about content">
        <h2>Tagore Open Air Theater</h2>
        <img src="toat.jpg" />
        <p>
          Tagore Open Air Theatre (also called TOAT) is the open-theatre of IIT Kharagpur where musical events, dance
          performances, stand-up comedy, open-session and numerous other events are organized during throughout the
          year. The place especially hosts a range of activities during annual technical and cultural fests Spring Fest
          and Kshitij. It is located next to the Department of Computer Science and has two entry gates. One gate is
          directly infront of the Netaji Auditorium and the other is next to staff canteen (can be reached through the
          road near main security control centre). It has a capacity of over 1000 students.
        </p>
      </section>
    </Layout>
  );
}
