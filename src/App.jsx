function hello ({name}) {
  return <h1>Hello, {name}</h1>
}

//Se la variabile name non viene passata alla funzione il suo valore sarà undefined
//se la name variabile contiene un'espressione JSX viene renderizzato direttamente nel risultato finale