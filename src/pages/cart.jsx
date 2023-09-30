import CartItem from "../components/Cart_Item";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import { useGlobalContext } from "../context";

export default function CartList() {
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
    <>
      <ul>
        {products?.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem key={item.id} item={item} />;
          }
        })}
      </ul>

      <p>Subtotal: {totalprice}</p>
      <p>Total Amount(including taxes and delivery charges): {Total_Price}</p>
      <button onClick={Clear}>Clear Cart</button>
      <button onClick={() => navigate("/buy")}>Continue Shopping</button>
      <button onClick={() => navigate("/checkout")}>Proceed to checkout</button>
    </>
  );
}
