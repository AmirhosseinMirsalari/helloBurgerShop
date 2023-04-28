import { useEffect, useState } from "react";


const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number);
};

const handleError = (err) => {
  if (err.response) {
    console.log("Error Response", err.response.data);
    if (err.response.status == 422) {
      const errors = [];
      Object.keys(err.response.data.message).map((key) => {
        err.response.data.message[key].map((e) => {
          errors.push(e);
        });
      });
      return errors.join();
    }
    return err.response.data.message;
  } else if (err.request) {
    console.log("Error Request", err.request);
    return err.request;
  } else {
    return err.message;
  }
  console.log("Error", err.message);

  // return 'خطای سرور، دوباره تلاش کنید'
};

const saveStorage = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }
};

const getStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("shopping-cart")
      ? JSON.parse(localStorage.getItem("shopping-cart"))
      : [];
  } else {
    return [];
  }
};
const salePercent = (price, sale_price) => {
  return Math.round(((price - sale_price) / price) * 100);
};



function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 992);
      window.addEventListener("resize", onResize);
    } else if (typeof global !== "undefined") {
      setIsMobile(global.innerWidth < 992);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onResize);
      }
    };
  }, []);

  return isMobile;
}

export {
  handleError,
  numberFormat,
  saveStorage,
  getStorage,
  salePercent,
  useIsMobile,
};
