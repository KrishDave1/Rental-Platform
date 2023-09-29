import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
export const Navbar = () => {
  return (
    <nav className="">
      <ul className="list-none flex justify-center items-center h-24">
        <Link to="/">
          <li className="px-10">Home</li>
        </Link>
        <Link to="" />
        <li className="px-10">
          <IoLocationOutline />
        </li>
        <li className="px-10">
          <Link to="/buy">Buy</Link>
        </li>
        <li className="px-10">
          <Link to="/rent">Rent</Link>
        </li>
        <li className="px-10">
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="px-10">
          <Link to="/profile">
            <BsPersonFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};