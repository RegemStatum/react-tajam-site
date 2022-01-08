import React, { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  return (
    <AppContext.Provider
      value={{
        linksRef,
        linksContainerRef,
        isMenuActive,
        setIsMenuActive,
        isHomePage,
        setIsHomePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
