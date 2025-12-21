import { useState } from "react";

function Repeater() {
  const [userInput, setUserInput] = useState("");
  function handleChange(event) {
    setUserInput(event.target.value);
  }
  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>You entered: {userInput}</p>
    </>
  );
}

export default Repeater;
