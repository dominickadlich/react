import { useState } from "react";
import "./App.css";

import CrClCalculator from "./components/CrClCalculator.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [creatinine, setCreatinine] = useState(0);
  const [gender, setGender] = useState("");

  function handleSetAge(event) {
    setAge(event.target.value);
  }

  function handleSetWeight(event) {
    setWeight(event.target.value);
  }

  function handleSetCreatinine(event) {
    setCreatinine(event.target.value);
  }

  function handleSetGender(event) {
    setGender(event.target.value);
  }

  let result;

  if (gender === "Male") {
    result = ((140 - Number(age)) * Number(weight)) / (72 * Number(creatinine));
  } else {
    result =
      (((140 - Number(age)) * Number(weight)) / (72 * Number(creatinine))) *
      0.85;
  }

  return (
    <>
      <h1>The KU CrCl Calculator</h1>
      <CrClCalculator
        onAgeChange={handleSetAge}
        onWeightChange={handleSetWeight}
        onCreatinineChange={handleSetCreatinine}
        onGenderChange={handleSetGender}
      />
      <Result calculateCrCl={result} />
    </>
  );
}

export default App;
