const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>تماس با ما</h4>
              <div className="contact_link_box">
                <a href="">
                  <div className="d-flex justify-content-center">
                    <p className="my-0" style={{ direction: "ltr" }}>
                      0933 2800 956
                    </p>
                    <i
                      className="bi bi-telephone-fill mx-2"
                      aria-hidden="true"
                    ></i>
                  </div>
                </a>
                <a href="">
                  <span>amirhossein.mir98@gmail.com</span>
                  <i className="bi bi-envelope-fill m-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="" className="footer-logo"></a>
              <p>
                هلو برگر توسط فریمورک Nextjs و به کمک Bootstrap 5 و با سعی بر کاهش تعداد کتابخانه ها برای سبک بودن پروژه، نوشته شده است
              </p>
              <div className="footer_social">
                <a href="https://twitter.com/Amirhossein_ms8">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/amirhossein-mirsalari-49a54b1ab/?originalSubdomain=ir">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/AmirhosseinMirsalari">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>ساعت کاری</h4>
            <p> هر روز هفته، از ۱۲ ظهر تا ۱۲ شب</p>
          </div>
        </div>
        <div className="footer-info">
          <p>برنامه نویس: امیرحسین میرسالاری</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
