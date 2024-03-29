import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberFormat, salePercent } from "lib/helper";
import Link from "next/link";
import Image from "next/image";
import {
  decrement,
  increment,
  removeFromCart,
  clearCart,
} from "redux/shoppingCart/cartSlice";
import Coupon from "@/components/cart/Coupon";
import Address from "@/components/cart/Address";
import Payment from "@/components/cart/Payment";
import Head from "next/head";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState({ code: "", percentage: 0 });
  const [addressId, setAddressId] = useState(null);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setCart(state.cart);
  }, [state]);

  if (cart == null) {
    return (
      <div className="cart-loadnig">
        <Head>
          <title>سبد خرید</title>
        </Head>
        <div className="spinner-border spinner-border-sm ms-2 cart-spiner"></div>
      </div>
    );
  }
  return (
    <>
      {cart.length != 0 ? (
        <section className="single_page_section layout_padding">
          <Head>
            <title>سبد خرید</title>
          </Head>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="row gy-5">
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table align-middle">
                        <thead>
                          <tr>
                            <th>محصول</th>
                            <th>نام</th>
                            <th>قیمت</th>
                            <th>تعداد</th>
                            <th>قیمت کل</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item) => (
                            <tr key={item.id}>
                              <th>
                                <Image
                                  src={item.primary_image}
                                  placeholder="blur"
                                  blurDataURL={item.primary_image_blurDataURL}
                                  width={100}
                                  height={66}
                                  alt="primary-image"
                                />
                              </th>
                              <td className="fw-bold">{item.name}</td>
                              <td>
                                <div>
                                  {item.is_sale ? (
                                    <>
                                      <span>
                                        {numberFormat(item.sale_price)}
                                      </span>
                                      <del className="me-1">
                                        {numberFormat(item.price)}
                                      </del>
                                    </>
                                  ) : (
                                    <span>{numberFormat(item.price)}</span>
                                  )}
                                  <span className="ms-1">تومان</span>
                                </div>
                                {item.is_sale && (
                                  <div className="text-danger">
                                    {salePercent(item.price, item.sale_price)}%
                                    تخفیف
                                  </div>
                                )}
                              </td>
                              <td>
                                <div className="input-counter">
                                  <span
                                    onClick={() =>
                                      item.qty < item.quantity &&
                                      dispatch(increment(item.id))
                                    }
                                    className="plus-btn"
                                  >
                                    +
                                  </span>
                                  <div className="input-number">{item.qty}</div>
                                  <span
                                    onClick={() =>
                                      item.qty > 1 &&
                                      dispatch(decrement(item.id))
                                    }
                                    className="minus-btn"
                                  >
                                    -
                                  </span>
                                </div>
                              </td>
                              <td>
                                {item.is_sale ? (
                                  <span>
                                    {numberFormat(item.sale_price * item.qty)}
                                  </span>
                                ) : (
                                  <span>
                                    {numberFormat(item.price * item.qty)}
                                  </span>
                                )}
                                <span className="ms-1">تومان</span>
                              </td>
                              <td>
                                <i
                                  onClick={() =>
                                    dispatch(removeFromCart({ id: item.id }))
                                  }
                                  className="bi bi-x text-danger fw-bold fs-4 cursor-pointer"
                                ></i>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-flex">
                  <div className="mb-3">
                    <i className="bi bi-lightbulb-fill text-primary"></i>
                    <span style={{ fontSize: "12px" }}>
                      برای اعمال تخفیف در حالت تست، از کد 5percent استفاده کنید
                    </span>
                  </div>
                  <div className="col-12 col-md-6">
                    <Coupon coupon={coupon} setCoupon={setCoupon} />
                  </div>

                  <div className="col-12 col-md-6 d-flex justify-content-end align-items-baseline">
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="btn btn-primary mb-4"
                      style={{ padding: "10px 15px" }}
                    >
                      حذف سبد خرید
                    </button>
                  </div>
                  <div className="col-12 col-md-6 d-flex justify-content-start align-items-baseline">
                    {user ? (
                      <Address setAddressId={setAddressId} />
                    ) : (
                      <span
                        onClick={() => router.push("/auth/login")}
                        style={{
                          fontSize: "15px",
                          cursor: "pointer",
                          color: "blue",
                        }}
                      >
                        برای تکمیل خرید و آدرس انتخابی، وارد حساب کاربری خود
                        شوید
                      </span>
                    )}
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-12 col-md-6">
                    <div className="card">
                      <div className="card-body p-4">
                        <h5 className="card-title fw-bold">مجموع سبد خرید</h5>
                        <ul className="list-group mt-4">
                          <li className="list-group-item d-flex justify-content-between">
                            <div>مجموع قیمت :</div>
                            <div>
                              {numberFormat(
                                cart.reduce((total, product) => {
                                  return product.is_sale
                                    ? total + product.sale_price * product.qty
                                    : total + product.price * product.qty;
                                }, 0)
                              )}
                              تومان
                            </div>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <div>
                              تخفیف :
                              <span className="text-danger ms-1">
                                {coupon.percentage}%
                              </span>
                            </div>
                            <div className="text-danger">
                              {numberFormat(
                                cart.reduce((total, product) => {
                                  return product.is_sale
                                    ? total + product.sale_price * product.qty
                                    : total + product.price * product.qty;
                                }, 0) *
                                  (coupon.percentage / 100)
                              )}
                              تومان
                            </div>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <div>قیمت پرداختی :</div>
                            <div>
                              {numberFormat(
                                cart.reduce((total, product) => {
                                  return product.is_sale
                                    ? total + product.sale_price * product.qty
                                    : total + product.price * product.qty;
                                }, 0) -
                                  cart.reduce((total, product) => {
                                    return product.is_sale
                                      ? total + product.sale_price * product.qty
                                      : total + product.price * product.qty;
                                  }, 0) *
                                    (coupon.percentage / 100)
                              )}
                              تومان
                            </div>
                          </li>
                        </ul>
                        <Payment
                          cart={cart}
                          coupon={coupon}
                          addressId={addressId}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="cart-empty">
          <div className="text-center">
            <div>
              <i className="bi bi-basket-fill" style={{ fontSize: "80px" }}></i>
            </div>
            <h4 className="text-bold">سبد خرید شما خالی است</h4>
            <Link href="/menu">
              <a className="btn btn-outline-dark mt-3">مشاهده محصولات</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
