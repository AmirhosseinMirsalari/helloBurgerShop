import { numberFormat } from "lib/helper";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "redux/shoppingCart/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(removeFromCart({ id: product.id }));

    dispatch(addToCart({ product, qty: 1 }));
  };

  return (
    <div className="box">
      <div>
        <div className="img-box">
          <Link href={`/products/${product.slug}`}>
          <Image
            className="img-fluid cursor-pointer"
            src={product.primary_image}
            layout="responsive"
            width={366}
            height={244}
            placeholder="blur"
            blurDataURL={product.primary_image_blurDataURL}
          />
          </Link>
         
        </div>
        <div className="detail-box">
          <h5>
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h5>

          <p>{product.description}</p>

          <div className="options">
            <h6>
              {product.is_sale ? (
                <>
                  <span className="mx-1">
                    {numberFormat(product.sale_price)}
                  </span>
                  <del className="me-1">{numberFormat(product.price)}</del>
                </>
              ) : (
                <span className="mx-1">{numberFormat(product.price)}</span>
              )}
              <span>تومان</span>
            </h6>
            <button onClick={handleAddToCart}>
              <i className="bi bi-cart-fill text-white fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
