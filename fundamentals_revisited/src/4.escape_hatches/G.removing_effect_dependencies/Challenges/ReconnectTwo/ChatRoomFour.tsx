import { useEffect, useEffectEvent } from "react";
import {
  CreateEncryptedConnection,
  CreateUnencryptedConnection,
} from "./ChatBagillion";

interface ChatRoomFourProps {
  roomId: string;
  isEncrypted: boolean;
  onMessage: (msg: string) => void;
}

export default function ChatRoomFour({
  roomId,
  isEncrypted,
  onMessage,
}: ChatRoomFourProps) {
  const onReceiveMessage = useEffectEvent(onMessage);

  useEffect(() => {
    function CreateConnection() {
      const options = {
        serverUrl: "https://localhost:1234",
        roomId: roomId,
      };
      if (isEncrypted) {
        return CreateEncryptedConnection(options);
      } else {
        return CreateUnencryptedConnection(options);
      }
    }
    const connection = CreateConnection();
    connection.on("message", (msg: string) => onReceiveMessage(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to {roomId} room!</h1>;
}
