import Map from "@/components/Map";
import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";


const ContactPage = () => {
  const DEFAULT_CENTER = [35.700105, 51.400394];

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
            <Map width="800" height="400" center={DEFAULT_CENTER} zoom={15}>
                  {({ TileLayer, Marker, Popup }) => (
                    <>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={DEFAULT_CENTER}>
                        <Popup>
                          ما اینجاییم، حضورا هم درخدمت شما هستیم
                        </Popup>
                      </Marker>
                    </>
                  )}
                </Map>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
