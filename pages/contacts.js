import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/contactCard";
import contactsData from "../public/contactsData";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>
      <section className="contact content">
        <h1>Contact Us</h1>
        <p>
          Technology Students' Gymkhana <br /> IIT Kharagpur, Kharagpur <br />
          West Bengal - 721302
        </p>
        <a
          className="fake-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform?usp=sf_link"
          traget="_blank"
          rel="noreferrer noopener"
        >
          Complaint Form
        </a>
        <div className="cards">
          {contactsData.data.map((contact) => {
            return (
              <Card
                key={contact.RollNo}
                Name={contact.Name}
                Contact={contact.Contact}
                RollNo={contact.RollNo}
                Post={contact.Post}
                Email={contact.Email}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
