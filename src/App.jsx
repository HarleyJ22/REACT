import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import { GithubUsers } from "./GithubUsers";
import { ShowGithubUser } from "./ShowGitubUser";

const NotFound = () => (
  <div>
    <h1>Error 404</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
        <Link to="/users">Github Users</Link> 
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Giulia" />} />
        <Route
          path="counter"
          element={<Counter initialValue={0} addOne={1} decrementCount={1} />}
        />
        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<button>Add a user and select it</button>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="/search/:username" element={<ShowGithubUser/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
