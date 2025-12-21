import { useState, type SetStateAction } from "react";

export default function StuckInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hello, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
