import { AlertClock } from "./AlertClock";
import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello/>
      <Welcome name={<strong>John</strong>} age={22}/>
      <AlertClock/>
    </div>
  );
}
export default App;

