import Home from "./Home";
import Music from "./Music";
import Tracks from "./Tracks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import NavigationBar from "./components/navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tracks" element={<Tracks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
