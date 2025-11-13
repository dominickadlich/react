import GetImageURL from "./Utils"


interface PersonInterface {
    person: {
        name: string,
        imageId: string
    },
    size: number
}


function AvatarProp({ person, size }: PersonInterface) {
    return (
        <img 
            src={GetImageURL(person.imageId)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}


const people = [
  { name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' },
  { name: 'Aklilu Lemma', imageId: 'OKS67lh' },
  { name: 'Lin Lanying', imageId: '1bX5QH6' }
];

export default function MapAvatar() {
    
    return (
        people.map((person) => 
            <AvatarProp 
                key={person.name}
                person={person}
                size={200}
            />
        )
    )
}