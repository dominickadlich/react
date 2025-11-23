import { useState } from "react";

export default function Form(){
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleChange(e: { target: { name: string; value: string; }; }) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <label>
                First Name:
                <input
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input 
                    name="email"
                    value={person.email}
                    onChange={handleChange}
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

