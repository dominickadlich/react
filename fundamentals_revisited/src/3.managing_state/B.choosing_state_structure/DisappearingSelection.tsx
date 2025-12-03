import { useState } from 'react';
import { initialLetters } from './Data';
import Letter from './Letter';

interface LetterInterface {
    id: number,
    title: string,
    isStarred: boolean
}

type onToggleStarType = (letter: LetterInterface) => void;

interface LetterProps {
    letter: LetterInterface,
    isHighlighted: boolean,
    onHover: () => void,
    onToggleStar: onToggleStarType
}

export default function MailClient({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
}: LetterProps) {
  const [letters, setLetters] = useState(initialLetters);
  const [selectedId, setSelectedId] = useState(0);

  const selectedLetter = letters.find(letter => 
    letter.id === selectedId
  )

  function handleStar(starred: LetterInterface) {
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
                letter.id === selectedId
            }
            onHover={() => {
                setSelectedId(letter.id)
            }}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
