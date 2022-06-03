import { AppContextProvider } from "./AppContext";
import Navbar from "./Navbar";
import Content from "./Content";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <div className="container">
        <Navbar />
        <Content />
      </div>
    </AppContextProvider>
  );
}

export default App;
