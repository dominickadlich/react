interface ContactsInterface {
    id: number,
    name: string,
    email: string
}

type onSelectType = (contact: ContactsInterface) => void;

interface ContactListProps {
    selectedContact: ContactsInterface,
    contacts: ContactsInterface[],
    onSelect: onSelectType,
}


export default function ContactList({
  contacts,
  onSelect
}: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => {
              onSelect(contact);
            }}>
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
