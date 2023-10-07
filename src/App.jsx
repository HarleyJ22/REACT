import Counter from "./Counter";
import { AlertClock } from "./AlertClock";
import { useState } from "react";
import { Clock } from "./Clock";
import Message from "./Message";
import Hello from "./Hello";

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

  return (
    <div>
      <Hello/>
      <Message />
      <AlertClock buttonClick={handleButtonClick} />
      <Clock />
      <Counter
        count={count}
        addOne={addOne}
        decrementCount={decrementCount}
        reset={reset}
      />
    </div>
  );
}

export default App;
