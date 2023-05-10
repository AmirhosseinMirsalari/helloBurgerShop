import axios from "axios";
import { handleError } from "lib/helper";
import { useState } from "react";
import { toast } from "react-toastify";

const Coupon = ({ coupon, setCoupon }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_URL}/cart/coupon`,
        {
          coupon: coupon.code,
        }
      );
      setCoupon({ ...coupon, percentage: res.data.percentage });
      toast.success("کد تخفیف شما اعمال شد");
    } catch (err) {
      toast.error(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="کد تخفیف"
          onChange={(e) => setCoupon({ ...coupon, code: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          disabled={coupon == ""}
          className="input-group-text"
          id="basic-addon2"
        >
          اعمال کد تخفیف
          {loading && (
            <div className="spinner-border spinner-border-sm ms-2"></div>
          )}
        </button>
      </div>
      
    </>
  );
};

export default Coupon;
