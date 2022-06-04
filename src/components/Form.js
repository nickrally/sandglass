import React from "react";
const Form = ({ habit, handleChange, handleSave }) => {
  return (
    <form onSubmit={handleSave}>
      <h4>New good habit</h4>
      <label htmlFor="descriptiont">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={habit.description}
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Save" />
    </form>
  );
};
export default Form;
