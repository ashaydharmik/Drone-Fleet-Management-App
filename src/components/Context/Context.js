import React, { useContext, useEffect, useState } from "react";
import {Data} from "../Data/data"
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState("");
  const [filteredDrones, setFilteredDrones] = useState(Data.drones);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchResult = Data.drones.filter((drone) =>
      drone.status.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (searchResult.length === 0 && searchInput !== "") {
      setError("No drones found with the specified status.");
      setFilteredDrones([]);
    } else {
      setError("");
      setFilteredDrones(searchResult);
    }
  }, [searchInput]);


  const auth = localStorage.getItem("user")
  const handleLogout = () => {
    if (auth) {
      localStorage.clear();
      navigate("/");
    }
  };


  return (
    <AppContext.Provider
      value={{
        setSearchInput,
        searchInput,
        error,
        filteredDrones,
        handleLogout
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
