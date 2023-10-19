export function Container({title, children}) {
    return ( 
        <>
        {title}
        <div style={{border: "2px solid red", backgroundColor: "white", borderRadius: "10px"}}>
            {children}
        </div>
        </>
    )
}