import { useAppContext } from "./AppContext";
import DaysPage from "../pages/Days/components/DaysPage";
import HabitsPage from "../pages/Habits/components/HabitsPage";
import HomePage from "../pages/Home/components/HomePage";
const Content = () => {
  const { activeTab } = useAppContext();

  const renderContent = () => {
    switch (activeTab) {
      case "Habits":
        return <HabitsPage />;
      case "Days":
        return <DaysPage />;
      default:
        return <HomePage />;
    }
  };
  return renderContent();
};

export default Content;
