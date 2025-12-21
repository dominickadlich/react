import { useRef, useState } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  let ref = useRef("");

  function handleSend() {
    setTimeout(() => {
      alert(`Sending: ${text}`);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          ref.current = e.target.value;
        }}
      />

      <button onClick={handleSend}>Send</button>
    </>
  );
}
