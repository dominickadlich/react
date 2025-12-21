import { useState } from "react";
import ChatRoomFour from "./ChatRoomFour";
import { ShowNotification } from "./Notifications";

export default function ChatAppBagillion() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState("general");
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use Dark Theme
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={(e) => setIsEncrypted(e.target.checked)}
        />
        Enable Encryption
      </label>
      <label>
        Choose Chat Room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoomFour
        roomId={roomId}
        isEncrypted={isEncrypted}
        onMessage={(msg: string) => {
          ShowNotification(
            `New message: ${msg}`,
            `${isDark ? "dark" : "light"}`,
          );
        }}
      />
    </>
  );
}
