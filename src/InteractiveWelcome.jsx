import { useState } from "react";
import Welcome from "./Welcome";

export function InteractiveWelcome() {
    const [welcome, setWelcome] = useState('')
    function handleInputChange(event) {
        const value = event.target.value;
        setWelcome(value)
    }

    return (
        <div> 
            <input name="welcome" type="text" value={welcome} onChange={handleInputChange} />
            <Welcome name={welcome}/>
         </div>
    )
}