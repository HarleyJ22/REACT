import UseForm from "./UseForm";

const PersonalHook = () => {
  const username = UseForm("");
  const password = UseForm("");

  const handleForm = (event) => {
    event.preventDeafult();
    console.log(username.input);
    console.log(password.input);
  };

  return (
    <form onChange={handleForm}>
      <div>
        <input type="text" value={username} />
        <input type="password" value={password} />
      </div>
      <button type="submit">Click</button>
    </form>
  );
};

export default PersonalHook;
