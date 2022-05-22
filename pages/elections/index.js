import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";

import Styles from "../../styles/css/elections.module.css";
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
                            <h2>
                                Technology Students' Gymkhana Elections 2022 - 2023
                            </h2>
                            <p>
                                Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries out election to select office bearers from students for smooth conduction of student related activities.
                            </p>
                            <p>
                                This year election campaign will be carried out in hybrid mode following COVID protocol. However, the nomination, approval and voting will be done using digital platform developed by ERP, IIT Kharagpur. The date for Gymkhana Election is as follows:
                            </p>
                            <p>
                                Date of Election: 5th April 2022 (Monday) <br />
                                Time of Election: 10:00 am to 6:00 pm <br />
                                Platform: ERP
                            </p>
                        </section>
                        <section>
                            <h3>
                                Bus Service on 5th April 2022, on the occasion of Elections
                            </h3>
                            <p>
                                <b>
                                    Bus Route-1:
                                </b> <br />
                                RP, RK, MS, LLR, MMM, LBS, PAN LOOP, BRH, SNVH, MT, TAKSHASHILA
                            </p>
                            <p>
                                <b>
                                    Bus Route-2:
                                </b> <br />
                                BCR, SN/IG, GOKHALE, RLB, HJB, JCB, LBS, MMM, LLR, MS, RK, RP, ALUMNI CLOCK TOWER, TAKSHASHILA
                            </p>
                            <center>
                                <b>
                                    Bus Service will be available @30 minutes interval
                                </b>
                            </center>
                        </section>
                        <section className={Styles.noticeSection}>
                            <h3>
                                Notices:
                            </h3>
                            <section className={Styles.noticesContainer}>
                                <div className={Styles.notice}>
                                    <div>
                                        Results Notification of Gymkhana
                                        Elections for the academic session 2022-23
                                    </div>
                                    <a className={Styles.docBtn} href="/files/Notification-Results-07042022.pdf">
                                        View Notification &thinsp; <Icon.ExternalLink />
                                    </a>
                                </div>
                                <div className={Styles.notice}>
                                    <div>
                                        Vote Count of Gymkhana
                                        Elections for the academic session 2022-23
                                    </div>
                                    <a className={Styles.docBtn} href="/files/Annexure-I-Vote_Counts-signed.pdf">
                                        View Document &thinsp; <Icon.ExternalLink />
                                    </a>
                                </div>
                                <div className={Styles.notice}>
                                    <div>
                                        Voting Procedure Brochure of Gymkhana
                                        Elections for the academic session 2022-23
                                    </div>
                                    <a className={Styles.docBtn} href="/files/voting_procedure-22-23.pdf">
                                        View Document &thinsp; <Icon.ExternalLink />
                                    </a>
                                </div>
                                <div className={Styles.notice}>
                                    <div>
                                        Due to some technical reasons, the schedule for election, counting & results and notification
                                        of results is changed.
                                    </div>
                                    <a className={Styles.docBtn} href="/files/Revised_Schedule-03042022.pdf">
                                        View Schedule &thinsp; <Icon.ExternalLink />
                                    </a>
                                </div>
                                <div className={Styles.notice}>
                                    <div>
                                        SOAP has been scheduled on 1st and 2nd of April 2022.
                                    </div>
                                    <a className={Styles.docBtn} href="/files/SOAP_Schedule_21-22.pdf">
                                        View Schedule &thinsp; <Icon.ExternalLink />
                                    </a>
                                </div>
                                <div className={Styles.notice}>
                                    <div>
                                        The date for submission of Revised Proposals the posts of Vice President and General
                                        Secretaries is extended upto 10:00 am on March 29, 2022.
                                    </div>
                                    <a className={Styles.docBtn} href="/files/Extension-Final-Proposal_21-22.pdf">
                                        View Notice &thinsp; <Icon.ExternalLink />
                                    </a>
                                </div>
                            </section>
                            <div className={Styles.propBtnContainer}>
                                <Link href='candidates'>
                                    Candidates and Proposals
                                </Link>
                            </div>
                        </section>
                        <section className={Styles.docsContainer}>
                            <h3>
                                Relevant Documents:
                            </h3>
                            <section className={Styles.buttonsContainer}>
                                <a className={Styles.docBtn} href="/files/Elections-Notification.pdf">
                                    Notification
                                </a>
                                <a className={Styles.docBtn} href="/files/Election-Rules.pdf">
                                    Rules
                                </a>
                                <a className={Styles.docBtn} href="/files/final-list_21-22.pdf">
                                    Final List of Nominations
                                </a>
                            </section>
                        </section>
                    </div>
                </section>
            </Layout>
        </>
    );
}