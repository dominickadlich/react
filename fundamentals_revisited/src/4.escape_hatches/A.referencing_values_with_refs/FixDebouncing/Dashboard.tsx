import { useRef } from "react";

type OnClickType = () => void;

interface DebouncedButtonProps {
  onClick: OnClickType;
  children: string;
}

function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
  const TimeoutID = useRef<number | undefined>(undefined);

  return (
    <button
      onClick={() => {
        clearTimeout(TimeoutID.current);
        TimeoutID.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton onClick={() => alert("Spaceship Launched!")}>
        Launch Spaceship!
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Boiling Soup!")}>
        Boil Soup
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("Lullaby Sung!")}>
        Sing Lullaby
      </DebouncedButton>
    </>
  );
}
