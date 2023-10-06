
function Welcome({ name, age }) {
    return (
        <>
          <p> Welcome, {name === "John" ? name : "Il nome non corrisponde"}</p>
        {18< age < 65 ? <Age age ={ age }/> : "L'età non rientra nei parametri richiesti" }
        </>
    )
}

export default Welcome;
