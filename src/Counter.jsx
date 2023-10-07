import CounterDisplay from "./CounterDisplay";

function Counter({count, addOne }) {
  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={addOne}>Click on me</button>
    </div>
  );
}

export default Counter;
