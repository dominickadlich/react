import { useState } from "react";
import { initialLetters } from "./Data";
import Letter from "./Letter";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [selectedId, setSelectedId] = useState(0);

  function handleStar(id: number) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      }),
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === selectedId}
            onHover={() => {
              setSelectedId(letter.id);
            }}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
