import { AppContextProvider } from "./AppContext";
import Navbar from "./Navbar";
import Content from "./Content";
import { DataContextProvider } from "./DataContext";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <div className="container">
        <Navbar />
        <DataContextProvider>
          <Content />
        </DataContextProvider>
      </div>
    </AppContextProvider>
  );
}

export default App;
