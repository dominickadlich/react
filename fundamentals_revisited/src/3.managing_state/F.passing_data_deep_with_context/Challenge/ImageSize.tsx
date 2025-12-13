import { useContext, useState } from "react";
import { places } from "./Data";
import { getImageUrl } from "./utils";
import { ImageContext } from "./Context";


export default function ImageSize() {
    const [isLarge, setIsLarge] = useState(false);
    // const imageSize = isLarge ? 150 : 100;
    return (
        <>
            <label>
                <input 
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use Large Images
            </label>
            <hr />
            <List />
        </>
    )
}

function List() {
    const imageSize = useContext(ImageContext)
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place 
                place={place}
                imageSize={imageSize}
            />
        </li>
    );
    return <ul>{listItems}</ul>
}


function Place({ place }) {
    return (
        <ImageContext value={}>
            <PlaceImage 
                place={place}
            />
            <p>
                <b>{place.name}</b>
                {`: ${place.description}`}
            </p>
        </ImageContext>
    );
}


function PlaceImage({ place }) {
    return (
        <ImageContext value={}>
            <img 
                src={getImageUrl(place)}
                alt={place.name}
                width={imageSize}
                height={imageSize}
            />
        </ImageContext>
    )
}