import { useState } from "react";
import ContactTwo from "./ContactTwo.js";
import EditContact from "./EditContact.js";

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  if (!selectedContact) {
    return <div> Contact not found </div>;
  }

  function handleSave(updatedData: {
    id: number;
    name: string;
    email: string;
  }) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactTwo
        contacts={contacts}
        selectedId={selectedId}
        onSelect={() => setSelectedId(selectedId)}
      />
      <hr />
      <EditContact
        key={selectedContact?.id}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
