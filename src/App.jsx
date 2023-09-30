import "./App.css";
import { Navbar, Footer } from "./components";
import { Buy, Cart, Home, Login, Profile, Rent } from "./pages";

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
          <Route path="login" element = {<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
