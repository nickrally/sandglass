import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { saveItem, deleteItem } from "../../../api/habitRequests";
import Form from "../../../components/common/Form";
import Grid from "../../../components/common/Grid";
import { useDataContext } from "../../../components/DataContext";
import Habit from "./Habit";

import "./HabitsPage.css";

const emptyHabit = { description: "" };

const HabitsPage = () => {
  const [habit, setHabit] = useState(emptyHabit);
  const [formErrors, setFormErrors] = useState({});

  const { habitsDataContextProps } = useDataContext();
  const { habitData, habitIsLoading, habitIsFetching, habitIsError } =
    habitsDataContextProps;
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncSave } = useMutation(saveItem);
  const { mutateAsync: mutateAsyncDelete } = useMutation(deleteItem);

  const handleUpdate = async (id) => {
    const habit = await habitData?.find((item) => item.id === id);
    setHabit({ ...habit });
  };

  const handleDelete = async (id) => {
    await mutateAsyncDelete(id);
    queryClient.invalidateQueries(["habits"]);
  };

  const isFormValid = () => {
    const { description } = habit;
    const errors = {};
    if (!description) errors.description = "Description is required!";
    setFormErrors(errors);
    return Object.keys(errors).length;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    await mutateAsyncSave(habit);
    queryClient.invalidateQueries(["habits"]);
    setHabit({ ...emptyHabit });
  };

  const renderHabit = (item) => {
    return (
      <span style={{ textAlign: "center", padding: "4px" }}>
        <Habit habit={item} />
      </span>
    );
  };

  return (
    <div className="wrapper">
      <div className="header">{"\u23F0"} Habits</div>
      <div className="sidenav">
        <Form
          item={habit}
          handleChange={handleChange}
          handleSave={handleSave}
          errors={formErrors}
        />
      </div>
      <div className="main">
        <ul>
          {habitIsLoading ? (
            "Loading..."
          ) : habitIsFetching ? (
            "Fetching..."
          ) : habitIsError ? (
            "Error!"
          ) : habitData ? (
            <Grid
              data={habitData}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              render={renderHabit}
              gridStyle="grid-three-col"
            />
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default HabitsPage;
