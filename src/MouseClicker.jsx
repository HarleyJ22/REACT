export function MouseClicker({name}){
    function clickButton(event) {
        console.log(event.target.name)
    }

return (
    <button name = {name} onClick={clickButton}>Event</button>
)
}