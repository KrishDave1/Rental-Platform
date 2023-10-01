import "./App.css";
import { Navbar } from "./components";
import { useGlobalContext } from "./context";
import { Buy, Cart, Home, Login, Profile, Rent } from "./pages";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./pages/Wishlist";

const App = () => {
  const { sidebar } = useGlobalContext();
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        {sidebar && <Sidebar />}
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
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
