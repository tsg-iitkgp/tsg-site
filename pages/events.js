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

import Styles from '../styles/css/events.module.css'

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

                {/* <section className="intro">
                    <section className="home">
                        <div className="logo">
                            <img src="/IIT_Kharagpur_Logo.svg" />
                        </div>
                        <div className="headings">
                            <h1>Technology Students' Gymkhana</h1>
                            <h2>Indian Institute of Technology Kharagpur</h2>
                        </div>
                    </section>
                </section> */}

                <section className={Styles.mainContent}>
                    <div className={Styles.eventsContainer}>
                        <div className={Styles.card} >
                            <div className={Styles.header}>
                                <h1>
                                    Event Name
                                </h1>
                                <div>
                                    <span className={Styles.date}>
                                        27th January
                                    </span>
                                </div>
                            </div>
                            <div className={Styles.body}>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className={Styles.footer}>

                            </div>
                        </div>
                        <div className={Styles.card} >
                            <div className={Styles.header}>
                                <h1>
                                    Event Name
                                </h1>
                                <div>
                                    <span className={Styles.date}>
                                        27th January
                                    </span>
                                </div>
                            </div>
                            <div className={Styles.body}>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className={Styles.footer}>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
