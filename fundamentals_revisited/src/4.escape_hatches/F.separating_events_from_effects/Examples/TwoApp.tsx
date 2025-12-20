import { useEffect, useEffectEvent, useState } from "react";
import { createConnectionTwo } from "./TwoChat";
import { showNotification } from "./Notification";

let serverUrl = 'https://localhost:1234'

function ChatRoom({ 
    roomId,
    theme
 }: {
    roomId: string,
    theme: string,
 }) {
    const onConnected = useEffectEvent(() => {
        showNotification('Connected!', theme);
    });

    useEffect(() => {
        const connection = createConnectionTwo(serverUrl, roomId);
        connection.on('connected', () => {
            onConnected();
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>
 }


 export default function ChatAppTwo() {
    const [roomId, setRoomId] = useState('general');
    const [isDark, setIsDark] = useState(false)

    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value='general'>general</option>
                    <option value='travel'>travel</option>
                    <option value='music'>music</option>
                </select>
            </label>
            <label>
                <input 
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Use Dark Theme
            </label>
            <hr />
            <ChatRoom 
                roomId={roomId}
                theme={isDark ? 'dark' : 'light'}
            />
        </>
    )
 }
