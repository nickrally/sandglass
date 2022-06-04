import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAll, saveItem, deleteItem } from "../../../api/requests";
import Form from "../../../components/Form";
import HabitList from "./HabitList";
import "./HabitsPage.css";

const HabitsPage = () => {
  const [habit, setHabit] = useState({});
  const { data, isLoading, isFetching, isError } = useQuery(["habits"], getAll);
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncSave } = useMutation(saveItem);
  const { mutateAsync: mutateAsyncDelete } = useMutation(deleteItem);

  const saveHabit = async (value) => {
    setHabit({ ...habit, description: value });
    await mutateAsyncSave({ description: value });
    queryClient.invalidateQueries(["habits"]);
  };

  return (
    <div className="wrapper">
      <div className="header">{"\u23F0"} Habits</div>
      <div className="sidenav">
        <Form write={saveHabit} />
      </div>
      <div className="main">
        <ul>
          {isLoading ? (
            "Loading..."
          ) : isFetching ? (
            "Fetching..."
          ) : isError ? (
            "Error!"
          ) : data ? (
            <HabitList data={data} />
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default HabitsPage;
