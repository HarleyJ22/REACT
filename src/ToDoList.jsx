import { useRef } from "react";
import { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  function handleButton() {
    setItems([...items, inputRef.current.value]);
    inputRef.current.value = " ";
  }

  function handleReset() {
    setItems([]);
  }

  function handleRemove(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input ref={inputRef} type="text" />
      <button onClick={handleButton}>Add value</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default ToDoList;
