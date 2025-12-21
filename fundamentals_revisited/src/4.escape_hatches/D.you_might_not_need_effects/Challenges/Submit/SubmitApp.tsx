import { useEffect, useState } from "react";

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!showForm) {
      sendMessage(message);
    }
  }, [showForm, message]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setShowForm(false);
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for useing our services!</h1>
        <button
          onClick={() => {
            setMessage("");
            setShowForm(true);
          }}
        >
          Open Chat
        </button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={message === ""}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message: string) {
  console.log(`Sending message: ${message}`);
}
