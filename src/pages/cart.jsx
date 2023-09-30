import CartItem from "../components/Cart_Item";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import { useGlobalContext } from "../context";

export default function Cart() {
  const { ClearCart, GetAmount, products, cartItems } = useGlobalContext();

  function Clear() {
    ClearCart();
  }

  const navigate = useNavigate();
  let totalprice = GetAmount();
  let deliverycharges = (totalprice * 10) / 100;
  const Total_Price = deliverycharges + totalprice;
  if (totalprice === 0)
    return (
      <>
        <h1>Your Cart is empty!</h1>
        <div>
          <img src="/Images/Veggie/cartemp.png" />
        </div>
        <div>
          <BiArrowBack
            cursor={"pointer"}
            onClick={() => navigate("/buy")}
          ></BiArrowBack>

          <span> Go back to to products page</span>
        </div>
      </>
    );

  return (
    <div className="bg-white grid grid-cols-2 mx-3 rounded-md">
      <ul>
        {products?.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem key={item.id} item={item} />;
          }
        })}
      </ul>
      <div className="bg-slate-400 mt-5 rounded-md mx-3">
        <p>Subtotal: {totalprice}</p>
        <p>Total Amount(including taxes and delivery charges): {Total_Price}</p>
        <button onClick={Clear} className="cart-btn btn">
          Clear Cart
        </button>
        <button onClick={() => navigate("/buy")} className="cart-btn btn">
          Continue Shopping
        </button>
        <button onClick={() => navigate("/checkout")} className="cart-btn btn">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
