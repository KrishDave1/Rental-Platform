import "./App.css";
import { Navbar } from "./components";
// import {
//   Display_Slider,
//   Extra_Discounts,
//   Footer,
//   Navbar,
//   Offers_Discounts,
//   Products,
// } from "./components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Buy from "./pages/buy";
import Cart from "./pages/cart";
import Rent from "./pages/rent";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="rent" element={<Rent />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          {/* <Route path="contact" element={<Contact />} />
        <Route path="forgot" element={<Forgot />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
