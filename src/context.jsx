import { useContext,useState,useEffect } from "react";
import React from "react";
import axios from "axios";

const AppContext = React.createContext();

const dummyProducts = 'https://dummyjson.com/products?limit=100'

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const { products } = response.data;
      console.log(products);
      setProducts(products);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(dummyProducts);
  }, []);

  return (
    <AppContext.Provider value={{products}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };

