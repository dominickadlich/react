let todos = [];

export async function SaveTodoTwo(todo) {
  // dummy function that simulates a slow backend which manages todos
  await new Promise((resolve) => setTimeout(resolve, 3000)); // delay
  const newTodo = { ...todo, id: new Date().getTime() };
  todos = [...todos, newTodo];
  return newTodo;
}

export function getTodos() {
  return todos;
}
