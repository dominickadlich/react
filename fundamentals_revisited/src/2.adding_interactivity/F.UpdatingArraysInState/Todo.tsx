import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(nextTitle: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: nextTitle,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
