export interface ContactInterface {
    id: number,
    name: string,
    email: string
}

export interface ChangedSelectionInterface {
    type: 'changed_selection' | 'edited_message',
    selectedId: number,
    message: string
}

export type DispatchType = (action: ChangedSelectionInterface) => void;

interface ContactListProps {
    contacts: ContactInterface[],
    selectedId: number,
    dispatch: DispatchType,
}

export default function ContactList({contacts, selectedId, dispatch}: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({
                    type: 'changed_selection',
                    selectedId: selectedId,
                    message: '',
                })
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
