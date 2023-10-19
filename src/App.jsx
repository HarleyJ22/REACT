import "./App.css";
import Counter from "./Counter";
import { AlertClock } from "./AlertClock";
import Clock from "./Clock";
import { useState } from "react";
import Message from "./Message";
import Hello from "./Hello";
import Welcome from "./Welcome";
import { MouseClicker } from "./MouseClicker";
import { MultiButton } from "./MultiButton";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
import Age from "./Age";
import FocusableInput from "./FocusableInput";
import Colors from "./Colors";
import ToDoList from "./ToDoList";
import { Container } from "./Container";

function App() {
  function handleButtonClick() {
    const now = new Date();
    alert(`The current time is ${now.toLocaleTimeString()}`);
  }
  const [count, setCount] = useState(0);
  function addOne() {
    setCount((count) => count + 1);
  }
  function decrementCount() {
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(0);
  }
  function handleLogin(data) {
    console.log(data);
  }

  return (
    <Container title="MY CONTAINER">
      <Hello />
      <Welcome name="Giulia" />
      <Age age={22} />
      <Message />
      <AlertClock buttonClick={handleButtonClick} />
      <Clock />
      <Counter
        count={count}
        addOne={addOne}
        decrementCount={decrementCount}
        reset={reset}
      />
      <MouseClicker name="one" />
      <MultiButton nameOne="one" nameTwo="two" nameThree="three" />
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <FocusableInput />
      <Colors
        items={[
          {
            id: 0,
            name: "Jane",
          },
          {
            id: 1,
            name: "Elizabeth",
          },
          {
            id: 2,
            name: "Emma",
          },
          {
            id: 3,
            name: "Emily",
          },
        ]}
      />
      <ToDoList />
    </Container>
  );
}

export default App;
