import { useState } from "react";

function Add() {
  const [variableOne, setVariableOne] = useState(0);
  const [variableTwo, setVariableTwo] = useState(0);

  function updateVariableOne(event) {
    setVariableOne(event.target.value);
  }

  function updateVariableTwo(event) {
    setVariableTwo(event.target.value);
  }

  const result = Number(variableOne) + Number(variableTwo);

  return (
    <>
      <p>
        <input type="number" onChange={updateVariableOne} value={variableOne} />{" "}
        +{" "}
        <input type="number" onChange={updateVariableTwo} value={variableTwo} />{" "}
        = {result}
      </p>
    </>
  );
}

export default Add;
