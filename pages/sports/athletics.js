import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";

import Styles from "../../styles/css/InterHall/sports.module.css";
import * as Icon from "react-feather";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";

import FootballMatch from "../../components/InterHall/FootballMatch";


const override = css`
  display: block;
  margin: auto;
`;

export default function Athletics() {
    const [isLoading, setIsLoading] = useState(true);
    const [matchesData, setMatchesData] = useState([]);
    const [matchesCategory, setMatchesCategory] = useState('upcoming');


    const dataUrl = `https://script.google.com/macros/s/AKfycbwxaNPrASYpBstAdenTWx5H3sGV9nRL2NURPiMBpQbJrYspa7HnbukLeXvANR6rcjc1/exec`

    useEffect(() => {
        fetch(dataUrl + '?sheetName=Athletics')
            .then((response) => (response.json())).then((responseData) => {
                setMatchesData(responseData.data);
                setIsLoading(false);
            })
    }, []);

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
                                Inter Hall Hockey Gymkhana Championship 2022
                            </h2>
                            {/* <p>
                                Welcome!
                            </p> */}
                        </section>
                        <section>
                            <h1>
                                Score
                            </h1>
                            <>
                                {
                                    isLoading ? (
                                        <div className={Styles.loader}>
                                            <BarLoader color={'rgb(247, 28, 28)'} loading={isLoading} css={override} size={150} />
                                        </div>
                                    ) : (
                                        matchesData.map((data, index) => (
                                            <FootballMatch key={index} data={data} />
                                        )
                                        )
                                    )
                                }
                            </>
                        </section>

                    </div>
                </section>
            </Layout>
        </>
    );
}
