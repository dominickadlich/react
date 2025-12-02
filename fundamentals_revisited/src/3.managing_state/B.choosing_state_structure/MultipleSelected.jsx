import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(null);
  const [isStarred, setIsStarred] = useState(false);

  // TODO: allow multiple selection
  const selectedCount = letters
  .filter(l => l.isStarred)
  .length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setIsStarred(!isStarred)
    // setSelectedId(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
            //   letter.id === selectedId
            isStarred
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
