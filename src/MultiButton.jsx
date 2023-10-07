export function MultiButton ({nameOne, nameTwo, nameThree}) {
    function handleButtonClick(event) {
        console.log(event.target.name);
    }

    return (
        <div>
            <button onClick={handleButtonClick} name={nameOne}>One</button>
            <button onClick={handleButtonClick} name={nameTwo}>Two</button>
            <button onClick={handleButtonClick} name={nameThree}>Three</button>
        </div>
    )
}