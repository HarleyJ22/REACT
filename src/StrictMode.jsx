import { useEffect, useRef } from "react";

function StrictMode() {
    const mountedRef = useRef(false);
    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true;
            console.log("Mounting for the first time");
        } else {
            console.log("Mounting again for debug puroposes");
        } 
        
    }, []);
}

export default StrictMode