import { useEffect } from "react";

function Error(props) {
    useEffect(
        () => {
            // performing same error logging
            // in a real app, a HTTP request might be sent to some analytics API
            console.log('An error occurred!')
            console.log(props.message);
        },[props]);

    return <p>{props.message}</p>
}

export default Error;