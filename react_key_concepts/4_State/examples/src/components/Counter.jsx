import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  return (
    <>
      <button onClick={handleIncrement}>Count is {counter} </button>
    </>
  );
}

export default Counter;
