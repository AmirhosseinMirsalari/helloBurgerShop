import Product from "./Product";

const ProductsTab = ({ tabs }) => {
    return (
        <section className="food_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        منو محصولات
                    </h2>
                </div>

                <ul className="filters_menu">
                    {tabs.tabList.map((list, index) => (
                        <li key={index}>{list}</li>
                    ))}
                    {/* <li className="active">پیتزا</li>
                    <li>پیش غذا و سالاد</li> */}
                </ul>

                <div className="filters-content">
                    {tabs.tabPanel.map((panel, index) => (
                        <div key={index} className="row grid">
                            {panel.map((product, index) => (
                                <div key={index} className="col-sm-6 col-lg-4">
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="btn-box">
                    <a href="">
                        مشاهده بیشتر
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProductsTab;