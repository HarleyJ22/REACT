//import { Hello } from "./Hello";
//import { Welcome } from "./Welcome";
//import { AlertClock } from "./AlertClock";
import { useState } from "react";

function App() {
  // function handleButtonClick() {
  //     const now = new Date();
  //     alert(`The current time is ${now.toLocaleTimeString()}`);
  // }
  const [count, setCount] = useState(0);
  if (count == 0) {
    return (
      <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </>
    );
  }

  return (
    <div>
      {/* <Hello /> */}
      {/* <Welcome name={<strong>Giulia</strong>} /> */}
      {/* <AlertClock buttonClick={handleButtonClick}/> */}
      <button onClick={() => setCount((count) => count + 1)}>
        count is <h2>{count}</h2>
      </button>
    </div>
  );
}

export default App;
