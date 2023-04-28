import ContactForm from "@/components/contact/ContactForm";
import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(() => import("@/components/contact/Map"), { ssr: false });

const ContactPage = () => {
  return (
    <section className="book_section layout_padding">
      <Head>
        <title>ارتباط با ما</title>
      </Head>
      <div className="container">
        <div className="heading_container">
          <h2>تماس با ما</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <ContactForm />
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container ">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
