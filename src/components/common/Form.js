import React from "react";
const Form = ({ item, handleChange, handleSave }) => {
  return (
    <form onSubmit={handleSave}>
      <h4>{item.id ? "Edit" : "New "}</h4>
      <label htmlFor="descriptiont">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={item.description}
        onChange={(e) => handleChange(e)}
      />
      <input type="submit" value="Save" />
    </form>
  );
};
export default Form;
