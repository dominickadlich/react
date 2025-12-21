import { useState } from "react";

function CharCounter() {
  const [userInput, setUserInput] = useState("");
  function handleChange(event) {
    setUserInput(event.target.value);
  }
  const numChars = userInput.length;
  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>Number of Characters: {numChars}</p>
    </>
  );
}

export default CharCounter;
