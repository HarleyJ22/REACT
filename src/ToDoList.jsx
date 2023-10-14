import { useRef } from "react";
import { useState } from "react";
import classes from "./toDoList.module.scss"

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
          <li className={classes.index} key={index}>
            {item}
            <button className={classes.button} onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input className={classes.input}ref={inputRef} type="text" />
      <button className={classes.button} onClick={handleButton}>Add value</button>
      <button className={classes.button} onClick={handleReset}>Reset</button>
    </>
  );
}

export default ToDoList;
