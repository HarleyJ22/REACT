import {Age} from "./Age"

function Welcome({ name, age }) {
    return (
        <>
          <p> Welcome, {name}!</p>
        {age ? <Age age ={ age }/> : "Età non dichiarata" }
        </>
    )
}

export default Welcome;
