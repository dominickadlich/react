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

export default function Letter({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
}: LetterProps) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isHighlighted}
          onChange={() => {
            onToggleStar(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
