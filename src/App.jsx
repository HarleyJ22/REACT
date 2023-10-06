import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Giulia</strong>} />
      <AlertClock />
    </div>
  );
}
export default App;
