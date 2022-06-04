import { useState } from "react";
import moment from "moment";
import DayPicker from "./DayPicker";
import "./DayPicker.css";

const DayForm = () => {
  const [date, setDate] = useState("");
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
