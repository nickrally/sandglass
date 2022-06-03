import { useAppContext } from "./AppContext";
import Days from "../pages/Days/components/Days";
import Habits from "../pages/Habits/components/Habits";
import Home from "../pages/Home/components/Home";
const Content = () => {
  const { activeTab } = useAppContext();

  const renderContent = () => {
    switch (activeTab) {
      case "Habits":
        return <Habits />;
      case "Days":
        return <Days />;
      default:
        return <Home />;
    }
  };
  return renderContent();
};

export default Content;
