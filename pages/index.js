import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

import facilitiesData from "../public/facilities";
import facilityData from "../public/facilityData";
import ImageModal from "../components/imageModal";
import FacilityModal from "../components/facilityModal";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";
import festData from "../public/festData";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import CyclothonModal from "../components/cyclothonModal";
import FrModal from "../components/Modals/frModal";

import Styles from "../styles/css/index.module.css";
import * as Icon from "react-feather";
import Highlight from "../components/InterHall/Cricket/Highlight";

export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const handlePosterClick = (videoLink) => {
    window.open(videoLink);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="intro">
          <section className="home">
            <div className="logo">
              <img src="/IIT_Kharagpur_Logo.svg" />
            </div>
            <div className="headings">
              <h1>Technology Students' Gymkhana</h1>
              <h2>Indian Institute of Technology Kharagpur</h2>
            </div>
          </section>
        </section>

        <section className="m-content">
          <section className="events-slider">
            <h2>Highlights</h2>
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="/upcomingEvents/opensoft.png"
                onClick={() => handlePosterClick("https://www.facebook.com/iitkgp.tech/posts/4941772725869603")}
              />
              <div
                data-src="/upcomingEvents/openiitchess.jpg"
                onClick={() => handlePosterClick("https://www.facebook.com/sports.iitkgp/posts/2973351309554016")}
              />
              <div
                data-src="/upcomingEvents/oev.jpg"
                onClick={() => handlePosterClick("https://www.facebook.com/CulturalKGP/posts/4859245817492651")}
              />
              <div
                data-src="/upcomingEvents/owv.jpg"
                onClick={() => handlePosterClick("https://www.facebook.com/CulturalKGP/posts/4859245817492651")}
              />
              <div
                data-src="/upcomingEvents/SIH-2022.png"
                onClick={() => handlePosterClick("https://www.sih.gov.in/sih2022PS")}
              />
              <div data-src="/upcomingEvents/qs.jpg" onClick={() => handlePosterClick("#")} />
            </AutoplaySlider>
          </section>
          {/* <section className="facilities">
            <div className="image-modals">
              <div className="column">
                <FacilityModal
                  images={'/facilities/illu.png'}
                  description={'description'}
                  title={'title'}
                  facilityData={facilityData.facilities}
                  slotsData={facilityData.slots}
                />
                <FrModal />
              </div>
              <div className="column">
                <CyclothonModal />
              </div>
            </div>
          </section> */}
          <section className={`facilities ${Styles.interHall}`}>
            <h2>
              Inter Hall Cricket 2022
            </h2>
            <Highlight sheetName="Highlight1" />
            <Highlight sheetName="Highlight2" />
            <Highlight sheetName="Highlight3" />
          </section>
          <section className={`facilities ${Styles.samyogSection}`}>
            <Link className={Styles.samyogButton} href={"/samyog"}>
              Samyog - Connect IIT Kharagpur
            </Link>
          </section>
          <section className={`facilities ${Styles.covidSection}`}>
            <h2>Let's Together Fight Against Covid</h2>
            <div className={Styles.covidMeasures}>
              <div className={Styles.covidSymptomsContainer}>
                <img className={Styles.covidSymptomsImg} src="/images/COVID_Symptoms.jpg" />
                <p>
                  COVID tests have been initiated and are currently being conducted on a primary contact basis. If any
                  boarder has symptoms mentioned below, they are advised to contact their HP/SSM/Hall Council Member
                  immediately to get tested. If someone is showing any of these signs, seek emergency medical care
                  immediately (BC Roy Technology Hospital): Trouble breathing, persistent pain or pressure in the chest,
                  inability to wake or stay awake, pale, gray, or blue-coloured skin, lips, or nail beds, depending on
                  skin tone.
                </p>
              </div>
              <div className={Styles.btnContainer}>
                <a className={`${Styles.button} ${Styles.bgGreen}`} href="/files/COVID_Guidelines.pdf" target="_blank">
                  <span>Guidelines</span>
                </a>
                <a className={`${Styles.button} ${Styles.bgRed}`} href="/files/COVID_Precautions.pdf" target="_blank">
                  <span>Precautions</span>
                </a>
                <a
                  className={`${Styles.button} ${Styles.bgYellow}`}
                  href="/files/Emergency_Contacts.pdf"
                  target="_blank"
                >
                  <span>Emergency Contacts</span>
                </a>
              </div>
            </div>
          </section>
          {/* <section className={`facilities ${Styles.regVideoSection}`}>
            <h2>
              Pariksha Pe Charcha - {' '}
              <span>
                #PPC 2022
              </span>
            </h2>
            <p>
              An interactive program of Hon'ble Prime Minister with students, teachers and parents-regarding
            </p>
            <div className={Styles.ppcBannerContainer}>
              <img src="/images/ppc2022.jpg" />
            </div>
            <div>
              <iframe
                src="/videos/1.mp4"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Illumination 2021"
                className={Styles.video}
              />
            </div>
          </section> */}
          <section className="facilities">
            <h2>UG Induction Program - 2021</h2>
            <div className={Styles.inductionIntro}>
              <div className={Styles.handbookContainer}>
                <h3>Induction Handbook</h3>
                <iframe src="/files/handbook.pdf" type="application/pdf"></iframe>
              </div>
              <div className={Styles.info}>
                <p>
                  Be active on this link and view all the updates on the schedule of the Induction Link:{" "}
                  <a href="https://frequent-dinner-262.notion.site/Induction-Program-2021-6d1633b7be5b4e6aa800482a3077ce59">
                    (Link)
                  </a>
                </p>
                <p>
                  Fill this EAA form by 2nd December 2021 (Thursday):{" "}
                  <a href="https://forms.gle/VR9zEpFvoGoffnBN8">https://forms.gle/VR9zEpFvoGoffnBN8</a>
                </p>
              </div>
            </div>
            <div className={Styles.scheduleTile}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>Day1 - 26th November 2021</summary>
                <div>
                  <div>
                    <h4>Forenoon Session (12:00 to 14:00)</h4>
                    <div>
                      <p>
                        This session starts at 12:00 hours. Join with the link:{" "}
                        <a href="https://youtu.be/l-7gLRQlxyQ">https://youtu.be/l-7gLRQlxyQ</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>12:00 - 12:10</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> A brief introduction to the Induction
                          Programme by Dean (SA)
                        </li>
                        <li>
                          <b>12:10 - 13:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by the Heads of Department (UG
                          programs only)
                        </li>
                        <li>
                          <b>13:00 - 13:15</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by the Academics Deans (FoE&A,
                          FoS, and BTBS)
                        </li>
                        <li>
                          <b>13:15 - 13:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Virtual Campus Tour
                        </li>
                        <li>
                          <b>13:30 - 13:40</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by Deputy Director
                        </li>
                        <li>
                          <b>13:40 - 14:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by Director
                        </li>
                        <li>
                          <b>14:00 - 14:05</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Vote of Thanks by Registrar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>Afternoon Session (15:00)</h4>
                    <div>
                      <p>
                        The program will start at 15:00 hours. Join with the link:{" "}
                        <a href="https://youtu.be/hp6K-bz9WRI">https://youtu.be/hp6K-bz9WRI</a>
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className={Styles.scheduleTile}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>Day2 - 27th November 2021</summary>
                <div>
                  <div>
                    <h4>Forenoon Session (11:00 to 13:00)</h4>
                    <div>
                      <p>
                        This session starts at 11:00 hours. Join with the link:
                        <a href="https://youtu.be/0h8_JwlgTtk">https://youtu.be/0h8_JwlgTtk</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>11:00 - 12:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Description to ERP features and
                          Virtual Classroom Platforms
                        </li>
                        <li>
                          <b>12:10 - 13:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Introduction to Library and CIC
                          facilities
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>Afternoon Session (14:30 to 15:30)</h4>
                    <div>
                      <p>
                        The program will start at 14:30 hours. Join with the link:
                        <a href="https://youtu.be/c328-X9G1l0">https://youtu.be/c328-X9G1l0</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>14:30 - 15:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Movie show on IIT Kharagpur
                        </li>
                      </ul>
                      <p>
                        If department plans any interactive session with their respective department students after
                        15:00 hrs students would receive a seperate email from the department. We request student to
                        stay active on their emails incase of any querry you can reach out respective Department
                        representatives.
                      </p>
                      <ul>
                        <li>
                          <b>19:00 - 20:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Sensitization Program by Ambar
                          <a href="https://teams.microsoft.com/l/meetup-join/19%3at1SugNIfziFr27_yMx-ZhneiZlByO0iqYpzFAnKGpAE1%40thread.tacv2/1637937566077?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%22a0e119d3-18ed-4dce-b3f1-58ade4317c0d%22%7d">
                            (Teams Link)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className={Styles.scheduleTile}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>Day3 - 28th November 2021</summary>
                <div>
                  <div>
                    <h4>Forenoon Session (11:00 to 13:00)</h4>
                    <div>
                      <p>
                        This session starts at 11:00 hours. Join with the link:{" "}
                        <a href="https://youtu.be/H1sw7gEcLv4">https://youtu.be/H1sw7gEcLv4</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>11:00 - 11:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Session by President, Technology
                          Students' Gymkhana
                        </li>
                        <li>
                          <b>11:30 - 12:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Session by Vice-president Technology
                          students' Gymkhana
                        </li>
                        <li>
                          <b>12:00 - 13:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Session by General
                          secretaries,Technology Students' Gymkhana
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>Afternoon Session (14:30)</h4>
                    <div>
                      <p>
                        The program will start at 14:30 hours. Join with the link:{" "}
                        <a href="https://youtu.be/Fj9Zy-luDDM">https://youtu.be/Fj9Zy-luDDM</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>14:30 - 15:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Introduction to EAA
                        </li>
                        <li>
                          <b>15:30 - 16:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Talk by Medall Group
                        </li>
                      </ul>
                      <h5>Other:</h5>
                      <ul>
                        <li>
                          <b>16:00 - 16:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} />
                          Gender Sensitization Program (
                          <a href="https://teams.microsoft.com/l/meetup-join/19%3acc4235126f68451f9bb557b0c1c6ff81%40thread.tacv2/1638015460916?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%2211711dba-89b4-48a8-a1d9-aef79332385a%22%7d">
                            Link
                          </a>
                          )
                        </li>
                        <li>
                          <b>19:00 - 20:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} />
                          For the physical acitivities session please join the link which will be personally mailed
                          according to the alloted physical activity.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className={Styles.scheduleTile}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>Day4 - 29th November 2021</summary>
                <div>
                  <div>
                    <h4>Forenoon Session (11:00 to 13:00)</h4>
                    <div>
                      <p>
                        This session starts at 11:00 hours. Join with the link:{" "}
                        <a href="https://youtu.be/GrAJ1hofC94">https://youtu.be/GrAJ1hofC94</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>11:00 - 12:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Interaction of counsellors with
                          students
                        </li>
                        <li>
                          <b>12:00 - 13:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Interaction of counsellors with
                          Parents
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>Afternoon Session (14:30)</h4>
                    <div>
                      <p>
                        The program will start at 14:30 hours. Join with the link:
                        <a href="https://youtu.be/9GCP6_RGMsw">https://youtu.be/9GCP6_RGMsw</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>14:30 - 15:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Buddy interaction. Personel mails will
                          be sent with the details of joining by the buddy coordinators.
                        </li>
                        <li>
                          <b>15:30 - 16:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Mentor mentee interaction.
                        </li>
                        <li>
                          <b>18:00 - 19:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Introduction to social and cultural
                          related societies.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className={Styles.scheduleTile}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>Day5 - 30th November 2021</summary>
                <div>
                  <div>
                    <h4>Forenoon Session (11:00 to 13:00)</h4>
                    <div>
                      <p>
                        This session starts at 11:00 hours. Join with the link:{" "}
                        <a href="https://youtu.be/GrAJ1hofC94">https://youtu.be/GrAJ1hofC94</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>11:00 - 12:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Interaction with Hall Management
                          Centre and Hall-related information
                        </li>
                        <li>
                          <b>12:00 - 13:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} /> Yourdost session
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>Afternoon Session (14:30)</h4>
                    <div>
                      <p>
                        The program will start at 14:30 hours. Join with the link:
                        <a href="https://youtu.be/aUIjpWC1qEY">https://youtu.be/aUIjpWC1qEY</a>
                      </p>
                      <h5>Schedule:</h5>
                      <ul>
                        <li>
                          <b>14:30 - 15:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} />
                          Guest lecture by HARISH HANDE Indian social entrepreneur, co-founder SELCO India.
                        </li>
                        <li>
                          <b>15:30 - 16:30</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} />
                          Introcution to Technology societies
                        </li>
                      </ul>
                      <h5>Other:</h5>
                      <ul>
                        <li>
                          <b>18:00 - 20:00</b>
                          <Icon.ArrowRight size={14} className={Styles.liIcon} />
                          Performances by social and cultural societies (<a href="https://youtu.be/iHLQWuv5pz8">Link</a>
                          )
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </section>
          <section className={`${Styles.illuVideoSection}`}>
            <iframe
              src="https://www.youtube.com/embed/kstN-Adi7r8?rel=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Illumination 2021"
              className={Styles.illuVideo}
            />
          </section>
          <section className="facilities">
            <h2>Facilities and Events</h2>
            <div className="image-modals">
              <div className="column">
                {facilitiesData.data.slice(0, 6).map((facility) => (
                  <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                ))}
              </div>
              <div className="column">
                {facilitiesData.data.slice(6, 11).map((facility) => (
                  <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
