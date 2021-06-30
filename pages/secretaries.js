import Head from "next/head";
import Layout from "../components/layout";
import Card from "../components/contactCard";
import secyData from "../public/secyData";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Secretaries</title>
      </Head>
      <section className="staff content">
        <h1>Secretaries</h1>
        <div className="cards">
          {secyData.data.map((contact) => {
            return (
              <Card
                key={contact.RollNo}
                Name={contact.Name}
                RollNo={contact.RollNo}
                Post={contact.Post}
                Path="secy"
                Email={contact.Email}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
