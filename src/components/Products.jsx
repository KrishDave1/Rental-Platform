/** @format */

import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "../context";

export const Products = () => {
  const { products } = useGlobalContext();
  const { handleAdd, cartItems } = useGlobalContext();
  // function toastfn(singleProduct) {
  //   return (
  //     toast.success(`${singleProduct.title} added to Cart`),
  //     {
  //       theme: "colored",
  //     }
  //   );
  // }


  
  function handle(singleProduct) {
    handleAdd(singleProduct.id);
    // if (cartItems[singleProduct.id] < 1) toastfn(singleProduct);
  }

  return (
    <section className="section-center">
      {products.map((singleProduct) => {
        const { id, title, images, price } = singleProduct;
        return (
          <article key={id} className="single-product">
            <img src={images[0]} alt={title} className="img" />
            <footer className="text-area">
              <div className="title-text">
                <h5>{title}</h5>
              </div>
              <div className="mrp-text">
                <h5>MRP :</h5>
                <h4>$ {price}</h4>
              </div>
              <div className="cart-buy-btn">
                <button
                  className="cart-btn btn"
                  onClick={() => handle(singleProduct)}
                >
                  Add To Cart
                  {cartItems[singleProduct.id] === 0
                    ? ""
                    : `(${cartItems[singleProduct.id]})`}
                </button>
                <button className="buy-btn btn">Buy Now</button>
              </div>
            </footer>
            {/* <ToastContainer /> */}
          </article>
        );
      })}
    </section>
  );
};
