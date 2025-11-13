interface PropProfileTypes {
    person: {
        name: string,
        imageId: string
    },
    size: number
}

function PropAvatar({ person, size }: PropProfileTypes) {
    return (
        <>
            <img 
                className="avatar"
                src={`https://i.imgur.com/${person.imageId}.jpg`}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    );
}


const people = [
  { name: 'Lin Lanying', imageId: '1bX5QH6' },
  { name: 'Different Name', imageId: 'Different ID' }
];


export default function PropProfile() {
    return (
        people.map((person) =>
            <PropAvatar 
                key={person.name}
                person={person}
                size={100}
            />
        )
    )
}