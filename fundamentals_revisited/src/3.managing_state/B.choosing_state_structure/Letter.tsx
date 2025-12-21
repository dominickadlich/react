interface LetterInterface {
  id: number;
  subject: string;
  isStarred: boolean;
}

type onToggleStarType = (id: number) => void;

interface LetterProps {
  letter: LetterInterface;
  isHighlighted: boolean;
  onHover: () => void;
  onToggleStar: onToggleStarType;
}

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: LetterProps) {
  return (
    <li
      className={isHighlighted ? "highlighted" : ""}
      onFocus={() => {
        onHover();
      }}
      onPointerMove={() => {
        onHover();
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter.id);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}
