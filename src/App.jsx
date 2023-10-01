import "./App.css";
import { Navbar, Sidebar } from "./components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./context";
import { Buy, Cart, Home, Login, Profile, Rent } from "./pages";
import { Footer } from "./components";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import data from "../data/data.json";

const App = () => {
  // const { sidebar } = useGlobalContext();
  // const [details, setDetails] = useState([]);
  // const [employee,setEmployees] = useState('');
  // const [department, setDepartment] = useState('');

  // const handleEmployeeChange = (event) => {
  //   setEmployees(event.target.value);
  // }

  // const handleDepartmentChange = (event) => {
  //   setDepartment(event.target.value);
  // }

  // const data20 = async() => {
  //   const response = await fetch("http://localhost:3001/Refer");
  //   const res = await response.json();
  //   console.log(res);
  //   const data1 = res.Refer;
  //   const data = data1.map((item) => ({
  //     Title: item.Title,
  //     Product_Id: item.Product_Id,
  //     Product_Image: item.images[6],
  //     Price: item.Price,
  //     Reviews: item.Reviews,
  //     Rating: item.Rating,
  //     Price_was: item.Price_was,
  //     Percentage_off: item.Percentage_off,
  //     Type: item.Type,
  //   }));
  //   console.log(data);
    // axios
    //   .post("http://192.168.66.165:55000/products/", data)
    //   .then((response) => {
    //     console.log("Item added to database", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error adding item to the database : ", error);
    //   });}
  

  // useEffect(() => {
  //   axios
  //     .get("http://192.168.66.165:55000/products/")
  //     .then((res) => {
  //       setDetails(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {});
  // }, []);

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        {/* {sidebar && <Sidebar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="rent" element={<Rent />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
        {/* <div>
          <header>Data Generated from Django</header>
          <hr></hr>
          {details.map((output, id) => (
            <div key={id}>
              <div>
                <h2>{output.employee}</h2>
                <h3>{output.department}</h3>
              </div>
            </div>
          ))}

          <div>
            <div>
              <label>ProductID:</label>
              <input
                type="text"
                value={employee}
                onChange={handleEmployeeChange}
              />
            </div>
            <div>
              <label>Product_Name:</label>
              <input
                type="text"
                value={department}
                onChange={handleDepartmentChange}
              />
            </div>
            <button onClick={() => data20()}>Add Item</button>
          </div>
        </div> */}
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
