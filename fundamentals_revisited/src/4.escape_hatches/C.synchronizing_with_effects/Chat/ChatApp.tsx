import { createConnection } from "./Chat";
import { useEffect } from "react";


export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => {
            connection.disconnect();
        }
    }, [])
    return <h1>Welcome to the chat!</h1>
}