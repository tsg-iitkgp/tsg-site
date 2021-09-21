import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import Styles from '../styles/css/events.module.css'


export default function Home() {

    const sectionStyles = {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: '2rem 0',
        width: '95%',
        maxWidth: '1300px',
        alignItems: 'center',
        minHeight: '60vh',
    }

    const iframeStyles = {
        width: '90vw',
        maxWidth: '1200px',
        height: '70vh',
        maxHeight: '700px',
        borderWidth: 0
    }

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

                <section className={sectionStyles}>
                    <h1 style={{textAlign: 'center'}}>
                        Events Calendar
                    </h1>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=c2VhNTBtODJkODJra2lxZ3AxNjl2ZzlqbXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23EF6C00&showTitle=0&showPrint=0" style={iframeStyles} frameborder="0" scrolling="no"></iframe>
                </section>
            </Layout>
        </>
    );
}
