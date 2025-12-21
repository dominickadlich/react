import { useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("<Parent /> is called.");

  const [counter, setCounter] = useState(0);

  function handleInCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div id="parent">
      <p>A component, nested into App, containing another component (Child).</p>
      <p>Counter: {counter}</p>
      <button onClick={handleInCounter}>Increment</button>
      <Child />
    </div>
  );
}

export default Parent;
