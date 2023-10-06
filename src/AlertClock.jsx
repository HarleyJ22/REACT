export function AlertClock() {
    function handleButtonClick() {
        const now = new Date()

        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

    return (
        <div>
            <button onClick= {handleButtonClick}>What time is it?</button>
        </div>
    )
}