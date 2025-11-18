import Panel from './Panel.js';
import GetImageURL from '../E.passing_props/Utils.js';

interface Person {
    person: string;
}


export default function Profile({ person }: Person ) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  )
}

function Header({ person }: Person ) {
  return <h1>{person}</h1>;
}

function Avatar({ person }: Person ) {
  return (
    <img
      className="avatar"
      src={GetImageURL(person)}
      alt={person}
      width={50}
      height={50}
    />
  );
}
