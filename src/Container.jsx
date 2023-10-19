export function Container({title, children}) {
    return ( 
        <>
        <div>{title}</div>
        <div style={{border: "2px solid red", backgroundColor: "white", borderRadius: "10px"}}>
            {children}
        </div> 
        </>
    )
}