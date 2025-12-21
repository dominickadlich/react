import { useEffect, useState } from "react";
import { createConnection, sendMessage } from "./Chat";

const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  function handleSendClick() {
    sendMessage(message);
  }

  return (
    <>
      <h1>Welcome to the {roomId}</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
}
