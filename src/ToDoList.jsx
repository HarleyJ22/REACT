import { useRef } from "react";
import { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  function handleButton() {
    setItems([...items, inputRef.current.value]);
    inputRef.current.value = " ";
  }
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={handleButton}>Add value</button>
    </>
  );
}

export default ToDoList;
