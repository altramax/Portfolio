import "./App.css";
import LandingPage from "./Component/LandingPage/LandingPage";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
