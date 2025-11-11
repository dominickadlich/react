import { useEffect, useState } from "react"

function AlertTwo() {
    const [alertMsg, setAlertMsg] = useState('Expired!');

    function handleChangeAlertMsg(event) {
        setAlertMsg(event.target.value);
    }

    useEffect(() => {
        function setAlert() {
            return setTimeout(() => {
                console.log(alertMsg);
            }, 2000);
        }

        const timer = setAlert();

        return () => {
            clearTimeout(timer);
        };
    }, [alertMsg])

    return <input type="text" onChange={handleChangeAlertMsg} />;
}

export default AlertTwo;