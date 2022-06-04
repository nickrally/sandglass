import React from "react";
import Habit from "./Habit";
const HabitList = ({ data }) => {
  return (
    <ul className="grid">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <span style={{ textAlign: "center", padding: "4px" }}>
            <Habit habit={item} />
          </span>
          <span style={{ fontSize: "xx-large", textAlign: "center" }}>
            {"\u270F"}
          </span>
          <span style={{ textAlign: "center" }}>{"\u274C"}</span>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default HabitList;
