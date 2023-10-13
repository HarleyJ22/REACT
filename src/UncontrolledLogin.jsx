function UncontrolledLogin() {
  function hanldeFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
    username: formData.get('username'),
    password:formData.get('password'),
    checkbox: formData.get('remember') === "on" ? true : false,
   };
    console.log(data);
  }

  return (
    <form action="#" onSubmit={hanldeFormSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button>Login</button>
      <button>Reset</button>
    </form>
  );
}

export default UncontrolledLogin

//L'API standard è l'API DOM, esistono API non standard ma sono sconsigliate per via dell'incompatibilità trai browser.

//I vantaggi del FormData sono ad esempio:
//la sua semplicità d'utilizzo, si può fare direttamente con HTML,
//supporta il caricamento di file dagli utenti se il modulo lo permette,
//gestisce la codifica dei dati inviati al server rendendoli compatibili
//Svantaggi: è progettato per l'invio di dati con richieste HTTP,
//non è sempre compatibile con vecchie versioni di Explorer ad esempio.