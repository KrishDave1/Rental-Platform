import "./App.css";
import { Navbar } from "./components";
import SideBar from "./components/SideBar";
import { useGlobalContext } from "./context";

import { Buy, Cart, Home, Login, Profile, Rent } from "./pages";
import SignUp from "./pages/SignUp";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const { location } = useGlobalContext();
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        {/* <SideBar /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="rent" element={<Rent />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
