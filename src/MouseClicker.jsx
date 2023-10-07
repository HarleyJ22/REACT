export function MouseClicker({ name }) {
  function clickButton(event) {
    console.log(event.target.name);
  }

  return (
    <div>
      <button name={name} onClick={clickButton}>
        Event
      </button>
      <img name="img" width={20} height={20}/>
    </div>
  );
}
