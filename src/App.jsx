//import { Hello } from "./Hello";
//import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";

function App() {
    function handleButtonClick() {
        const now = new Date();
        alert(`The current time is ${now.toLocaleTimeString()}`);
    }

  return (
    <div>
      {/* <Hello /> */}
      {/* <Welcome name={<strong>Giulia</strong>} /> */}
      <AlertClock buttonClick={handleButtonClick}/>
    </div>
  );
}

export default App;
