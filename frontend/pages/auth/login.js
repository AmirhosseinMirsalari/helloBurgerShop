import CheckOtp from "@/components/auth/CheckOtp";
import Login from "@/components/auth/Login";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/logo.png";
import { useRouter } from "next/router";
import { useIsMobile } from "lib/helper";

const LoginPage = () => {
  const [setp, setStep] = useState(1);
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <section className="auth_section book_section">
      <Head>
        <title>ورود به حساب کاربری</title>
      </Head>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4">
            <div
              className={`card shadow shadow-hover ${isMobile && "mx-4"}`}
              style={{ marginTop: "20%" }}
            >
              <div className="card-body">
                <div className="cursor-pointer">
                  <Image onClick={() => router.push("/")} src={logo} />
                </div>
                <h5 className=" fw-bold mb-5 text-center">
                  ورود به حساب کاربری
                </h5>

                {setp === 1 && <Login setStep={setStep} />}
                {setp === 2 && <CheckOtp />}
              </div>
            </div>
         
          </div>
          {setp === 2 && (
                <span className="my-5 text-center">
                  به دلیل عدم اتصال سرور به سرویس پیامکی در حالت دمو، پیامکی
                  برای شما ارسال نمی شود{" "}
                </span>
            )}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
