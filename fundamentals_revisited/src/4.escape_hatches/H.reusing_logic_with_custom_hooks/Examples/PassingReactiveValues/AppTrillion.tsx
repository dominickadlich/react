import { useState } from "react";
import ChatBoom from "./ChatBoom";

export default function AppBoom() {
    const [roomId, setRoomId] = useState('general');

    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select value={roomId} onChange={e => setRoomId(e.target.value)}>   
                    <option value='general'>general</option>
                    <option value='travel'>travel</option>
                    <option value='music'>music</option>
                </select>
            </label>
            <hr />
            <ChatBoom roomId={roomId}/>
        </>
    )
}