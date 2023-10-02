/** @format */

// import { useState } from "react";

import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";

import { RiDeleteBin6Line } from "react-icons/ri";

import { useGlobalContext } from "../context";

export default function CartItem({ item }) {
  const { handleDelete, handleAdd, Delete, cartItems, handleAddWish } =
    useGlobalContext();

  return (
    <div className="bg-slate-200 rounded-md cart-container ">
      {/* <div className="flex flex-col"> */}
        <div className="border-b-2 border-black w-full text-lg font-semibold">Buy Item</div>
        <div className="flex items-center w-full justify-around">
          <div className="flex flex-row items-center cart-container-image img mx-6">
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-full rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="m-3">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-lg font-semibold">₹{item.price * cartItems[item.id]}</p>
            </div>
            <div className="flex px-4 mb-7">
              <button>
                {" "}
                <LiaMinusCircleSolid size={"30px"} onClick={() => handleDelete(item.id)} />
              </button>
              <span className="text-lg font-bold">{cartItems[item.id]}</span>
              <button>
                <LiaPlusCircleSolid size={"30px"} onClick={() => handleAdd(item.id)} />
              </button>
            </div>
          </div>
          <div className="px-5 justify-end">
            <RiDeleteBin6Line
              cursor="pointer"
              size={"30px"}
              onClick={() => Delete(item.id)}
            />
            <div className="p-3 justify-end">
              <button onClick={() => handleAddWish(item.id)}>
                {" "}
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
