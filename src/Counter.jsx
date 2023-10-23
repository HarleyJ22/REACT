import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function addOne() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <button onClick={addOne}>Click on me</button>
      <h2>The counter is {count}</h2>
    </>
  );
}

export default Counter;