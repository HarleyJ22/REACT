import Hello from "./Hello"
import Welcome from "./Welcome"

function App() {
  return (
    <div>
      <Hello/>
      <Welcome name={<strong>Giulia</strong>} age={22}/>
    </div>
  )
}
export default App


//se l'oggetto name diventa un'espressione jsx il file rimane invariato. 
