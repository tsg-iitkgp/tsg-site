import Head from "next/head";
import Layout from "../components/layout";

export default function Sports() {
  return (
    <Layout home>
      <Head>
        <title>Sports &amp; Games</title>
      </Head>
      <section className="about content">
        <h2>Sports &amp; Games</h2>
        <p>
          Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT
          Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students,
          under the guidance and active participation of the faculty and staff members. "Yogah Karmasu Kausalam" The
          moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action
          is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their
          extra-curricular talents.
        </p>
        <p>
          <h3> Societies and Clubs</h3>
          <ul>
            <li>tennis</li>
            <li>football</li>
            <li>swimming</li>
            <li>badminton</li>
            <li>cricket</li>
          </ul>
        </p>
      </section>
    </Layout>
  );
}
