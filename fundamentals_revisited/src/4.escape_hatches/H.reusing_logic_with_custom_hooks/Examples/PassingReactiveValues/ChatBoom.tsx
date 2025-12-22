import { useState } from "react";
import { useChatRoom } from "./useChatRoom";


export default function ChatBoom({ roomId }: { roomId: string }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl,
        onReceiveMessage(msg) {
            (`New message: ${msg}`)
        }
    });
    

    return (
        <>
            <label>
                Server Url: 
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}