import { isSameMinute } from "date-fns";
import Head from "next/head";
import Layout from "../components/layout";
import pointsData from "../public/pointsData";

export default function InterIIT() {
  return (
    <Layout>
      <Head>
        <title>InterIIT 2019</title>
      </Head>
      <section className="awards content">
        <h2>InterIIT 2019 Standings - Men</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sport</th>
                <th>
                  <span className="medal gold"></span> Gold
                </th>
                <th>
                  <span className="medal silver"></span> Silver
                </th>
                <th>
                  <span className="medal bronze"></span> Bronze
                </th>
              </tr>
            </thead>
            <tbody>
              {pointsData.interIIT[0].map((item) => (
                <tr>
                  <td>{item.Sport}</td>
                  <td>{item.Gold} </td>
                  <td>{item.Silver} </td>
                  <td>{item.Bronze} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>InterIIT 2019 Standings - Women</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sport</th>
                <th>
                  <span className="medal gold"></span> Gold
                </th>
                <th>
                  <span className="medal silver"></span> Silver
                </th>
                <th>
                  <span className="medal bronze"></span> Bronze
                </th>
              </tr>
            </thead>
            <tbody>
              {pointsData.interIIT[0].map((item) => (
                <tr>
                  <td>{item.Sport}</td>
                  <td>{item.Gold} </td>
                  <td>{item.Silver} </td>
                  <td>{item.Bronze} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
