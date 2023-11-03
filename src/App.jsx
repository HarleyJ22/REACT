import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Welcome name="Giulia" />} />
          <Route path="counter" element={<Counter initialValue={0} addOne={1} decrementCount={1}/>} />
        </Routes>
    </div>
  );
}

export default App;
