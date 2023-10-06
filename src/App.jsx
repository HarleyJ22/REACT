
import { useState } from "react";

function App() {
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
//Il parametro deve essere una callback funzione, così da aggiornare i dati in ordine
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is <h2>{count}</h2>
      </button>
    </div>
  );
}

export default App;
