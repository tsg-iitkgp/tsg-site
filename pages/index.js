import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

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

import Styles from '../styles/css/index.module.css';
import * as Icon from "react-feather";

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
            <h2>
              Highlights
            </h2>
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="/events/web-hack.jpg"
                onClick={() => handlePosterClick("https://www.facebook.com/TSG.IITKharagpur/posts/5141129255902068")}
              />
              <div
                data-src="/upcomingEvents/sia.jpeg"
                onClick={() => handlePosterClick("#")}
              />
              <div
                data-src="/upcomingEvents/qs.jpg"
                onClick={() => handlePosterClick("#")}
              />
              <div
                data-src="/upcomingEvents/wc-trials.jpg"
                onClick={() => handlePosterClick("https://forms.gle/sFA3GswsLgxu4kxq9")}
              />
              {/* <div
                data-src="/upcomingEvents/essay.png"
                onClick={() => handlePosterClick("https://www.facebook.com/TSG.IITKharagpur")}
              /> */}
              {/* <div
                data-src="/upcomingEvents/food.jpeg"
                onClick={() => handlePosterClick("https://forms.gle/TsaLGQtdJVM5aZXh6")}
              /> */}
              {/* <div
                data-src="/upcomingEvents/powerhours.jpeg"
                onClick={() =>
                  handlePosterClick(
                    "https://www.facebook.com/sports.iitkgp/photos/a.1375720849317078/2787958148093334/"
                  )
                }
              /> */}
              {/* <div
                data-src="/upcomingEvents/powerhours_schedule.jpg"
                onClick={() =>
                  handlePosterClick(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd0jBBoJ9bTd75vN4J0ROA5uPsfFtBS-DvHgCYZENOwB_q76g/viewform"
                  )
                }
              /> */}
            </AutoplaySlider>
          </section>
          <section className="facilities">
            <div className="image-modals">
              <div className="column">
                <FacilityModal
                  images={'/facilities/illu.png'}
                  description={'description'}
                  title={'title'}
                  facilityData={facilityData.facilities}
                  slotsData={facilityData.slots}
                />
                {/* <FrModal /> */}
              </div>
              {/* <div className="column">
                <CyclothonModal />
              </div> */}
            </div>
          </section>
          <section className="facilities">
            <h2>
              UG Induction Program - 2021
            </h2>
            <div className={Styles.faq}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>
                  Day1 - 26th November 2021
                </summary>
                <div>
                  <div>
                    <h4>
                      Forenoon Session (12:00 to 14:00)
                    </h4>
                    <div>
                      <p>
                        This session starts at 12:00 hours.
                        Join with the link: <a href="https://youtu.be/l-7gLRQlxyQ">https://youtu.be/l-7gLRQlxyQ</a>
                      </p>
                      <h5>
                        Schedule:
                      </h5>
                      <ul>
                        <li>
                          <b>12:00 - 12:10</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> A brief introduction to the Induction Programme by Dean (SA)
                        </li>
                        <li>
                          <b>12:10 - 13:00</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by the Heads of Department (UG programs only)
                        </li>
                        <li>
                          <b>13:00 - 13:15</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by the Academics Deans (FoE&A, FoS, and BTBS)
                        </li>
                        <li>
                          <b>13:15 - 13:30</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Virtual Campus Tour
                        </li>
                        <li>
                          <b>13:30 - 13:40</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by Deputy Director
                        </li>
                        <li>
                          <b>13:40 - 14:00</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Address by Director
                        </li>
                        <li>
                          <b>14:00 - 14:05</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Vote of Thanks by Registrar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>
                      Afternoon Session (15:00)
                    </h4>
                    <div>
                      <p>
                        The program will start at 15:00 hours.
                        Join with the link: <a href="https://youtu.be/hp6K-bz9WRI">https://youtu.be/hp6K-bz9WRI</a>
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className={Styles.faq}>
              <details className={Styles.details}>
                <summary className={Styles.summary}>
                  Day2 - 27th November 2021
                </summary>
                <div>
                  <div>
                    <h4>
                      Forenoon Session (11:00 to 13:00)
                    </h4>
                    <div>
                      <p>
                        This session starts at 11:00 hours.
                        Join with the link:
                        <a href="https://youtu.be/0h8_JwlgTtk">
                          https://youtu.be/0h8_JwlgTtk
                        </a>
                      </p>
                      <h5>
                        Schedule:
                      </h5>
                      <ul>
                        <li>
                          <b>11:00 - 12:00</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Description to ERP features and Virtual Classroom Platforms
                        </li>
                        <li>
                          <b>12:10 - 13:00</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Introduction to Library and CIC facilities
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4>
                      Afternoon Session (14:30 to 15:30)
                    </h4>
                    <div>
                      <p>
                        The program will start at 14:30 hours.
                        Join with the link:
                        <a href="https://youtu.be/c328-X9G1l0">
                          https://youtu.be/c328-X9G1l0
                        </a>
                      </p>
                      <h5>
                        Schedule:
                      </h5>
                      <ul>
                        <li>
                          <b>14:30 - 15:30</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Movie show on IIT Kharagpur
                        </li>
                      </ul>
                      <p>
                        If  department plans any interactive session with their respective department students after 15:00 hrs students would receive a seperate email from the department.
                        We request student to stay active on their emails incase of any querry you can reach out respective Department representatives.
                      </p>
                      <ul>
                        <li>
                          <b>19:00 - 20:00</b><Icon.ArrowRight size={14} className={Styles.liIcon} /> Sensitization Program by Ambar
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
