import { useState } from "react";

const useCounter = ({ initialValue = 0 }) => {
  const [count, setcount] = useState(initialValue);

  function addOne() {
    setcount((count) => count + 1);
  }

  function decrementCount() {
    setcount((count) => count + 1);
  }

  function reset() {
    setcount(initialValue);
  }

  return {
    count: count,
    onIncrement: addOne,
    onDecrement: decrementCount,
    onReset: reset,
  };
};

const HookCounter = ({ initialValue = 0 }) => {
  const { count, onIncrement, onDecrement, onReset } = useCounter(initialValue);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default HookCounter;
