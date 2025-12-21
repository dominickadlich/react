import { useRef } from "react";

interface MyInputProp {
  ref: React.Ref<HTMLInputElement>;
}

function MyInput({ ref }: MyInputProp) {
  return <input ref={ref} />;
}

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current === null) {
      throw new Error("inputRef.current is null");
    }
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the Input</button>
    </>
  );
}
