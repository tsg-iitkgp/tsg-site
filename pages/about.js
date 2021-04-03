import Head from "next/head";
import Footer from "../components/footer";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section className="about content">
        <h2>About</h2>
        <p>
          Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in IIT
          Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the students,
          under the guidance and active participation of the faculty and staff members. "Yogah Karmasu Kausalam" The
          moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in action
          is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing their
          extra-curricular talents.
        </p>
        <p>
          <ul className="events">
            <li>
              Social &amp; Cultural
              <ul>
                <li>Choreography</li>
                <li>Dramatics</li>
                <li>Street Play</li>
                <li>Western Music</li>
                <li>Eastern Music</li>
                <li>English Elocution</li>
                <li>Hindi Elocution</li>
                <li>Standup Comedy</li>
              </ul>
            </li>
            <li>
              Sports
              <ul>
                <li>Cricket</li>
                <li>Football</li>
                <li>Hockey</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>Lawn Tennis</li>
                <li>Table Tennis</li>
                <li>Athletics</li>
                <li>Long Jump</li>
                <li>Sprint</li>
                <li>Squash</li>
              </ul>
            </li>
            <li>
              Technology
              <ul>
                <li>Product Design</li>
                <li>Hardware Modeling</li>
                <li>Data Analytics</li>
                <li>Case Study</li>
                <li>Ad Design</li>
                <li>Opensoft</li>
                <li>Chemquest</li>
                <li>Biz Quiz</li>
                <li>Tech Quiz</li>
                <li>Maths Olympiad</li>
              </ul>
            </li>
          </ul>
        </p>
      </section>
      <Footer />
    </Layout>
  );
}
