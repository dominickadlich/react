import { useEffect, useState } from "react";
import { createConnection } from "./ChatTrillion";
import { showNotification } from "./Notification";


export default function ChatBoom({ roomId }: { roomId: string }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.on('message', (msg) => {
            showNotification(`New message: ${msg}`)
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl])

    return (
        <>
            <label>
                Server Url: 
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    )
}