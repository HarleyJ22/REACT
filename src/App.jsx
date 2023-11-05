import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import { ShowGithubUser } from "./ShowGitubUser";

function App() {
  return (
    <div>
      <nav>
       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/users/HarleyJ22">Miriana Falcone</Link>
        </li>
        </ul> 
      </nav>
        <Routes>
          <Route path="/" element={<Welcome name="Giulia" />} />
          <Route path="counter" element={<Counter initialValue={0} addOne={1} decrementCount={1}/>} />
          <Route path="/users/:username" element={<ShowGithubUser/>}/>
        </Routes>
    </div>
  );
}

export default App;
