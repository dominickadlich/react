import { useState } from "react";

function ColoredText() {
    const [enteredColor, setEnteredColor] = useState('');

    function handleUpdateTextColor(event) {
        setEnteredColor(event.target.value);
    };
    return (
        <>
            <input type="text" placeholder="Enter a color!" onChange={handleUpdateTextColor} />
            <p style={{color: enteredColor}}>This text's color changes dynamically!</p>
        </>
    );
};

export default ColoredText;