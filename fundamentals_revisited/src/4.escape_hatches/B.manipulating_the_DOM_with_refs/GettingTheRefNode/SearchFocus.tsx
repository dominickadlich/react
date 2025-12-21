import { useRef } from "react";

export default function SearchFocus() {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input placeholder="Searching for something?" ref={searchRef} />
      <button onClick={() => searchRef.current?.focus()}>Search</button>
    </>
  );
}
