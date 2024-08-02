import React, { useContext, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  
  return (
    <AppContext.Provider
      value={{
  
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobal, AppProvider };
