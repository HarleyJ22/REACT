import Hello from "./Hello"
import Welcome from "./Welcome"

function App() {
  return (
    <div>
      <Hello/>
      <Welcome name={<strong>Giulia</strong>} age={17}/>
    </div>
  )
}
export default App


