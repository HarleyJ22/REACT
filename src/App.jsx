import { Hello } from "./Hello"
import { Message } from "./Message"
import { Welcome} from "./Welcome"
function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Giulia</strong>}/>
    </div>
  )
}
export default App


//se l'oggetto name diventa un'espressione jsx il file rimane invariato. 
