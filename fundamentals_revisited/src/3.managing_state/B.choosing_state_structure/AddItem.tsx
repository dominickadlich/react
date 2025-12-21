import { useState } from "react";

type onAddType = (title: string) => void;

export default function AddItem({ onAddItem }: { onAddItem: onAddType }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
}
