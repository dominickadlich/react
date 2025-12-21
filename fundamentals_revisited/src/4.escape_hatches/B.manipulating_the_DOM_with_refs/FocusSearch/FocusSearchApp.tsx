import { useRef } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

export default function FocusSearchApp() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <nav>
        <SearchButton
          onClick={() => {
            inputRef.current?.focus();
          }}
        />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
