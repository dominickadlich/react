import { useState } from "react";

let nextId = 0;

interface ArtistInterface {
    name: string,
    id: number
}

export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState<ArtistInterface[]>([]);

    return (
        <>
            <h1>Inspiring Artists</h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists(
                    [
                        { id: nextId++, name: name },
                        ...artists,
                    ]
                )
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}