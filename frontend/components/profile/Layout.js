import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const Layout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const isActiveTab = (path) => {
    if (router.asPath === path) return "bg-warning";
  };


  return (
    <section className="profile_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group shadow mb-5">
              <li className={`list-group-item ${isActiveTab("/profile")}`}>
                <Link href="/profile">
                  <a>اطلاعات کاربر</a>
                </Link>
              </li>
              <li className={`list-group-item ${isActiveTab("/profile/addresses")}`}>
                <Link href="/profile/addresses">
                  <a href="./addresses.html">آدرس ها</a>
                </Link>
              </li>
              <li className={`list-group-item ${isActiveTab("/profile/orders")}`}>
                <Link href="/profile/orders">
                  <a href="./orders.html">سفارشات</a>
                </Link>
              </li>
              <li className={`list-group-item ${isActiveTab("/profile/transactions")}`}>
                <Link href="/profile/transactions">
                  <a href="./transactions.html">تراکنش ها</a>
                </Link>
              </li>
              <li className="list-group-item">
                <a onClick={logout} href="#">
                  خروج
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-9">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
