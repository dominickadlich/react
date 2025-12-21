import { useState } from "react";
import { initialLetters } from "./Data.js";
import Letter from "./DisapperaingLetters.js";

interface LetterInterface {
  id: number;
  subject: string;
  isStarred: boolean;
}

export default function MultipleMailClient() {
  const [letters, setLetters] = useState(initialLetters);

  // TODO: allow multiple selection
  const selectedCount = letters.filter((letter) => letter.isStarred).length;

  function handleToggle(toggledLetter: LetterInterface) {
    // TODO: allow multiple selection
    setLetters(
      letters.map((letter) => {
        if (letter.id === toggledLetter.id) {
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
            isStarred={
              // TODO: allow multiple selection
              letter.isStarred
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
