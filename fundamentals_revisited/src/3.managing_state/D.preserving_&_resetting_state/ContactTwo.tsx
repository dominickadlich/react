interface ContactInterface {
  id: number;
  name: string;
  email: string;
}

type onSelectType = (contact: ContactInterface) => void;

interface ContactTwoProps {
  contacts: ContactInterface[];
  selectedId: number;
  onSelect: onSelectType;
}

export default function ContactTwo({
  contacts,
  selectedId,
  onSelect,
}: ContactTwoProps) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
