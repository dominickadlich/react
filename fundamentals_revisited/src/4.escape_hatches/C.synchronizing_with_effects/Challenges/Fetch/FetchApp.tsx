import { useEffect, useState } from "react";
import { FetchBio } from "./api";

export default function FetchApp() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState<string | null>(null)


    useEffect(() => {
        let ignore = false;

        FetchBio(person).then(result => {
            if (!ignore) {
                setBio(result);
            }
        });

        return () => {
            ignore = true;
        }
    }, [person]);

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice"></option>
                <option value="Bob"></option>
                <option value="Taylor"></option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}
