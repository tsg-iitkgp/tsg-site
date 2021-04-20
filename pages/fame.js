import Head from "next/head";
import Layout from "../components/layout";

export default function Sports() {
  return (
    <Layout>
      <Head>
        <title>Sports &amp; Games</title>
      </Head>
      <section className="awards content">
        <h2>Sports &amp; Games</h2>
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
                <td>Cricket</td>
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
            </tbody>
          </table>
        </div>

        <h2>Technology</h2>
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

        <h2>Social &amp; Cultural</h2>
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
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
