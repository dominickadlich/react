import { useState } from "react";

function Multiply() {
    const [variableOne, setVariableOne] = useState(0);
    const [variableTwo, setVariableTwo] = useState(0);

    function handleSetVariableOne(event) {
        setVariableOne(event.target.value);
    };

    function handleSetVariableTwo(event) {
        setVariableTwo(event.target.value);
    };

    const result = Number(variableOne) * Number(variableTwo);

    return (
        <p>
            <input 
                type="number"
                onChange={handleSetVariableOne}
                value={variableOne}
            />
            {' '} * {' '}
            <input 
                type="number"
                onChange={handleSetVariableTwo}
                value={variableTwo}
            />
            {' '} = {' '} {result}
        </p>
    );
};

export default Multiply;