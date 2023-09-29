import { useContext, useEffect } from "react";
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const products = async (url) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    headers.append('Origin','http://localhost:8000');
    const response = await fetch(url, headers);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    products("http://127.0.0.1:8000/");
  }, []);
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
