import { useRef } from "react";
import { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  function handleButton() {
    setItems([...items, inputRef.current.value]);
  }
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={handleButton}>Add value</button>
    </div>
  );
}

export default ToDoList;
