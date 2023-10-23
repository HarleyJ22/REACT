export function MouseClicker({ name }) {
  function clickButton(event) {
    console.log(event.target.name);
  }

  return (
    <div>
      <button name={name} onClick={clickButton}>
        Button
        <img name="img" width={20} height={20} />
      </button>
    </div>
  );
}
