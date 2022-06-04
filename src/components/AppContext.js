import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const updateActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const appContextProps = {
    updateActiveTab,
    activeTab,
  };

  return (
    <AppContext.Provider value={appContextProps}>
      {children}
    </AppContext.Provider>
  );
};
