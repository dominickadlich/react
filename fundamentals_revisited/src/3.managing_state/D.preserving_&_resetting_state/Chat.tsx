import { useState } from "react";

interface ContactsInterface {
  id: number;
  name: string;
  email: string;
}

export default function Chat({ contact }: { contact: ContactsInterface }) {
  const [text, setText] = useState("");
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
