import {Age} from "./Age"

function Welcome({ name, age }) {
    return (
        <>
          <p> Welcome, {name}!</p>
        {age > 18 ? <Age age ={ age }/> : "Età inferiore a 18" }
        </>
    )
}

export default Welcome;
