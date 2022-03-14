import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

import Styles from '../styles/css/internships.module.css';
import * as Icon from "react-feather";
import { useEffect, useState } from "react";

import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";
import InternshipModal from "../components/Modals/InternshipModal";

const override = css`
  display: block;
  margin: auto;
`;

export default function Opportunities() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [internshipsData, setInternshipsData] = useState([]);
    const [modalData, setModalData] = useState();

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbyaYp-jMSpGXrYjD0u7CmHmEINCh6xLO8nGbouAebDuJ7qex3CzfiMMaufp4HgK3gw/exec?sheetName=Opportunities')
            .then((response) => (response.json())).then((responseData) => {
                setInternshipsData(responseData.data.data);
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
                    <div className={`facilities ${Styles.mainContainer}`}>
                        <section className={Styles.welcomeSection}>
                            <h2>
                                Opportunities
                            </h2>
                            <p className={Styles.description}>
                                For any queries contact: {' '}
                                <a href="mailto:iitkgp.pr@gmail.com">Sarthak Goyal</a> {' '}
                                <a href="tel:+917584837111">
                                    (7584837111)
                                </a>
                            </p>
                        </section>

                        <section className={Styles.internSection}>
                            {
                                isLoading ? (
                                    <div className={Styles.loader}>
                                        <BarLoader color={'#b2c58c'} loading={isLoading} css={override} size={150} />
                                    </div>
                                ) : (
                                    <table className={Styles.internshipTable}>
                                        <tr>
                                            <td className={Styles.headerGrid}>
                                                Organisation
                                            </td>
                                            <td className={Styles.headerGrid}>
                                                Category
                                            </td>
                                            <td className={Styles.headerGrid}>
                                                Profile
                                            </td>
                                            <td className={Styles.headerGrid}>
                                                Description
                                            </td>
                                            <td className={Styles.headerGrid}>
                                                Deadline
                                            </td>
                                            <td className={Styles.headerGrid}>
                                                Actions
                                            </td>
                                        </tr>
                                        {
                                            internshipsData && internshipsData.map((internship, index) => (
                                                <tr>
                                                    <td className={`${Styles.internGrid} ${Styles.oddGrid}`}>
                                                        {internship[0]}
                                                    </td>
                                                    <td className={`${Styles.internGrid} ${Styles.evenGrid}`}>
                                                        {internship[2]}
                                                    </td>
                                                    <td className={`${Styles.internGrid} ${Styles.oddGrid}`}>
                                                        {internship[1]}
                                                    </td>
                                                    <td className={`${Styles.internGrid} ${Styles.internDescription} ${Styles.evenGrid}`}>
                                                        {
                                                            internship[3].split('\n').map((item) => (<p>{item}</p>))
                                                        }
                                                    </td>
                                                    <td className={`${Styles.internGrid} ${Styles.oddGrid}`}>
                                                        {internship[6]}
                                                    </td>
                                                    <td className={`${Styles.internGrid} ${Styles.evenGrid}`}>
                                                        <button onClick={() => (openModal(index))}>
                                                            Read More
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </table>
                                )
                            }
                        </section>
                    </div>
                </section>
                <InternshipModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} data={modalData} />
            </Layout>
        </>
    );
}
