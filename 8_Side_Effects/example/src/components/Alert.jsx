import { useState, useEffect } from "react";

function Alert() {
    const [alertDone, setAlertDone] = useState(false);

    useEffect(() => {
        console.log('Starting Alert Timer!');
        setTimeout(() => {
            console.log('Timer Expired!');
            setAlertDone(true);
        }, 2000);
    }, []);

    return (
        <>
            {!alertDone && <p>Relax, you still have time!</p>}
            {alertDone && <p>Time to get up!</p>}
        </>
    );
}

export default Alert;