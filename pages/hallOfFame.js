import { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import awardsData from "../public/awardsData";

export default function Fame() {
  const [currentTab, setCurrentTab] = useState("sports");

  const handleTabChange = (s) => {
    setCurrentTab(s);
  };

  return (
    <Layout>
      <Head>
        <title>Hall of Fame</title>
      </Head>
      <section className="awards content">
        <h2>TSG Awards!</h2>

        <div className="tabs">
          <div className={`tab ${currentTab == "sports" ? "active" : ""}`} onClick={() => handleTabChange("sports")}>
            Sports &amp; Games
          </div>
          <div className={`tab ${currentTab == "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
            Technology
          </div>
          <div className={`tab ${currentTab == "socult" ? "active" : ""}`} onClick={() => handleTabChange("socult")}>
            Social & Cultural
          </div>
          {/* <div
            className={`tab ${currentTab == "specialRecog" ? "active" : ""}`}
            onClick={() => handleTabChange("specialRecog")}
          >
            Special Recognition
          </div> */}
        </div>

        {currentTab == "sports" && (
          <>
            <h2> Insititue Blue </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.sportsAwards[0].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Honorable Mention </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.sportsAwards[1].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Special Mention </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.sportsAwards[2].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Alumni Cup </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.sportsAwards[3].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {currentTab == "socult" && (
          <>
            <h2> Order of Merit </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.socultAwards[0].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Honorable Mention </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.socultAwards[1].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Special Mention </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.socultAwards[2].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Shrimati Chandiramani Cup </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.socultAwards[3].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Alumni Cup </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.socultAwards[4].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {currentTab == "tech" && (
          <>
            <h2> Order of Merit </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.techAwards[0].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> Honorable Mention </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.techAwards[1].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2> G.S. Sanyal Cup </h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Game</th>
                    <th>Institute Award</th>
                  </tr>
                </thead>
                <tbody>
                  {awardsData.techAwards[2].map((item) => (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Roll} </td>
                      <td>{item.Game} </td>
                      <td>{item.Award} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}
