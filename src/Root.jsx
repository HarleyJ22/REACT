import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";

export const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  );
};
