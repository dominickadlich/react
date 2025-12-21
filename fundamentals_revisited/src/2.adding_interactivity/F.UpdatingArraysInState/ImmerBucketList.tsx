import { useImmer } from "use-immer";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Luna Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

interface ArtworksInterface {
  id: number;
  title: string;
  seen: boolean;
}

type onToggleFunction = (id: number, checked: boolean) => void;

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: ArtworksInterface[];
  onToggle: onToggleFunction;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function BucketList() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  function handleToggleMyList(id: number, nextSeen: boolean) {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      if (!artwork) return;
      artwork.seen = nextSeen;
    });
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    updateYourList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      if (!artwork) return;
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}
