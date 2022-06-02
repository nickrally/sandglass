import React, { useState } from "react";
import Days from "./pages/Days/components/Days";
import Habits from "./pages/Habits/components/Habits";
import Home from "./pages/Home/components/Home";

import "./App.css";
function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const pages = ["Habits", "Days", "Home"];

  return (
    <div className="tabs">
      <ul className="nav">
        {pages.map((page, i) => (
          <li
            key={i}
            className={activeTab === page ? "active" : ""}
            onClick={() => setActiveTab(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      <div className="content">
        {(function () {
          switch (activeTab) {
            case "Habits":
              return <Habits />;
            case "Days":
              return <Days />;
            default:
              return <Home />;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
