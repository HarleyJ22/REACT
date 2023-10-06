import { Hello } from "./Hello"
import { Message } from "./Message"
import { Welcome} from "./Welcome"
function App() {
  return (
    <div>
      <Hello />
      <Welcome name={"Giulia"} age={22}/>
    </div>
  )
}
export default App