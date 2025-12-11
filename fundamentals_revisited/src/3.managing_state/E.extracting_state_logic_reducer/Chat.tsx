import { useState, type ChangeEvent } from 'react';
import type { ContactInterface } from './ContactList';

interface EditedMessageInterface {
    type: 'edited_message',
    message: string
}

type DispatchType = (message: string) => void;

interface ChatProps {
    contact: ContactInterface,
    message: string,
    dispatch: EditedMessageInterface,
}


export default function Chat({contact, message, dispatch}: ChatProps) {
    const [chat, setChat] = useState('');

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
            message: setChat(e.target.value)
          })
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
