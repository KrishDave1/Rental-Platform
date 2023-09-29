import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
export const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="" />
        <li>
          <IoLocationOutline />
        </li>
        <li>
          <Link to="/buy">Buy</Link>
        </li>
        <li>
          <Link to="/rent">Rent</Link>
        </li>
        <li>
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <BsPersonFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
