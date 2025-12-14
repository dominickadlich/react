import { useContext, useState } from "react";
import { places } from "./Data";
import { getImageUrl, type PlaceInterface } from "./utils";
import { ImageContext } from "./Context";


export default function ImageSize() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <ImageContext value={imageSize}>
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
        </ImageContext>
    )
}

function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place 
                id={place.id}
                name={place.name}
                description={place.description}
                imageId={place.imageId} 
            />
        </li>
    );
    return <ul>{listItems}</ul>
}


function Place( place: PlaceInterface ) {
    return (
        <>
            <PlaceImage 
                id={place.id}
                name={place.name}
                description={place.description}
                imageId={place.imageId}            
            />
            <p>
                <b>{place.name}</b>
                {`: ${place.description}`}
            </p>
        </>
    );
}


function PlaceImage(place: PlaceInterface ) {
    const imageSize = useContext(ImageContext)
    return (
        <img 
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    )
}