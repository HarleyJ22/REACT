import { useState } from "react";

 function useData() {
    return { password: "", username: "", remember: false};
  }

function Login({ onLogin }) {
 
  const [data, setData] = useState(useData());

  function handleDataChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }
  function handleLogin() {
    onLogin(data);
  }

  function handleReset() {
    setData(useData());
  }
  return (
    <div>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleDataChange}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleDataChange}
      />
      <input
        type="checkbox"
        name="remember"
        checked={data.remember}
        onChange={handleDataChange}
      />
      <button disabled={!data.username || !data.password} onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Login;
