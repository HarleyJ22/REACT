import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>
);
