import React from "react";
const HabitGrid = ({ data, handleUpdate, handleDelete, render }) => {
  return (
    <div className="grid">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <span style={{ textAlign: "center", padding: "4px" }}>
            {render(item)}
          </span>
          <span
            style={{
              fontSize: "xx-large",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleUpdate(item.id)}
          >
            {"\u270F"}
          </span>
          <span
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => handleDelete(item.id)}
          >
            {"\u274C"}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HabitGrid;
