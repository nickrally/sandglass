import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAll, saveItem, deleteItem } from "../../../api/requests";
import Form from "../../../components/Form";
import HabitGrid from "./HabitGrid";
import "./HabitsPage.css";

const emptyHabit = { description: "" };
const HabitsPage = () => {
  const [habit, setHabit] = useState(emptyHabit);
  const [formErrors, setFormErrors] = useState({});
  const { data, isLoading, isFetching, isError } = useQuery(["habits"], getAll);
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncSave } = useMutation(saveItem);
  const { mutateAsync: mutateAsyncDelete } = useMutation(deleteItem);

  const handleUpdate = async (id) => {
    const habit = await data?.find((item) => item.id === id);
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
          {isLoading ? (
            "Loading..."
          ) : isFetching ? (
            "Fetching..."
          ) : isError ? (
            "Error!"
          ) : data ? (
            <HabitGrid
              data={data}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
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
