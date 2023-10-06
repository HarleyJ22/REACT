import {Age} from "./Age"

function Welcome({ name, age }) {
    return (
        <>
          <p> Welcome, {name}!</p>
        {18< age < 65 ? <Age age ={ age }/> : "L'età non rientra nei parametri richiesti" }
        </>
    )
}

export default Welcome;
