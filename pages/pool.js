import Head from "next/head";
import Layout from "../components/layout";

export default function Pool() {
  return (
    <Layout home>
      <Head>
        <title>Swimming Pool</title>
      </Head>
      <section className="about content">
        <h2>Swimming Pool</h2>
        <img src="pool.jpeg" />
        <p>
          Technology Swimming Pool or just swimming pool is located in the Gymkhana park near the TSG Lake.It is most
          centrally located in beside the Technology Student Gymkhana. The Swimming pools with their placid, clean,
          transparent and lovely-to-behold water are the star attraction of the technopolis. The open air swimming pool
          is best place to swim. The Pools, which remain open from morning to late evenings, provide sport, exercise and
          relaxation par excellence. The Swimming Form can be acquired online through the website of Technology Aquatic
          Society.
        </p>
      </section>
    </Layout>
  );
}
