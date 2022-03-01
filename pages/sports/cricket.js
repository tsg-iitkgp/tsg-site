import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";

import Highlight from "../../components/InterHall/Cricket/Highlight";
import Styles from '../../styles/css/InterHall/Cricket/cricket.module.css';
import * as Icon from "react-feather";
import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";
import UpcomingMatch from "../../components/InterHall/Cricket/UpcomingMatch";
import PastMatch from "../../components/InterHall/Cricket/PastMatch";


const override = css`
  display: block;
  margin: auto;
`;

export default function Cricket() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matchesData, setMatchesData] = useState([]);
    const [modalData, setModalData] = useState();
    const [matchesCategory, setMatchesCategory] = useState('upcoming');

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbzBMcvAFVr5IVC3KWDusLdZP-ZiEQ16Ngnpqj9RWgmteasFtGGqL1XHVAOXOQKaEgs/exec?sheetName=Matches`)
            .then((response) => (response.json())).then((responseData) => {
                setMatchesData(responseData.data);
                console.log(responseData.data);
                setIsLoading(false);
            })
    }, [])

    const openModal = (index) => {
        setModalData(internshipsData[index]);
        setIsModalOpen(true);
        console.log(isModalOpen)
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Inter Hall Cricket | {siteTitle}</title>
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

                <section className="m-content">
                    <div className={`facilities`}>
                        <section>
                            <h2>
                                Inter Hall Cricket 2022
                            </h2>
                            {/* <p>
                                Welcome!
                            </p> */}
                        </section>
                        <section>
                            <Highlight sheetName="Highlight1" />
                            <Highlight sheetName="Highlight2" />
                            <Highlight sheetName="Highlight3" />
                        </section>
                        <section className={Styles.matchesSection}>
                            <div>
                                <h1>
                                    Matches
                                </h1>
                                <div className={Styles.matchesNavMenu}>
                                    <div onClick={() => setMatchesCategory('upcoming')} className={`${Styles.navItem} ${matchesCategory === 'upcoming' ? Styles.active : ''}`}>
                                        Upcoming
                                    </div>
                                    <div onClick={() => setMatchesCategory('past')} className={`${Styles.navItem} ${matchesCategory === 'past' ? Styles.active : ''}`}>
                                        Past
                                    </div>
                                </div>
                                <div>
                                    {
                                        matchesData && matchesData.map((match, index) => (
                                            match.status === matchesCategory ? (

                                                (matchesCategory === 'upcoming' ? (
                                                    <UpcomingMatch key={index} match={match} />
                                                ) : (
                                                    <PastMatch key={index} match={match} />
                                                ))
                                            ) : (
                                                <>
                                                </>
                                            )
                                        ))
                                    }
                                </div>

                            </div>
                        </section>

                        {/* <section>
                            {
                                isLoading ? (
                                    <div>
                                        <BarLoader color={'#b2c58c'} loading={isLoading} css={override} size={150} />
                                    </div>
                                ) : (
                                    <div>
                                        
                                    </div>
                                )
                            }
                        </section> */}
                    </div>
                </section>
            </Layout >
        </>
    );
}
