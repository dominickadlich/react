import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      Turn {isOn ? "Off" : "On"}
    </button>
  );
}
