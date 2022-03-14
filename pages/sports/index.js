import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";

import Styles from "../../styles/css/InterHall/sports.module.css";
import * as Icon from "react-feather";

export default function Sports() {


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
                                Inter Hall Gymkhana Championship 2022
                            </h2>
                            {/* <p>
                                Welcome!
                            </p> */}
                        </section>
                        <section className={Styles.sportGridsContainer}>
                            <Link className={Styles.sportGrid} href={'/sports/cricket'}>
                                Cricket
                            </Link>
                            <Link className={Styles.sportGrid} href={'/sports/football'}>
                                Football
                            </Link>
                            <Link className={Styles.sportGrid} href={'/sports/tt'}>
                                Table Tennis
                            </Link>
                        </section>
                    </div>
                </section>
            </Layout>
        </>
    );
}
