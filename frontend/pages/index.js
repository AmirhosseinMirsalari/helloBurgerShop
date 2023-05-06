import ContactForm from "@/components/contact/ContactForm";
import Features from "@/components/Features";
import ProductsTab from "@/components/product/ProductsTab";
import axios from "axios";
import { handleError } from "lib/helper";
import Map from "../components/Map";
import Head from "next/head";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Testimonial from "@/components/Testimonial";

const Home = ({ productsTab, error }) => {
  const DEFAULT_CENTER = [35.700105, 51.400394];

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
      </Head>
      <Features />
      {productsTab && <ProductsTab tabs={productsTab} />}
      
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h3 className=" fw-bold mb-2 ">منتظر شنیدن نظرات شما هستیم</h3>
          </div>
          <div style={{paddingBottom:"100px"}} className="bg-light px-3 border-0 rounded shadow shadow-hover">
            <div className="row">
              <div className="col-md-6">
                <div className="form_container">
                  <ContactForm />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="map_container ">
                  <div class="bg-light p-3 border-0 rounded shadow shadow-hover m-auto">
                    <Map
                      width="800"
                      height="400"
                      center={DEFAULT_CENTER}
                      zoom={15}
                    >
                      {({ TileLayer, Marker, Popup }) => (
                        <>
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const res = await axios.get("/products/products-tabs");
    // console.log(res.data.data);
    return {
      props: {
        productsTab: res.data.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: handleError(err),
      },
    };
  }
}
