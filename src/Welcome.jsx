import Age from "./Age";

function Welcome({ name, age }) {
  return (
    <>
      <p> Welcome, {name === "John" ? name : "Il nome non corrisponde"}</p>
      {age > 18 && age < 65 && <Age age={age} />}
    </>
  );
}

export default Welcome;
