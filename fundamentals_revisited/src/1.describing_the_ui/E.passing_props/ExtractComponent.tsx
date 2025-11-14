import GetImageURL from "./Utils";

interface ScientistProps {
    person: {
        name: string,
        imageId: string,
    },
    size: number,
    profession: string,
    awards: string,
    discovered: string,
}

export function NotableScientist({ person, size, profession, awards, discovered }: ScientistProps ) {
    return (
        <section className="profile">
            <h2>{person.name}</h2>
            <img 
                className="avatar"
                src={GetImageURL(person.imageId)}
                alt={person.name}
                width={size}
                height={size}
            />
            <ul>
                <li>
                    <b>Profession: </b> 
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.trim().split(",").length} </b> 
                    {awards}
                </li>
                <li>
                    <b>Discovered:</b>
                    {discovered}
                </li>
            </ul>
        </section>
    )
}


export default function Gallery() {
    const scientists = [
    { 
        person: { 
            name: "Maria Skłodowska-Curie", 
            imageId: "szV5sdG" 
        },
        size: 70,
        profession: "physicist and chemist",
        awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
        discovered: "polonium (chemical element)"
      },
    { 
        person: { 
            name: "Katsuko Saruhashi", 
            imageId: "YfeOqp2" 
        },
        size: 70,
        profession: "physicist and chemist",
        awards: "Miyake Prize for geochemistry, Tanaka Prize",
        discovered: "a method for measuring carbon dioxide in seawater"
      },
]

  return (
    <>
      <h1>Notable Scientists</h1>

        {scientists.map((scientist) => 
            <NotableScientist
                key={scientist.person.name}
                person={scientist.person}
                size={scientist.size}
                profession={scientist.profession}
                awards={scientist.awards}
                discovered={scientist.discovered}
            />
        )}
    </>
  );
}
