import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckOtp = ({ setStep }) => {
  const { checkOtp, resendOtp, loading } = useContext(AuthContext);
  const [otp, setOtp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState("");
  const [loadingResend, setLoadingResend] = useState(false);

  useEffect(() => {
    let time = "0:59";
    let interval = setInterval(() => {
      let countdown = time.split(":");
      let minutes = parseInt(countdown[0], 10);
      let seconds = parseInt(countdown[1], 10);
      --seconds;
      minutes = seconds < 0 ? --minutes : minutes;
      if (minutes < 0) {
        clearInterval(interval);
        setShow(true);
      }
      seconds = seconds < 0 ? 59 : seconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      time = minutes + ":" + seconds;
      setTimer(time);
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimer("");
    };
  }, [loadingResend]);

  const handleChange = (value1, event) => {
    setOtp({ ...otp, [value1]: event.target.value });
    console.log(Object.values(otp).join(""));
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  const handleCheckOtp = async () => {
    if (Object.values(otp).join("") === "") {
      toast.error("کد ورود الزامی است");
      return;
    }

    const pattern = /^[0-9]{6}$/;
    if (!pattern.test(Object.values(otp).join(""))) {
      toast.error("فرمت کد ورود معتبر نیست");
      return;
    }

    await checkOtp(Object.values(otp).join(""));
    toast.success("با موفقیت وارد حساب کاربری خود شدید")
  };

  const handleResendOtp = async () => {
    setLoadingResend(true);
    await resendOtp();
    setLoadingResend(false);
    setShow(false);
    setOtp({
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    });
  };

  return (
    <div className="form_container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          کد ورود پیامک شده را وارد کنید
        </label>

        <form>
          <div className="d-flex flex-row-reverse">
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              id="exampleInputEmail1"
              className="form-control"
              value={otp.otp1}
              onChange={(e) => handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="form-control"
              value={otp.otp2}
              onChange={(e) => handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="form-control"
              value={otp.otp3}
              onChange={(e) => handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="form-control"
              value={otp.otp4}
              onChange={(e) => handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />

            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className="form-control"
              value={otp.otp5}
              onChange={(e) => handleChange("otp5", e)}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp6"
              type="text"
              autoComplete="off"
              className="form-control"
              value={otp.otp6}
              onChange={(e) => handleChange("otp6", e)}
              tabIndex="6"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </div>
        </form>

        <span
          onClick={() => setStep(1)}
          style={{ fontSize: "15px", cursor: "pointer", color: "blue" }}
        >
          تغییر شماره
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <button
          onClick={handleCheckOtp}
          disabled={loading}
          className="btn btn-primary btn-auth"
        >
          ارسال
          {loading && (
            <div className="spinner-border spinner-border-sm ms-2"></div>
          )}
        </button>
        <div>
          {show ? (
            <button
              onClick={handleResendOtp}
              disabled={loadingResend}
              className="btn btn-dark"
            >
              ارسال دوباره
              {loadingResend && (
                <div className="spinner-border spinner-border-sm ms-2"></div>
              )}
            </button>
          ) : (
            <div className="mt-3">{timer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOtp;
