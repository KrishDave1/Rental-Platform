/** @format */

import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "../context";
import { AiOutlineStar } from "react-icons/ai";

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
      {products?.map((singleProduct) => {
        const { id, Title, Product_Image, Price,Reviews,Rating,Price_was,Percentage_off } = singleProduct;
        const PriceRs=Number(Price)*83;
        const PriceWasRs=Number(Price_was)*83
        return (
          <article key={id} className="single-product">
            <img src={Product_Image} alt={Title} className="img" />
            <footer className="text-area">
              <div className="title-text">
                <h5>{Title}</h5>
                </div>
              <div className="mt-0">
                <AiOutlineStar color="yellow" /> {Number(Rating)===0? 2: Number(Rating).toFixed(1)}
                <p>{Reviews==="undefined" || Number(Reviews)<=20?  169 + " Reviews":Reviews +" Reviews"}</p>
                </div>
              <div className="mrp-text">
                <h5>Our Price :</h5>
                <h4>₹ {PriceRs.toFixed(2)}</h4>
              </div>
              <label htmlFor="months">Select the Time period</label>
              <div className="border-solid border-2 border-slate-100">
      
              <select name="months" id="months">
                <option value={3}>3 months</option>
                <option value={6}>6 months</option>
                  <option value={9}>9 months</option>
                  <option value={12}>12 months</option>
              </select>
              </div>
              <div>
              {Percentage_off==="undefined" || Price_was==="undefined"? "M.R.P: "+"₹"+PriceRs.toFixed(2)+" (0% off)": "M.R.P: ₹"+PriceWasRs.toFixed(2)+` (${Percentage_off}% off)`}
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
                <button className="buy-btn btn">Rent Now</button>
              </div>
            </footer>
            {/* <ToastContainer /> */}
          </article>
        );
      })}
    </section>
  );
};
