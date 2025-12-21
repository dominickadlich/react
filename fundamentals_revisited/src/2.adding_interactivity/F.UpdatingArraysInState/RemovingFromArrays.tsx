import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Misha Mansoor" },
  { id: 1, name: "Jake Bowen" },
  { id: 0, name: "Mark Holcomb" },
];

export default function ListTwo() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring Artists:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
