import { handleError, useIsMobile } from "lib/helper";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Product from "@/components/product/Product";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const MenuPage = ({ products, categories, error }) => {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState(products);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    if (router.asPath === "/menu") {
      setProductList(products);
    }

    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
        router.reload();
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  const handleFilter = async (value) => {
    let query = { ...router.query, ...value };

    if (!value.hasOwnProperty("page")) {
      delete query.page;
    }

    try {
      setLoading(true);

      const res = await axios.get(
        `/menu?${new URLSearchParams(query).toString()}`
      );
      setProductList(res.data.data);
      router.push(`/menu?${new URLSearchParams(query).toString()}`, undefined, {
        shallow: true,
      });
    } catch (err) {
      toast.error(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{ backgroundColor: "rgb(245 245 244)" }}
      className="food_section layout_padding"
    >
      <Head>
        <title>منوی غذا</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <div>
              {isMobile && (
                <div>
                  <div className="d-flex justify-content-between">
                    <div
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasMenu"
                      aria-controls="offcanvasMenu"
                      aria-label="Toggle navigation"
                      className="d-inline-block"
                    >
                      <i className="bi bi-filter"></i>
                      <span className="mx-2 cursor-pointer">فیلتر محصولات</span>
                    </div>
                    <div onClick={() => router.push("/menu")}>
                      <i style={{ color: "red" }} className="bi bi-x-lg"></i>
                      <span className="mx-1 cursor-pointer">حذف فیلتر ها</span>
                    </div>
                  </div>
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgb(245 245 244)" }}
                    id="offcanvasMenu"
                    aria-labelledby="offcanvasMenuLabel"
                  >
                    <div
                      style={{ margin: "0 3px -10px 3px" }}
                      className="offcanvas-header"
                    >
                      <h5 className="offcanvas-title" id="offcanvasMenuLabel">
                        فیلتر محصولات
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="mx-4">
                      <hr />
                      <div className="filter-list shadow">
                        <div className="form-label ">دسته بندی</div>
                        <ul className="mt-3">
                          {categories &&
                            categories.map((category, index) => (
                              <li
                                onClick={() =>
                                  handleFilter({ category: category.id })
                                }
                                key={index}
                                className={
                                  router.query.hasOwnProperty("category") &&
                                  router.query.category == category.id
                                    ? "my-2 cursor-pointer filter-list-active"
                                    : "my-2 cursor-pointer"
                                }
                              >
                                {category.name}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <hr />
                      <div className="filter-list shadow">
                        <label className="form-label">مرتب سازی</label>
                        <div className="form-check my-2">
                          <input
                            onChange={() => handleFilter({ sortBy: "max" })}
                            checked={
                              router.query.hasOwnProperty("sortBy") &&
                              router.query.sortBy == "max"
                            }
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label cursor-pointer"
                            htmlFor="flexRadioDefault1"
                          >
                            بیشترین قیمت
                          </label>
                        </div>
                        <div className="form-check my-2">
                          <input
                            onChange={() => handleFilter({ sortBy: "min" })}
                            checked={
                              router.query.hasOwnProperty("sortBy") &&
                              router.query.sortBy == "min"
                            }
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label cursor-pointer"
                            htmlFor="flexRadioDefault2"
                          >
                            کمترین قیمت
                          </label>
                        </div>
                        <div className="form-check my-2">
                          <input
                            onChange={() =>
                              handleFilter({ sortBy: "bestseller" })
                            }
                            checked={
                              router.query.hasOwnProperty("sortBy") &&
                              router.query.sortBy == "bestseller"
                            }
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label cursor-pointer"
                            htmlFor="flexRadioDefault3"
                          >
                            پرفروش ترین
                          </label>
                        </div>
                        <div className="form-check my-2">
                          <input
                            onChange={() => handleFilter({ sortBy: "sale" })}
                            checked={
                              router.query.hasOwnProperty("sortBy") &&
                              router.query.sortBy == "sale"
                            }
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                          />
                          <label
                            className="form-check-label cursor-pointer"
                            htmlFor="flexRadioDefault4"
                          >
                            با تخفیف
                          </label>
                        </div>
                      </div>
                      <button
                        onClick={() => router.push("/menu")}
                        className="btn btn-outline-secondary mt-4"
                        type="button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        style={{ padding: "8px 12px", width: "100%" }}
                      >
                        پاک کردن فیلترها
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="input-group mt-3">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="جستجوی محصول ..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button
                  onClick={() => {
                    if (!search) {
                      router.push("/menu");
                    } else {
                      handleFilter({ search });
                    }
                  }}
                  className="btn btn-outline-secondary"
                  type="button"
                  id="basic-addon2"
                  style={{ padding: "8px 12px", width: "37%" }}
                >
                  <i className="bi bi-search"></i> جستجو
                </button>
              </div>
            </div>

            {!isMobile && (
              <>
                <hr />
                <div className="filter-list shadow">
                  <div className="form-label">دسته بندی</div>
                  <ul>
                    {categories &&
                      categories.map((category, index) => (
                        <li
                          onClick={() =>
                            handleFilter({ category: category.id })
                          }
                          key={index}
                          className={
                            router.query.hasOwnProperty("category") &&
                            router.query.category == category.id
                              ? "my-2 cursor-pointer filter-list-active"
                              : "my-2 cursor-pointer"
                          }
                        >
                          {category.name}
                        </li>
                      ))}
                  </ul>
                </div>
                <hr />
                <div className="filter-list shadow">
                  <label className="form-label">مرتب سازی</label>
                  <div className="form-check my-2">
                    <input
                      onChange={() => handleFilter({ sortBy: "max" })}
                      checked={
                        router.query.hasOwnProperty("sortBy") &&
                        router.query.sortBy == "max"
                      }
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label cursor-pointer"
                      htmlFor="flexRadioDefault1"
                    >
                      بیشترین قیمت
                    </label>
                  </div>
                  <div className="form-check my-2">
                    <input
                      onChange={() => handleFilter({ sortBy: "min" })}
                      checked={
                        router.query.hasOwnProperty("sortBy") &&
                        router.query.sortBy == "min"
                      }
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label cursor-pointer"
                      htmlFor="flexRadioDefault2"
                    >
                      کمترین قیمت
                    </label>
                  </div>
                  <div className="form-check my-2">
                    <input
                      onChange={() => handleFilter({ sortBy: "bestseller" })}
                      checked={
                        router.query.hasOwnProperty("sortBy") &&
                        router.query.sortBy == "bestseller"
                      }
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label
                      className="form-check-label cursor-pointer"
                      htmlFor="flexRadioDefault3"
                    >
                      پرفروش ترین
                    </label>
                  </div>
                  <div className="form-check my-2">
                    <input
                      onChange={() => handleFilter({ sortBy: "sale" })}
                      checked={
                        router.query.hasOwnProperty("sortBy") &&
                        router.query.sortBy == "sale"
                      }
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label
                      className="form-check-label cursor-pointer"
                      htmlFor="flexRadioDefault4"
                    >
                      با تخفیف
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
          {productList && productList.products.length != 0 ? (
            <>
              {loading ? (
                <div className="col-sm-12 col-lg-9">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="spinner-border"></div>
                  </div>
                </div>
              ) : (
                <div className="col-sm-12 col-lg-9">
                  <div className="row gx-3">
                    {productList &&
                      productList.products.map((product, index) => (
                        <div key={index} className="col-sm-6 col-lg-4">
                          <Product product={product} />
                        </div>
                      ))}
                  </div>
                  <nav className="d-flex justify-content-center mt-5">
                    <ul className="pagination">
                      {productList &&
                        productList.meta.links
                          .slice(1, -1)
                          .map((link, index) => (
                            <li
                              key={index}
                              className={
                                link.active ? "page-item active" : "page-item"
                              }
                            >
                              <button
                                onClick={() =>
                                  handleFilter({ page: link.label })
                                }
                                className="page-link"
                              >
                                {link.label}
                              </button>
                            </li>
                          ))}
                    </ul>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="col-sm-12 col-lg-9">
              <div className="d-flex justify-content-center align-items-center h-100 mt-5">
                <h5>محصولی یافت نشده!</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;

export async function getServerSideProps({ resolvedUrl }) {
  try {
    const res = await axios.get(`${resolvedUrl}`);
    const resCate = await axios.get("/categories");

    return {
      props: {
        products: res.data.data,
        categories: resCate.data.data,
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
