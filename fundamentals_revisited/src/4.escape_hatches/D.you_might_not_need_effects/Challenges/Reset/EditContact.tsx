import { useState} from 'react';

export interface ContactInterface {
    id: number,
    name: string, 
    email: string
}

export type EventHandlerType = (contact: ContactInterface) => void;

interface EditContactProps {
    savedContact: ContactInterface,
    onSave: EventHandlerType
}


export default function EditContact(props: EditContactProps) {
    return (
        <EditForm 
            {...props}
            key={props.savedContact.id}
        />
    )
}

function EditForm({ 
    savedContact,
    onSave
}: EditContactProps) {
    const [name, setName] = useState(savedContact.name);
    const [email, setEmail] = useState(savedContact.email);

    return (
        <section>
            <label>
                Name:{' '}
                <input 
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Email:{' '}
                <input 
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <button
                onClick={() => {
                    const updatedData = {
                        ...savedContact,
                        name:name,
                        email: email,
                    };
                    onSave(updatedData);
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                    setName(savedContact.name),
                    setEmail(savedContact.email,
                    )
                }}
            >
                Reset
            </button>
        </section>
    )
}