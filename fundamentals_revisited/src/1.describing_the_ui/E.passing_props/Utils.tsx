export default function GetImageURL(person: string, size: string | number = 's') {
    return (
        `https://i.imgur.com/${person}.jpg`
    )
}