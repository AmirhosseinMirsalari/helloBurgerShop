/* eslint-disable @next/next/no-html-link-for-pages */
import logo from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useIsMobile } from "lib/helper";

const Header = () => {
  const [cart, setCart] = useState([]);
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const state = useSelector((state) => state.cart);

  const isMobile = useIsMobile();

  useEffect(() => {
    setCart(state.cart);
  }, [state]);

  return (
    <div className={router.pathname === "/" ? "" : "sub_page"}>
      <div className="hero_area">
        <div className="bg-box">
          {router.pathname === "/" && (
            <Image
              src="https://uupload.ir/view/header_dlj0.webp"
              placeholder="blur"
              layout="fill"
              alt="hero-image"
            />
          )}
        </div>

        <header className="header_section">
          <div style={{ marginBottom: "-20px" }} className="container mt-3">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a href="/" style={{ marginBottom: "15px" }}>
                <Image src={logo} alt="logo" />
              </a>

              {isMobile && (
                <div>
                  <div>
                    <div
                      className="navbar-toggler-icon mb-5 fs-1"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasNavbar"
                      aria-controls="offcanvasNavbar"
                      aria-label="Toggle navigation"
                    >
                      <i className="bi bi-list text-white"></i>
                    </div>
                  </div>

                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    style={{ backgroundColor: "#0F0F0F" }}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div
                      style={{ margin: "0 3px -10px 3px" }}
                      className="offcanvas-header"
                    >
                      <h5
                        className="offcanvas-title text-white my-"
                        id="offcanvasNavbarLabel"
                      >
                        دسترسی سریع
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <hr className="text-white" />
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          className={
                            router.pathname === "/"
                              ? "nav-item active"
                              : "nav-item"
                          }
                        >
                          <Link href="/">
                            <a className="nav-link">صفحه اصلی</a>
                          </Link>
                        </li>
                        <li
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          className={
                            router.pathname === "/menu"
                              ? "nav-item active"
                              : "nav-item"
                          }
                        >
                          <Link href="/menu">
                            <a className="nav-link">منو غذا</a>
                          </Link>
                        </li>
                        <li
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          className={
                            router.pathname === "/contact"
                              ? "nav-item active"
                              : "nav-item"
                          }
                        >
                          <Link href="/contact">
                            <a className="nav-link">تماس باما</a>
                          </Link>
                        </li>
                      </ul>
                      <div className="user_option">
                        <div data-bs-dismiss="offcanvas" aria-label="Close">
                          <Link href="/cart">
                            <a className="cart_link position-relative">
                              <i className="bi bi-cart-fill text-white fs-5"></i>
                              <span className="position-absolute top-0 translate-middle badge rounded-pill">
                                {cart.length}
                              </span>
                            </a>
                          </Link>
                        </div>

                        {!user ? (
                          <div data-bs-dismiss="offcanvas" aria-label="Close">
                            <Link href="/auth/login">
                              <a className="btn-auth">ورود به حساب کاربری</a>
                            </Link>
                          </div>
                        ) : (
                          <div data-bs-dismiss="offcanvas" aria-label="Close">
                            <Link href="/profile">
                              <a className="btn-auth">پروفایل کاربری</a>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="collapse navbar-collapse mb-5"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li
                    className={
                      router.pathname === "/" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link href="/">
                      <a className="nav-link">صفحه اصلی</a>
                    </Link>
                  </li>
                  <li
                    className={
                      router.pathname === "/menu"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link href="/menu">
                      <a className="nav-link">منو غذا</a>
                    </Link>
                  </li>
                 
                  <li
                    className={
                      router.pathname === "/contact"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Link href="/contact">
                      <a className="nav-link">تماس باما</a>
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  <Link href="/cart">
                    <a className="cart_link position-relative">
                      <i className="bi bi-cart-fill text-white fs-5"></i>
                      <span className="position-absolute top-0 translate-middle badge rounded-pill">
                        {cart.length}
                      </span>
                    </a>
                  </Link>
                  {!user ? (
                    <Link href="/auth/login">
                      <a className="btn-auth">ورود به حساب کاربری</a>
                    </Link>
                  ) : (
                    <Link href="/profile">
                      <a className="btn-auth">پروفایل کاربری</a>
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </header>

        {router.pathname === "/" && (
          <section className="slider_section">
            <div
              id="customCarousel1"
              className="carousel slide"
              data-bs-ride="carousel"
              data-interval="10000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h2
                            className={`mb-5 mt-3 fw-bold ${
                              isMobile && "text-center"
                            }`}
                          >
                            نگران سرد شدن غذا نباش!
                          </h2>
                          <p className={`${isMobile && "text-center"}`}>
                            تا سفره رو پهن کنی، غذا رو گرم و سالم واست میفرستیم
                          </p>
                          <div
                            className={`btn-box ${isMobile && "text-center"}`}
                          >
                            <Link href="/menu">
                              <a className="btn1">سفارش</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h2
                            className={`mb-5 mt-3 fw-bold ${
                              isMobile && "text-center"
                            }`}
                          >
                            همه روزه و همه ساعت پیشتونیم
                          </h2>
                          <p className={`${isMobile && "text-center"}`}>
                            هر روز هفته کنارتونیم، از از ۱۲ ظهر تا ۱۲ شب
                          </p>
                          <div
                            className={`btn-box ${isMobile && "text-center"}`}
                          >
                            <Link href="/menu">
                              <a className="btn1">سفارش</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <ol className="carousel-indicators">
                  <div>
                    <li
                      data-bs-target="#customCarousel1"
                      data-bs-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-bs-target="#customCarousel1"
                      data-bs-slide-to="1"
                    ></li>
                  </div>
                </ol>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Header;
