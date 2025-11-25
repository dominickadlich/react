import { useState } from 'react';

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies', seen: false},
    { id: 1, title: 'Luna Landscape', seen: false},
    { id: 2, title: 'Terracotta Army', seen: true}
];

interface ArtworksInterface {
    id: number,
    title: string,
    seen: boolean
}

type onToggleFunction = (id: number, checked: boolean) => void;


function ItemList({
    artworks,
    onToggle
}: {
    artworks: ArtworksInterface[],
    onToggle: onToggleFunction,
}) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input 
                            type='checkbox'
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
        initialList
    );


    function handleToggleMyList(artworkId: number, nextSeen: boolean) {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a new object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        }));
    }


    function handleToggleYourList(artworkId: number, nextSeen: boolean) {
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                // Create a new object with changes
                return { ...artwork, seen: nextSeen };
            } else {
                // No changes
                return artwork;
            }
        }));
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList 
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see:</h2>
            <ItemList 
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </>
    )
}