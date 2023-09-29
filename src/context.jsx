import { useContext } from "react";
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const dummy = "dummy";

  return (
    <AppContext.Provider value={{dummy}}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };

