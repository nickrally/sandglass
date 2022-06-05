import { useState } from "react";
import moment from "moment";

import DayPicker from "./DayPicker";
import HabitPicker from "./HabitPicker";

import { useMutation, useQueryClient } from "react-query";
import { saveItem } from "../../../api/dayRequests";

import "./DayPicker.css";

const today = new Date().toISOString().split("T")[0];

const DayForm = () => {
  const [date, setDate] = useState(today);
  const [habit, setHabit] = useState("");

  const { mutateAsync } = useMutation(saveItem);
  const queryClient = useQueryClient();

  const dayPickerProps = {
    onChange: (date) => {
      setDate(moment(date).toISOString());
    },
    value: moment(date).toISOString(),
  };

  const handleSave = () => {
    const day = {
      date,
      habit,
    };
    mutateAsync(day);
    queryClient.invalidateQueries(["days"]);
  };

  return (
    <div>
      <DayPicker {...dayPickerProps} />
      <HabitPicker handleChange={(e) => setHabit(e.target.value)} />
      <button onClick={handleSave} disabled={!habit}>
        Save
      </button>
    </div>
  );
};
export default DayForm;
