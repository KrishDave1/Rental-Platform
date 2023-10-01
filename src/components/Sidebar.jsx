/** @format */

import React from "react";
import { useGlobalContext } from "../context";

const cities = [
  {
    id: 11,
    img: "src/assets/images/del.webp",
    pincode: 110002,
    name: "Delhi",
  },
  {
    id: 12,
    img: "src/assets/images/gurugram.webp",
    pincode: 122018,
    name: "Gurugram",
  },
  {
    id: 41,
    img: "src/assets/images/pune.webp",
    pincode: 411005,
    name: "Pune",
  },
  {
    id: 56,
    img: "src/assets/images/blr.webp",
    pincode: 560100,
    name: "Bengaluru",
  },
  {
    id: 60,
    img: "src/assets/images/chennai.webp",
    pincode: 600001,
    name: "Chennai",
  },
  {
    id: 50,
    img: "src/assets/images/hyd.webp",
    pincode: 500001,
    name: "Hyderabad",
  },
  {
    id: 40,
    img: "src/assets/images/mum.webp",
    pincode: 400001,
    name: "Mumbai",
  },
  {
    id: 20,
    img: "src/assets/images/ghaz.webp",
    pincode: 201003,
    name: "Ghaziabad",
  },
  {
    id: 21,
    img: "src/assets/images/Noida.webp",
    pincode: 210310,
    name: "Noida",
  },
];

const Sidebar = () => {
  const { closeModal } = useGlobalContext();
  return (
    <div className="sidebar-overlay">
      {cities.map((city) => {
        const { id, img, pincode, name } = city;
        return (
          <div key={id} className="sidebar-container">
            <img src={img} className="img modal-img" />
            <div className="modal-content">
              <h4>{name}</h4>
              <h5>{pincode}</h5>
            </div>
          </div>
        );
      })}
      <button className="btn btn-hipster close-btn" onClick={closeModal}>
        close
      </button>
    </div>
  );
};

export default Sidebar;
