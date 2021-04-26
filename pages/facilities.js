import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import facilitiesData from "../public/facilities";
import ImageModal from "../components/imageModal";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";
import festData from "../public/festData";

export default function Facilities() {
    return (
    <>
        <Layout>
        <Head>
          <title>Facilities</title>
        </Head>
        <section className="facilities">
                    <h2>Facilities and Events</h2>
                    <div className="image-modals">
                    <div className="column">
                        {facilitiesData.data.slice(0, 3).map((facility) => (
                        <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                        ))}
                    </div>
                    <div className="column">
                        {facilitiesData.data.slice(4, 7).map((facility) => (
                        <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                        ))}
                    </div>
                    </div>
        </section>
    </Layout>
    </>
    );}