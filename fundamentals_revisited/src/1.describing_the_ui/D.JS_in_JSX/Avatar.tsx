export default function Avatar() {
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const alt = "Gregaraio Y. Zara"

    return (
        <img 
            className="avatar"
            src={avatar}
            alt={alt}
        />
    )
}