import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" input={text} change={handleChange} />
      <Input label="Second input" input={text} change={handleChange} />
    </>
  );
}

interface InputInterface {
  label: string;
  input: string;
  change: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ label, input, change }: InputInterface) {
  return (
    <label>
      {label} <input value={input} onChange={change} />
    </label>
  );
}
