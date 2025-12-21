import { people } from "./Data";
import { getImageUrl } from "./Utils";

export default function List() {
  const chemists = people.filter((chemist) => chemist.profession === "chemist");

  const notChemists = people.filter(
    (scientist) => scientist.profession !== "chemist",
  );

  const chemistList = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person.imageId)} alt={person.name} />
      <p>
        <b>{person.name}:</b> {person.profession} Known for{" "}
        {person.accomplishment}
      </p>
    </li>
  ));

  const notChemistList = notChemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person.imageId)} alt={person.name} />
      <p>
        <b>{person.name}:</b> {person.profession}
        Known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{chemistList}</ul>
      <ul>{notChemistList}</ul>
    </article>
  );
}
