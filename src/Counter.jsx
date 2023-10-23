import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, addOne, decrementCount, reset }) {
  const [count, setCount] = useState(initialValue);
  const changeRef = useRef(null);

  function addOne() {
    setCount((count) => count + 1);
    changeRef.current = "up";
  }
  function decrementCount() {
    setCount((count) => count - 1);
    changeRef.current = "down";
  }
  function reset() {
    setCount(initialValue);
    changeRef.current = "null";
  }

  const prevDirectionRef = useRef(null);

  useEffect(() => {
    if (changeRef.current !== prevDirectionRef.current) {
      console.log(`Direction: ${changeRef.current}`);
      prevDirectionRef.current = changeRef.current;
    }
    console.log(`Counter: ${count}`);
  }, [count]);

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
