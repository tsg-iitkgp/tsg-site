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
                            <img src="/upcomingEvents/samyog.png" className={Styles.poster} />
                        </div>
                        <p className={Styles.meetBtnContainer}>
                            <Link href={'/samyog-connect-iitkgp'}>
                                Join Meeting
                            </Link>
                        </p>
                        <p>
                            We are delighted to announce an interactive online session with the Advisor of Technology Students' Gymkhana and a distinguished alumnus of our Institute, Commander VK Jaitly. Well-known for his phenomenal lifetime achievements as well as exceptional leadership and communication skills, he is a motivational speaker, a consultant, a coach, a writer and a mentor for the corporate world.
                        </p>
                        <p>
                            As an eminent member of our IIT KGP family, he'll be joining us for sharing his views on ‘Me, My Family and My Country’ as well as elaborating on how to tackle the imminent challenges in today’s complex world.
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
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        24
                                    </div>
                                    <div className={Styles.eventName}>
                                        CC + BCRTH <br />
                                        Mindfulness Workshop
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        25
                                    </div>
                                    <div className={Styles.eventName}>
                                        CC
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        26
                                    </div>
                                    <div className={Styles.eventName}>
                                        Guest Speaker <br />
                                        Prof. Manas Mondal
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        27
                                    </div>
                                    <div className={Styles.eventName}>
                                        "HAPPY THE SELF" <br />
                                        - Shamsheer KK
                                    </div>
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
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        31
                                    </div>
                                    <div className={Styles.eventName}>
                                        Guest Lecture <br />
                                        Commander Jaitley <br /> <br />
                                        "What We Can Do for Our Country?"
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                            </tr>
                            <tr>
                                <td colSpan={7} className={Styles.monthName}>
                                    FEBRUARY
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

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        1
                                    </div>
                                    <div className={Styles.eventName}>
                                        CC + BCRTH
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        2
                                    </div>
                                    <div className={Styles.eventName}>
                                        Guest Speaker <br />
                                        Prof. Samdhu Chehtri
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        3
                                    </div>
                                    <div className={Styles.eventName}>
                                        CC + BCRTH
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        4
                                    </div>
                                    <div className={Styles.eventName}>
                                        Acharya Prashant
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    5
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    6
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        7
                                    </div>
                                    <div className={Styles.eventName}>
                                        JAMMING SESSION <br />
                                        by Students’ Welfare Committee
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        8
                                    </div>
                                    <div className={Styles.eventName}>
                                        CGL
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        9
                                    </div>
                                    <div className={Styles.eventName}>
                                        PONDERING PONDS Workshop <br />
                                        by Technology Environment Society
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        10
                                    </div>
                                    <div className={Styles.eventName}>
                                        Rubik’s cube solving workshop by Students’ Welfare Committee
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.event}`}>
                                    <div className={Styles.date}>
                                        11
                                    </div>
                                    <div className={Styles.eventName}>
                                        SWG
                                    </div>
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    12
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    13
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    14
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    15
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    16
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    17
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    18
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    19
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    20
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    21
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    22
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    23
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    24
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    25
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    26
                                </td>
                            </tr>
                            <tr>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    27
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>
                                    28
                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                                <td className={`${Styles.dateGrid} ${Styles.nonEvent}`}>

                                </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </Layout>
        </>
    );
}
