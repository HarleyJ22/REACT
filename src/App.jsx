function hello ({name}) {
  return <h1>Hello, {name}</h1>
}

//Se la variabile name non viene passata alla funzione il suo valore sarà undefined

//Se la variabile name constiene un'espressione JSX invece di una stringa, il contenuto verrà renderizzato nel risultato finale