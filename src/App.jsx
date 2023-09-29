import "./App.css";
// import {
//   Display_Slider,
//   Extra_Discounts,
//   Footer,
//   Navbar,
//   Offers_Discounts,
//   Products,
// } from "./components";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Buy from "./pages/buy";
import Cart from "./pages/cart";
import Rent from "./pages/rent";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="rent" element={<Rent />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />

        {/* <Route path="contact" element={<Contact />} />
        <Route path="forgot" element={<Forgot />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
