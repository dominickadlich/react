import { useState } from "react";

interface ContactInterface {
  id: number;
  name: string;
  email: string;
}

interface ContactProp {
  contact: ContactInterface;
}

export default function Contact({ contact }: ContactProp) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
}
