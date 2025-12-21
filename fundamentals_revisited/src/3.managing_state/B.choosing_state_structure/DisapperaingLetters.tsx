interface LetterInterface {
  id: number;
  subject: string;
  isStarred: boolean;
}

type OnToggleType = (letter: LetterInterface) => void;

export default function Letter({
  letter,
  onToggle,
  isStarred,
}: {
  letter: LetterInterface;
  onToggle: OnToggleType;
  isStarred: boolean;
}) {
  return (
    <li className={isStarred ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isStarred}
          onChange={() => {
            onToggle(letter);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
