import { useState } from "react";

import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";

import { RiDeleteBin6Line } from "react-icons/ri";

import { useGlobalContext } from "../context";

export default function CartItem({ item }) {
  const { handleDelete, handleAdd, Delete, cartItems } = useGlobalContext();

  return (
    <div className="bg-slate-200 flex  px-10 m-5 rounded-md">
      <div className="flex  items-center ">
        <img
          src={item.images[0]}
          alt={item.title}
          className="h-24 w-24 rounded-md"
        />
      </div>

      {/* <div className="flex  "> */}
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
      </div>
    </div>
  );
}
