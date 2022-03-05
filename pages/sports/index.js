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
                                Inter Hall Cricket Gymkhana Championship 2022
                            </h2>
                            <h1>
                                Live Score
                            </h1>
                            {/* <p>
                                Welcome!
                            </p> */}
                        </section>
                        <section>
                        </section>
                        
                    </div>
                </section>
            </Layout>
        </>
    );
}
