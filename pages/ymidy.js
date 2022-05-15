import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

import Styles from "../styles/css/ymidy.module.css";
import * as Icon from "react-feather";

export default function Elections() {


    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className="m-content">
                    <div className={`facilities`}>
                        <section>
                            <div className={Styles.imgContainer}>
                                <img src="/upcomingEvents/yoga-banner.png" />
                            </div>
                            <h2>
                                Yoga Mahotsav and the International Day of Yoga (YM-IDY 2022)
                            </h2>
                            <p>
                                In commemoration of the ‘Azadi ka Amrit Mahotsav’ and ‘Fit India movement', IIT Kharagpur is going to conduct Yoga activities {' '}
                                <b>
                                    [Yoga Mahotsav and the International Day
                                    of Yoga (YM-IDY) 2022] 
                                </b>
                                {' '} for the students and the campus community during 16th May to 21st June 2022. Experts from Technology Students; Gymkhana (TSG) are going to conduct
                                YOGA sessions on a regular basis during weekdays with a focus on a specific topic each day. The session on the weekend will be conducted by renowned experts from other organisations. The program schedule is listed in the attachment.
                            </p>
                            <p>
                                Please register for the events using the link:{' '}
                                <a href="https://tinyurl.com/YogaMahotsav2022">
                                    YM-IDY 2022
                                </a>
                            </p>
                            <p>
                                For more information, please contact:
                                <ul>
                                    <li>
                                        Prof. M D Behera (Coordinator of YM and IDY) - 9434086859
                                    </li>
                                    <li>
                                        Mr. Sudhir Kumar (PTI Grade-I, TSG) - 9800046284
                                    </li>
                                    <li>
                                        Ms. Sangita Mondal (PTI, TSG) - 6294620484
                                    </li>
                                    <li>
                                        Mr. Brahmjot Singh (Vice President, TSG) - 8196837717
                                    </li>
                                </ul>
                            </p>
                            <p>
                                You may also write an email to President, TSG at {' '}
                                <a href="mailto:presidenttsg@hijli.iitkgp.ac.in">
                                    presidenttsg@hijli.iitkgp.ac.in
                                </a>
                            </p>
                            <div className={Styles.btnContainer}>
                                <a href="/files/info_IDY2022.pdf">
                                    Schedule
                                </a>
                            </div>
                        </section>
                    </div>
                </section>
            </Layout>
        </>
    );
}
