const Features = () => {
    return (
        <section className="card-area layout_padding">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="card-icon-wrapper">
                                    <i className="bi bi-telephone-fill fs-2 text-white card-icon"></i>
                                </div>
                                <p className="card-text fw-bold mt-2">آماده پاسخ گویی هستیم</p>
                                <p className="card-text">پشتیبانی آنلاین و تلفنی برای دلگرمی شما</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="card-icon-wrapper">
                                    <i className="bi bi-clock-fill fs-2 text-white card-icon"></i>
                                </div>
                                <p className="card-text fw-bold mt-2">همیشه در کنارتون هستیم</p>
                                <p className="card-text">هر روز هفته، از ۱۲ ظهر تا ۱۲ شب</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="card-icon-wrapper">
                                    <i className="bi bi-geo-alt-fill fs-2 text-white card-icon"></i>
                                </div>
                                <p className="card-text fw-bold mt-2">نگران سرد شدن غذا نباش!</p>
                                <p className="card-text">تا سفره رو پهن کنی، ما رسیدیم</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;