function Welcome({ name }) {
    return (
        <p> Welcome, {name}!</p>
    )
}

export default Welcome;

//se al name non viene passato alcun valore la funzione non funzionerà, quindi si può impostare un valore predefinito
