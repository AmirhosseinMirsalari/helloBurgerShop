import Layout from "@/components/profile/Layout";
import useSWR from "swr";
import { toast } from "react-toastify";
import { handleError } from "lib/helper";
import Loading from "@/components/profile/Loading";
import Create from "@/components/profile/address/Create";
import Edit from "@/components/profile/address/Edit";
import Head from "next/head";

const ProfileAddressPage = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APP_API_URL}/profile/addresses`
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
        <title>آدرس ها</title>
      </Head>
      <Create provinces={data.provinces} cities={data.cities} />
      <hr className="mb-5" />
      <h4 className="my-3 text-center fw-bold">آدرس های ثبت شده شما</h4>

      {data.addresses.map((address, index) => (
        <>
        <Edit
          key={index}
          address={address}
          provinces={data.provinces}
          cities={data.cities}
        />
        </>
      ))}
      {!data?.addresses?.length && <p>آدرسی در حال حاضر ایجاد نکرده اید</p>}
    </Layout>
  );
};

export default ProfileAddressPage;
