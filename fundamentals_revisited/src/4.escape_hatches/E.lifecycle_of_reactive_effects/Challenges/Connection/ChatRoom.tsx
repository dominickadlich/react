import { useEffect } from "react";
import { CreateEncryptedConnetction, CreateUnecryptedConnection } from "./Chat";

interface ChatRoomProps {
  roomId: string;
  isEncrypted: boolean;
}

export default function ChatRoom({ roomId, isEncrypted }: ChatRoomProps) {
  useEffect(() => {
    const createConnection = isEncrypted
      ? CreateEncryptedConnetction
      : CreateUnecryptedConnection;

    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
