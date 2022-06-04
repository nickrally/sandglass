import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

const DayPicker = ({ onChange, value }) => {
  const dateFormat = "YYYY-MM-DD";
  const pickerProps = {
    onDayChange: onChange,
    formatDate: formatDate,
    parseDate: parseDate,
    format: dateFormat,
    value: `${formatDate(value, dateFormat)}`,
    placeholder: dateFormat,
    dayPickerProps: {
      showOutsideDays: true,
      todayButton: "Today",
    },
  };

  return (
    <div className="toolbar">
      <DayPickerInput {...pickerProps} />
    </div>
  );
};

export default DayPicker;
