import React from "react";
import "./Grid.css";
const Grid = ({ data, render, gridStyle, handleUpdate, handleDelete }) => {
  return (
    <div className={gridStyle}>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <span style={{ textAlign: "center", padding: "4px" }}>
            {render(item)}
          </span>
          {handleUpdate && (
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
          )}
          {handleDelete && (
            <span
              style={{ textAlign: "center", cursor: "pointer" }}
              onClick={() => handleDelete(item.id)}
            >
              {"\u274C"}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
