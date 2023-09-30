import { useState } from "react";

import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

import { useGlobalContext } from "../context";

export default function CartItem({ item }) {
  const { handleDelete, handleAdd, Delete, cartItems } = useGlobalContext();

  return (
    <div>
      <div>
        <img src={item.images[0]} alt={item.title} />
      </div>
      <div>
        <div>
          <span>
            {" "}
            <LiaMinusCircleSolid onClick={() => handleDelete(item.id)} />
          </span>
          <span>{cartItems[item.id]}</span>

          <span>
            <LiaPlusCircleSolid onClick={() => handleAdd(item.id)} />
          </span>
        </div>
        <div>
          <p>₹{item.price * cartItems[item.id]}</p>
        </div>
        <MdDelete
          cursor="pointer"
          size={"30px"}
          onClick={() => Delete(item.id)}
        />
      </div>
    </div>
  );
}
