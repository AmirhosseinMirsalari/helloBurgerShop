import Layout from "@/components/profile/Layout";
import useSWR from "swr";
import { toast } from "react-toastify";
import { handleError, numberFormat } from "lib/helper";
import Loading from "@/components/profile/Loading";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

const ProfileOrderPage = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/profile/transactions?page=${pageIndex}`
  );

  if (error) {
    toast.error(handleError(error));
  }

  if (!data)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
      <Head>
        <title>تراکنش ها</title>
      </Head>
      <div className="table-responsive">
        <table className="table align-middle">
        <thead style={{ whiteSpace: 'nowrap', overflowX: 'scroll' }}>
            <tr>
              <th >شماره سفارش</th>
              <th className="px-3">مبلغ</th>
              <th className="px-3">وضعیت</th>
              <th className="px-3">شماره پیگیری</th>
              <th className="px-3">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((item) => (
              <tr key={item.id}>
                <th>{item.order_id}</th>
                <td>{numberFormat(item.amount)} تومان</td>
                <td>
                  <span
                    className={
                      item.status == "موفق" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.trans_id}</td>
                <td>{item.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!data.transactions.length ?         <p className="text-center">شما تا کنون سفارشی ثبت نکرده اید!</p>
: <nav className="d-flex justify-content-center mt-5">
<ul className="pagination">
  {data.meta.links.slice(1, -1).map((link, index) => (
    <li
      key={index}
      className={link.active ? "page-item active" : "page-item"}
    >
      <button
        onClick={() => setPageIndex(link.label)}
        className="page-link"
      >
        {link.label}
      </button>
    </li>
  ))}
</ul>
</nav> }
      
    </Layout>
  );
};

export default ProfileOrderPage;
