import { handleError } from "lib/helper";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((name === "", email === "", subject === "", text === "")) {
      toast.error("تمام موارد فرم تماس با ما الزامی است.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/contact-us", {
        name,
        email,
        subject,
        text,
      });
      toast.success("پیام شما ثبت شد");
      setName("")
      setEmail("")
      setSubject("")
      setText("")

    } catch (err) {
      toast.error(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold mb-2">
          نام
        </label>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="form-control"
          placeholder="نام و نام خانوادگی"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold mb-2">
          ایمیل
        </label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label fw-bold mb-2">
          موضوع پیام
        </label>
        <input
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          type="text"
          className="form-control"
          placeholder="موضوع پیام"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label fw-bold mb-2">
          متن پیام
        </label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          rows="10"
          style={{ height: "100px" }}
          id="message"
          className="form-control"
          placeholder="متن پیام خود را وارد کنید"
        ></textarea>{" "}
      </div>
      <button type="submit" disabled={loading}>
        ارسال پیام
        {loading && (
          <div className="spinner-border spinner-border-sm ms-2"></div>
        )}
      </button>{" "}
    </form>
  );
};

export default ContactForm;
