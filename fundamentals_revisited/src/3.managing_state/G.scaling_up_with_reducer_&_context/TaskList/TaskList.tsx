import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./TaskContext";

export interface TaskInterface {
  id: number;
  text: string;
  done: boolean;
}

export default function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

interface TaskProps {
  task: TaskInterface;
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;

  if (!dispatch) {
    throw new Error("Task must be used within TasksProvider");
  }

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
