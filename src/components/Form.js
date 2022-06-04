import React, { useState } from "react";
const Form = ({ write }) => {
  const [value, setValue] = useState("");
  const handleSave = (e) => {
    e.preventDefault();
    console.log("handleSave");
    write(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSave}>
      <h4>New good habit</h4>
      <label htmlFor="newHabit">Description:</label>
      <input
        type="text"
        id="newHabit"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
};
export default Form;
