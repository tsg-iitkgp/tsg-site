import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/contactCard";
import staffData from "../public/staffData";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>TSG Staff</title>
      </Head>
      <section className="contact content">
        <h1>TSG Staff</h1>
        <div>
            The staff is the backbone of the Technology Students' Gymkhana, providing essential support in all activities and events
        </div>
        <div className="cards">
          {staffData.data.map((contact) => {
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
