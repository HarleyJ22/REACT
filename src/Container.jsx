export function Container({children}) {
    return (
        <div style={{border: "2px solid red", backgroundColor: "white", borderRadius: "10px"}}>
            {children}
        </div>
    )
}