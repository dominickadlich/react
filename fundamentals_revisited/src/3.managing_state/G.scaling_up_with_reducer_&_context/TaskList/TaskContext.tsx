import React, { createContext, useReducer } from "react";
import type { TaskInterface } from "./TaskList";
import { initialTasks } from "./Data";

type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TaskInterface }
  | { type: "deleted"; id: number };

type Action = (action: TaskAction) => void;

export const TasksContext = createContext<TaskInterface[] | null>(null);
export const TasksDispatchContext = createContext<Action | null>(null);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}

export default function tasksReducer(
  tasks: TaskInterface[],
  action: TaskAction,
): TaskInterface[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action}`);
    }
  }
}
