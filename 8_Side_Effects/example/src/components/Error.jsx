import { useEffect } from "react";

function Error(props) {
    const { message } = props; // Destructure to extract required properties

    useEffect(
        () => {
            // performing same error logging
            // in a real app, a HTTP request might be sent to some analytics API
            console.log('An error occurred!')
            console.log(message);
            // [props] // Don't use the entire props object
        },[message]);

    return <p>{message}</p>
}

export default Error;