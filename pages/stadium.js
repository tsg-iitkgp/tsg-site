import Head from "next/head";
import Layout from "../components/layout";

export default function Stadium() {
  return (
    <Layout home>
      <Head>
        <title>Jnan Ghosh Stadium</title>
      </Head>
      <section className="about content">
        <h2>Jnan Ghosh Stadium</h2>
        <img src="stadium.jpeg" />
        <p>
          Jnan Ghosh Stadium, named after the first director of IIT Kharagpur Sir Jnan Chandra Ghosh is an athletics
          stadium which has a 400m track, enclosures for Hammer throw, along with a gallery. It is actively used during
          Inter-IIT and Inter-Hall Events. It is the regular venue for the NSO Health and Fitness classes. The stadium
          is also used for live shows during Spring Fest.
        </p>
      </section>
    </Layout>
  );
}
