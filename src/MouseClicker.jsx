export function MouseClicker({ name }) {
  function clickButton(event) {
    console.log(event.target.name);
  }
  function imageClick(event) {
    console.log(event.target.src)
  }

  return (
    <div>
      <button name={name} onClick={clickButton}>
        BUTTON
      <img onClick={imageClick} name="img" src="https://e7.pngegg.com/pngimages/510/25/png-clipart-blue-power-button-computer-icons-desktop-blue-power-button-icon-miscellaneous-trademark-thumbnail.png" width={50} height={60}/>
    </button>
    </div>
  );
}

//Il name viene sempre stampato perché l'immagine è collegata ad un gestore eventi
