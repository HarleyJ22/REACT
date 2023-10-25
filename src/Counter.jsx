import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, addOne, decrementCount, reset }) {
  const [count, setCount] = useState(initialValue);
  function addOne() {
    setCount((count) => count + 1);
  }
  function decrementCount() {
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(initialValue);
  }

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={addOne}>Click on me</button>
      <button onClick={decrementCount}>Decrement the number</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;