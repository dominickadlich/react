import type { ContactInterface, EventHandlerType } from "./EditContact";

interface ContactListProps {
  contacts: ContactInterface[];
  selectedId: number;
  onSelect: EventHandlerType;
}

export default function ContactList({
  contacts,
  selectedId,
  onSelect,
}: ContactListProps) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button onClick={() => onSelect(contact)}>
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
