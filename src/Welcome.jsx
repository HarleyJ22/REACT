import Age from "./Age";

function Welcome({ name, age }) {
    return (
        <>
          <p> Welcome, {name}!</p>
          <Age age= {22}/>
        </>
    )
}

export default Welcome;
