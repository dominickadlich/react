import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        alert( walk ? 'Stop is next' : 'Walk is next')
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to { walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color : walk ? 'green' : 'red'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}
