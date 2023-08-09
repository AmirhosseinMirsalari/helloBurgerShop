const Features = () => {
  return (
    <section className="card-area layout_padding">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card bg-light border-0 shadow rounded shadow-hover">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-clock-fill fs-2 mb-3 text-primary"></i>
                <h5 className="card-title mb-3 fw-bold">همیشه در کنارتون هستیم</h5>
                <p className="card-text text-center">
                  هر روز هفته، از ۱۲ ظهر تا ۱۲ شب
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card bg-light border-0 shadow rounded shadow-hover">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone-fill fs-2 mb-3 text-primary"></i>
                <h5 className="card-title mb-3 fw-bold">آماده پاسخ گویی هستیم</h5>
                <p className="card-text text-center">
                پشتیبانی آنلاین و تلفنی برای دلگرمی شما
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card bg-light border-0 shadow rounded shadow-hover">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-geo-alt-fill fs-2 mb-3 text-primary"></i>
                <h5 className="card-title mb-3 fw-bold">نگران سرد شدن غذا نباش!</h5>
                <p className="card-text text-center">
                تا سفره رو پهن کنی، ما رسیدیم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
