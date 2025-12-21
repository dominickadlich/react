import { useEffect } from "react";
import { CreateConnection } from "./Chat";

interface OptionsInterface {
  serverUrl: string;
  roomId: string;
}

export default function ChatRoom({ serverUrl, roomId }: OptionsInterface) {
  useEffect(() => {
    const connection = CreateConnection({
      serverUrl: serverUrl,
      roomId: roomId,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
