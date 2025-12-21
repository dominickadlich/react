import { useState } from "react";
import { foods, filterItems } from "./data";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar onChange={handleChange} query={query} />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

interface SearchBarProps {
  query: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

interface ItemsInterface {
  id: number;
  name: string;
  description: string;
}

function List({ items }: { items: ItemsInterface[] }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
