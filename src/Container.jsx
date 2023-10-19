import { useState } from "react"

export function Container({title, children}) {
    const [collapsed, setCollapsed] = useState(false)

    function hanldeToggleCollapse() {
        setCollapsed(t => !t)
    }
    return ( 
        <>
        <div>{title} <button onClick={hanldeToggleCollapse}>Toggle</button></div>
        {collapsed && <div style={{border: "2px solid red", backgroundColor: "white", borderRadius: "10px"}}>
            {children}
        </div> }
        </>
    )
}