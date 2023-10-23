export function MouseClicker() {
  function clickButton(event) {
    console.log(event.currentTarget.name);
  }
  function imageClick(event) {
    console.log(event.target.src);
    event.stopPropagation();
  }

  return (
    <div>
      <button name="one" onClick={clickButton}>
        BUTTON
        <img
          onClick={imageClick}
          name="img"
          src="https://e7.pngegg.com/pngimages/510/25/png-clipart-blue-power-button-computer-icons-desktop-blue-power-button-icon-miscellaneous-trademark-thumbnail.png"
          width={50}
          height={60}
        />
      </button>
    </div>
  );
}
