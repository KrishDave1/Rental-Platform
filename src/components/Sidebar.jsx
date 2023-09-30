import React from "react";
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

const SideBar = () => {
    return (
        <aside className='modal-overlay'>
    <div className='modal-container'>
      modal content here
    </div>
  </aside>
    );
};

export default SideBar;
