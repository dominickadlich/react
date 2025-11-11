import { useState } from "react";

function RateTracker() {
    const [rate, setRate] = useState('5');

    function handleSetRate(event) {
        setRate(event.target.value);
    };
}

export default RateTracker;