import { useEffect, useRef } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({count, addOne, decrementCount, reset}) {
    const counterRef = useRef();
    useEffect(()=>{ 
      console.log(counterRef.current.textContent);
    }, [count]);

  return (
    <div>
      <CounterDisplay counterRef={counterRef} count={count} />
      <button onClick={addOne}>Click on me</button>
      <button onClick={decrementCount}>Decrement the number</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
