import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { getAll as getAllHabits } from "../api/habitRequests";
import { getAll as getAllDays } from "../api/dayRequests";

export const DataContext = createContext({});

export const useDataContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const {
    data: habitData,
    isLoading: habitIsLoading,
    isFetching: habitIsFetching,
    isError: habitIsError,
  } = useQuery(["habits"], getAllHabits);

  const {
    data: dayData,
    isLoading: dayIsLoading,
    isFetching: dayIsFetching,
    isError: dayIsError,
  } = useQuery(["days"], getAllDays);

  const habitsDataContextProps = {
    habitData,
    habitIsLoading,
    habitIsFetching,
    habitIsError,
  };

  const daysDataContextProps = {
    dayData,
    dayIsLoading,
    dayIsFetching,
    dayIsError,
  };

  const dataContextProps = {
    habitsDataContextProps,
    daysDataContextProps,
  };

  return (
    <DataContext.Provider value={dataContextProps}>
      {children}
    </DataContext.Provider>
  );
};
