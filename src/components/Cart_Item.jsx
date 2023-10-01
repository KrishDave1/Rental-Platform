/** @format */

import { useState } from "react";

import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";

import { RiDeleteBin6Line } from "react-icons/ri";

import { useGlobalContext } from "../context";

export default function CartItem({ item }) {
  const { handleDelete, handleAdd, Delete, cartItems, handleAddWish } =
    useGlobalContext();

  return (
    <div className="bg-slate-200 rounded-md cart-container">
      <div className="flex flex-col">
        <div className="border-b-2 border-black w-full">Buy Item</div>
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-row items-center cart-container-image img">
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-full rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="m-7">
              <h2 className="text-lg">{item.title}</h2>
              <p>₹{item.price * cartItems[item.id]}</p>
            </div>
            <div className="flex flex-col">
              <button>
                {" "}
                <LiaMinusCircleSolid onClick={() => handleDelete(item.id)} />
              </button>
              <span>{cartItems[item.id]}</span>
              <span>
                <LiaPlusCircleSolid onClick={() => handleAdd(item.id)} />
              </span>
            </div>
          </div>
          <div className="px-5 justify-end">
            <RiDeleteBin6Line
              cursor="pointer"
              size={"30px"}
              onClick={() => Delete(item.id)}
            />
            <div>
              <button onClick={() => handleAddWish(item.id)}>
                {" "}
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
