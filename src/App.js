import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainView from "./views/MainView";
import ResearchView from "./views/ResearchView";
import Header from "./components/Header";
import NotFound from "./components/404NotFound";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<MainView />} />
        <Route path="/research/*" element={<ResearchView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
