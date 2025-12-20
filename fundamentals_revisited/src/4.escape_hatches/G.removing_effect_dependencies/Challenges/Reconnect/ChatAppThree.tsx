import { useState } from 'react';
import ChatRoom from './ChatRoom';

export default function ChatAppThree() {
    const [isDark, setIsDark] = useState(false);
    const [roomId, setRoomId] = useState('general');
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');


    return (
        <div className={isDark ? 'dark' : 'light'}>
            <button onClick={() => setIsDark(!isDark)}>
                Toggle Theme
            </button>
            <label>
                Server URL:{' '}
                <input 
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
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
                <hr />
                <ChatRoom 
                    roomId={roomId}
                    serverUrl={serverUrl}
                />
            </label>
        </div>
    )
}