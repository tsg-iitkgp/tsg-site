import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

import Styles from '../styles/css/samyog.module.css';

export default function Samyog() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                </Head>

                <section className="m-content">
                    <div className={Styles.todaysEvent}>
                        <h1>
                            Samyog - Connect IIT Kharagpur
                        </h1>
                        <div className={Styles.posterContainer}>
                            <img src="/upcomingEvents/samyog-2.png" className={Styles.poster} />
                        </div>
                        <p className={Styles.meetBtnContainer}>
                            <Link href={'/samyog-connect-iitkgp'}>
                                Join Meeting
                            </Link>
                        </p>
                        <p>
                            We will be conducting an online session with the collective collaboration of Counsellors and doctors from BC Roy Medical Hospital to address several mental and physical health concerns of everyone on campus. You are cordially invited to join us for this informative session, a part of the initiative ‘SAMYOG - Connect IIT Kharagpur’, which will guide us towards a more mindful and resilient approach to our surroundings in these uncertain and unprecedented times.
                        </p>
                    </div>
                    <div>
                        <table className={Styles.samyogSchedule}>
                            <tr>
                                <td colSpan={7} className={Styles.monthName}>
                                    JANUARY
                                </td>
                            </tr>
                            <tr>
                                <td className={Styles.day}>
                                    Sunday
                                </td>
                                <td className={Styles.day}>
                                    Monday
                                </td>
                                <td className={Styles.day}>
                                    Tuesday
                                </td>
                                <td className={Styles.day}>
                                    Wednesday
                                </td>
                                <td className={Styles.day}>
                                    Thursday
                                </td>
                                <td className={Styles.day}>
                                    Friday
                                </td>
                                <td className={Styles.day}>
                                    Saturday
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    26
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    27
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    28
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    29
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    30
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    31
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    1
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    2
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    3
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    4
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    5
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    6
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    7
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    8
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    9
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    10
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    11
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    12
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    13
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    14
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    15
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    16
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        17
                                    </div>
                                    <div className={Styles.eventName}>
                                        Inauguration
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        18
                                    </div>
                                    <div className={Styles.eventName}>
                                        CC + BCRTH
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        19
                                    </div>
                                    <div className={Styles.eventName}>
                                        Guest Lecture <br />
                                        Prof. Manas K Mandal
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        20
                                    </div>
                                    <div className={Styles.eventName}>
                                        CC + BCRTH
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        21
                                    </div>
                                    <div className={Styles.eventName}>
                                        Guest Lecture <br />
                                        Commander Jaitley
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        22
                                    </div>
                                    <div className={Styles.eventName}>
                                        Hall-Level
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        23
                                    </div>
                                    <div className={Styles.eventName}>
                                        Seminar <br /> by Social and Cultural Committee
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    24
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    25
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        26
                                    </div>
                                    <div className={Styles.eventName}>
                                        Guest Lecture <br />
                                        Prof. Manas K Mandal
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    27
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    28
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    29
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    30
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    31
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    1
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    2
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    3
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    4
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    5
                                </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </Layout>
        </>
    );
}
