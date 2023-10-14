import { useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ count, addOne, decrementCount, reset }) {
  useEffect(() => {
    console.log(count);
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
