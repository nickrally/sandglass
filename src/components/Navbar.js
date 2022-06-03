import { useAppContext } from "./AppContext";

const Navbar = () => {
  const tabs = ["Habits", "Days", "Home"];
  const { activeTab, updateActiveTab } = useAppContext();
  return (
    <ul className="nav">
      {tabs.map((tab, i) => (
        <li
          className={tab === activeTab ? "active" : ""}
          key={i}
          onClick={() => updateActiveTab(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
