import React from "react";

function Testimonial() {
  return (

    <div className="testimonial-area ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header text-center">
              <h4 className="fw-bold mb-5">مشتریان هلو برگر در مورد ما چه می گویند؟</h4>
              <p>
                سرمایه اصلی هلو برگر، نظرات سازنده شماست! با ما در ارتباط باشید :)
              </p>
            </div>
          </div>
          <div className="col-sm-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-interval="9000"

            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active text-center" data-bs-interval="3000"> 
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                  />
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">نیکی رضایی</h5>
                      <p>برگر ذغالی</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        غذا گرم و سریع به دستم رسید. بسته بندی محصول هم بسیار محکم بود و به غذا آسیبی نرسید
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item  text-center" data-bs-interval="3000">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                  />
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">علیرضا آقایی</h5>
                      <p>پیتزا پپرونی</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        فوق العاده خوشمزه و با بهترین مواد درست شده بود، مرسی از هلو برگر عزیز
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item  text-center" data-bs-interval="3000">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/3.webp"
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                  />
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">سینا شاهرخی</h5>
                      <p>پیتزا مخلوط</p>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        بسته بندی پیتزا فوق العاده شکیل و محکم بود، غذا گرم و تازه به دستم رسید، ممنون از پرسنل خوبتون
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
