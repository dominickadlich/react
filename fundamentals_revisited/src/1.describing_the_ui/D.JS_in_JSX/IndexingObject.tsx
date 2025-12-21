const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backGroundColor: "black",
    color: "violet",
  },
  src: "https://i.imgur.com/7vQD0fPs.jpg",
  alt: "Gregorio Y. Zara",
};

export default function IndexingObjects() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img src={person.src} alt={person.alt} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
