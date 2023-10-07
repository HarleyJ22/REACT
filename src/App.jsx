import Counter from "./Counter"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  function addOne() {
    setCount ((count) => count + 1)
  }

  return  (
  <Counter count={count} addOne={addOne}/>
  )
}

export default App