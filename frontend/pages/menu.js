import { handleError } from "lib/helper";
import { useEffect } from "react";
import { toast } from "react-toastify"
import axios from "axios"

const MenuPage = ({ categories, error }) => {
    useEffect(() => {
        error && toast.error(error)
    }, [error])

    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <div>
                            <label className="form-label">جستجو</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="نام محصول ..."
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <a href="#" className="input-group-text" id="basic-addon2">
                                    <i className="bi bi-search"></i>
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="filter-list">
                            <div className="form-label">
                                دسته بندی
                            </div>
                            <ul>
                                {categories && categories.map((category, index) => (
                                    <li key={index} className="my-2 cursor-pointer">{category.name}</li>
                                ))}
                                {/* <li className="my-2 cursor-pointer filter-list-active">پیتزا</li> */}
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <label className="form-label">مرتب سازی</label>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label cursor-pointer" for="flexRadioDefault1">
                                    بیشترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    checked />
                                <label className="form-check-label cursor-pointer" for="flexRadioDefault2">
                                    کمترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                    checked />
                                <label className="form-check-label cursor-pointer" for="flexRadioDefault3">
                                    پرفروش ترین
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                    checked />
                                <label className="form-check-label cursor-pointer" for="flexRadioDefault4">
                                    با تخفیف
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <div className="row gx-3">
                            <div className="col-sm-6 col-lg-4">
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img className="img-fluid" src="./images/b1.jpg" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                لورم ایپسوم متن
                                            </h5>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان
                                                گرافیک است.
                                            </p>
                                            <div className="options">
                                                <h6>
                                                    <del>45,000</del>
                                                    34,000
                                                    <span>تومان</span>
                                                </h6>
                                                <a href="">
                                                    <i className="bi bi-cart-fill text-white fs-5"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="d-flex justify-content-center mt-5">
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuPage;

export async function getServerSideProps() {
    try {
        const resCate = await axios.get("/categories")
        // console.log(res.data.data);
        return {
            props: {
                categories: resCate.data.data
            }
        }
    } catch (err) {
        return {
            props: {
                error: handleError(err)
            }
        }
    }
}
