import { useState } from 'react'
import './App.css'

import Math from './components/Math'
import Result from './components/Result'


function App() {
  const [variableOne, setVariableOne] = useState(0)
  const [variableTwo, setVariableTwo] = useState(0)
  const [operator, setOperator] = useState('add')

  function handleSetVariableOne(event) {
      setVariableOne(event.target.value);
  };

  function handleSetVariableTwo(event) {
      setVariableTwo(event.target.value);
  };

  function handleSetOperator(event) {
    setOperator(event.target.value);
  };

  let result;

  if (operator === 'add') {
    result = Number(variableOne) + Number(variableTwo)
  } else if (operator === 'subtract') {
    result = Number(variableOne) - Number(variableTwo)
  } else if (operator === 'divide') {
    result = Number(variableOne) / Number(variableTwo)
  } else {
    result = Number(variableOne) * Number(variableTwo)
  }

  return (
    <>
      <Math 
        onVariableOneChange={handleSetVariableOne}
        onVariableTwoChange={handleSetVariableTwo}
        onOperatorChange={handleSetOperator}
      />
      <Result calculateResult={result}/>
    </>
  )
}

export default App
