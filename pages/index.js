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
            <h2> Upcoming Events</h2>
            <AutoplaySlider play={true} interval={5000}>
              <div
                data-src="/upcomingEvents/pw.png"
                onClick={() => handlePosterClick("https://docs.google.com/forms/d/e/1FAIpQLSdpA3ObUAhBJqcyaczg0bzuRgMLYnQs_t3LwNgt2D0P-tymyA/viewform")}
              />
              <div
                data-src="/upcomingEvents/gssrs.jpeg"
                onClick={() => handlePosterClick("https://youtu.be/-tO9zOQnWuQ")}
              />
              <div
                data-src="/upcomingEvents/fob.jpeg"
                onClick={() => handlePosterClick("https://docs.google.com/forms/d/e/1FAIpQLSeVydLePkKfuUu7lV2TbK2hHPw0XYVM_GwCnHO_e_XV4Bstuw/viewform?pli=1")}
              />
              <div
                data-src="/upcomingEvents/fp.jpeg"
                onClick={() => handlePosterClick("https://forms.gle/cFtth3ZoSJHwKP4w7")}
              />
              <div
                data-src="/upcomingEvents/cyclothon.jpeg"
                onClick={() => handlePosterClick("https://www.facebook.com/story.php?story_fbid=2841592132729935&id=1375511306004699&scmts=scwspsdd")}
              />
              <div
                data-src="/upcomingEvents/freedom_run.jpeg"
                onClick={() => handlePosterClick("https://forms.gle/ZQ6GWAy6GZx8ikeh9")}
              />
              <div
                data-src="/upcomingEvents/yoga_another_event.png"
                onClick={() => handlePosterClick("https://forms.gle/5WgQX683x6hWX9f8A")}
              />
              <div data-src="/upcomingEvents/yoga_notice.jpeg" onClick={() => handlePosterClick("/files/Yoga.pdf")} />
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
                <FrModal />
              </div>
              <div className="column">
                <CyclothonModal />
              </div>
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
