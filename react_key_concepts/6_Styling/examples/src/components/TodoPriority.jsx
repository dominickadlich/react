import { useState } from "react";

function TodoPriority() {
  const [priority, setPriority] = useState("low");

  function handleSetPriority(event) {
    setPriority(event.target.value);
  }

  return (
    <>
      <p className={priority}>Chosen Priority: {priority}</p>
      <select onChange={handleSetPriority}>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
    </>
  );
}

export default TodoPriority;
