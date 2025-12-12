import type { ContactInterface } from './ContactList';
import type { DispatchType } from './MessageReducer';

interface ChatProps {
    contact: ContactInterface,
    message: string,
    dispatch: DispatchType,
}

export default function Chat({contact, message, dispatch}: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          dispatch({
            type: 'edited_message',
            // (Read the input value from e.target.value)
            message: e.target.value,
            contactId: contact.id
          })
        }}
      />
      <br />
      <button
        onClick={() => {
            alert(`Sending ${message} to ${contact.name}`)
            dispatch({
            type: 'edited_message',
            message: '',
            contactId: contact.id
        });
      }}>
        Send to {contact.email}
    </button>
    </section>
  );
}
