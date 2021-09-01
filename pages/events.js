import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import eventsData from "../public/eventsData";

import ImageModal from "../components/imageModal";

import Styles from '../styles/css/events.module.css'
import EventModal from "../components/Modals/event";


export default function Home() {

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
                        {eventsData.data.map((event, index) => {
                            return (
                                <EventModal key={index} data={event} />
                            )
                        })}
                    </div>
                </section>
            </Layout>
        </>
    );
}
