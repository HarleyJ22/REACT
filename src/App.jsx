import Counter from "./Counter"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  function addOne() {
    setCount ((count) => count + 1)
  }
  function decrementCount() {
    setCount((count) => count - 1)
  }
  function reset() {
    setCount(0)
  }

  return  (
  <Counter count={count} addOne={addOne} decrementCount={decrementCount} reset={reset}/>
  )
}

export default App