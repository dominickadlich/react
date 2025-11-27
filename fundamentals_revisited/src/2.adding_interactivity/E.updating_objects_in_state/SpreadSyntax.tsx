import { useState } from "react";

export default function Form(){
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    

    function handleFirstNameChange(e: { target: { value: string; }; }) {
        setPerson({
            // firstName: e.target.value,
            // lastName: person.lastName,
            // email: person.email

            ...person,
            firstName: e.target.value
        })
    }

    function handleLastNameChange(e: { target: { value: string; }; }) {
        setPerson({
            ...person,
            lastName: e.target.value,
        })
    }

    function handleEmailChange(e: { target: { value: string; }; }) {
        setPerson({
            ...person,
            email: e.target.value,
        })
    }

    return (
        <>
            <label>
                First Name:
                <input 
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                <input 
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                {person.email}
            </p>
        </>
    )
}

