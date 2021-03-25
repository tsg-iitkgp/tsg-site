import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>Awards</title>
      </Head>
      <section className="awards content">
        <h2>Awards</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Event Cup</th>
                <th>Event Name</th>
                <th>Name</th>
                <th>Medal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dramatics</td>
                <td>Stage Play</td>
                <td>
                  <ul>
                    <li>Patel</li>
                    <li>Nehru</li>
                    <li>LLR</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Gold</li>
                    <li>Silver</li>
                    <li>Bronze</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Cricker</td>
                <td>Sports</td>
                <td>
                  <ul>
                    <li>Patel</li>
                    <li>Nehru</li>
                    <li>LLR</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Gold</li>
                    <li>Silver</li>
                    <li>Bronze</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Tech Quiz</td>
                <td>Technology</td>
                <td>
                  <ul>
                    <li>Patel</li>
                    <li>Nehru</li>
                    <li>LLR</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Gold</li>
                    <li>Silver</li>
                    <li>Bronze</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
