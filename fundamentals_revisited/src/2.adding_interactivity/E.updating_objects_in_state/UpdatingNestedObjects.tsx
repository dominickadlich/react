import { useState } from "react";

export default function Tosin() {
    const [person, setPerson] = useState({
        name: 'Tosin Abasi',
        artwork: {
            title: 'Animals As Leaders',
            city: 'D.C.',
            image:"https://i.imgur.com/kQihcb1.jpeg"
        }
    })

    function handleNameChange(e: { target: { value: string; }; }) {
        setPerson({
            ...person,
            name: e.target.value
        })
    }

    function handleTitleChange(e: { target: { value: string; }; }) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
    }

    function handleCityChange(e: { target: { value: string; }; }) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
    }

    return (
        <>
            <div>
                <label>
                    Name: 
                    <input 
                        value={person.name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Band:
                    <input 
                        value={person.artwork.title}
                        onChange={handleTitleChange}
                    />
                </label>
                <label>
                    City:
                    <input 
                        value={person.artwork.city}
                        onChange={handleCityChange}
                    />
                </label>
            </div>
            <img 
                src={person.artwork.image}
                height={300}
                width={300}
            />
            <h1>{person.name}</h1>
            <h2>{person.artwork.title}</h2>
            <h2>{person.artwork.city}</h2>
        </>
    )
}