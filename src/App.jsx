import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import { Container } from "postcss";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Welcome name="Giulia" />} />
        </Routes>
     </Container>
    </>
  );
}

export default App;
