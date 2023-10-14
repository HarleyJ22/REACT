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
            {items.map((id, item) =>(
            <li key= {id}>{item}</li>
        ))}
        </ul>
        <imput ref={inputRef} type="text"/>
    <button onClick={handleButton}>Add value</button>
        </div>
    )
}

export default ToDoList