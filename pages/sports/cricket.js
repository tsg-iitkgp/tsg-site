import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";

// import Styles from '../styles/css/internships.module.css';
import * as Icon from "react-feather";
import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

const override = css`
  display: block;
  margin: auto;
`;

export default function Cricket() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [matchesData, setMatchesData] = useState([]);
    const [modalData, setModalData] = useState();

    useEffect(() => {
        fetch(`https://script.google.com/macros/s/AKfycbzBMcvAFVr5IVC3KWDusLdZP-ZiEQ16Ngnpqj9RWgmteasFtGGqL1XHVAOXOQKaEgs/exec?sheetName=Matches`)
            .then((response) => (response.json())).then((responseData) => {
                setMatchesData(responseData.data.data);
                console.log(responseData.data.data);
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
                    <title>Opportunities | {siteTitle}</title>
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
                                Opportunities
                            </h2>
                            <p>
                                Welcome!
                            </p>
                        </section>

                        <section>
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
                        </section>
                    </div>
                </section>
            </Layout>
        </>
    );
}
