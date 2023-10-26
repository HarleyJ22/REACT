import { useState } from "react";

const UseForm = (initialValue) => {
  const [input, setInput] = useState(initialValue);

  const handleInput = (event) => {
    setInput(event.target.input);
  };

  return {
    input,
    onInput: handleInput,
  };
};

export default UseForm;
