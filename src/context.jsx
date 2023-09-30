import { useContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const AppContext = React.createContext();
function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < 101; i++) {
    cart[i] = 0;
  }
  return cart;
}

const dummyProducts = "https://dummyjson.com/products?limit=100";

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [sidebar, setSidebar] = useState(true)
  function handleAdd(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function handleDelete(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  function Delete(id) {
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
  }
  function GetAmount() {
    let amt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = products.find((it) => it.id === Number(item));
        amt += cartItems[item] * iteminfo.price;
      }
    }
    return amt;
  }
  function count() {
    let c = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        c += cartItems[item];
      }
    }
    return c;
  }
  function ClearCart() {
    setCartItems(getDefaultCart());
  }

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const { products } = response.data;
      console.log(products);
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(dummyProducts);
  }, []);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        products,
        handleAdd,
        handleDelete,
        Delete,
        GetAmount,
        ClearCart,
        count,
        sidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
