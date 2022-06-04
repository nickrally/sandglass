import { useState } from "react";
import moment from "moment";
import DayPicker from "./DayPicker";
import "./DayPicker.css";

const today = new Date().toISOString().split("T")[0];

const DayForm = () => {
  const [date, setDate] = useState(today);
  const dayPickerProps = {
    onChange: (date) => {
      setDate(moment(date).toISOString());
    },
    value: moment(date).toISOString(),
  };
  return (
    <div>
      <DayPicker {...dayPickerProps} />
    </div>
  );
};
export default DayForm;
