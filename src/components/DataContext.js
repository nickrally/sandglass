import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { getAll } from "../api/habitRequests";

export const DataContext = createContext({});

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const {
    data: habitData,
    isLoading: habitIsLoading,
    isFetching: habitIsFetching,
    isError: habitIsError,
  } = useQuery(["habits"], getAll);

  const habitsDataContext = {
    habitData,
    habitIsLoading,
    habitIsFetching,
    habitIsError,
  };

  return (
    <DataContext.Provider value={habitsDataContext}>
      {children}
    </DataContext.Provider>
  );
};
