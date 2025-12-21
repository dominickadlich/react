import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  let nextId = 3;

  if (!dispatch) {
    throw new Error("Task must be used within TasksProvider");
  }

  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
