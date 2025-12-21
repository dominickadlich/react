import { useState } from "react";
import ContactList from "./ContactList";
import EditContact from "./EditContact";
import type { ContactInterface } from "./EditContact";

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData: ContactInterface) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return {
          ...c,
          ...updatedData,
        };
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(contacts) => setSelectedId(contacts.id)}
      />
      {selectedContact && (
        <>
          <hr />
          <EditContact savedContact={selectedContact} onSave={handleSave} />
        </>
      )}
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Cathy", email: "cathy@mail.com" },
];
