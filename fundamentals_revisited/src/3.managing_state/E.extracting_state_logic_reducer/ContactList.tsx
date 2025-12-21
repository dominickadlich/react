import type { DispatchType } from "./MessageReducer";

export interface ContactInterface {
  id: number;
  name: string;
  email: string;
}

interface ContactListProps {
  contacts: ContactInterface[];
  selectedId: number;
  dispatch: DispatchType;
}

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
