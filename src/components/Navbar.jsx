import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

export const Navbar = () => {
  const { dummy } = useGlobalContext();
  const hello = () => {
    console.log(dummy);
  };
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
          <button onClick={hello}>Click me</button>
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
