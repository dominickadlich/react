import { useState } from 'react';


export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  let highlightedItem = letters.find(l =>
    l.id === highlightedId
  );


  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter === highlightedLetter
            }
            onHover={() => {
              setHighlightedId(letter.id)
            }}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
