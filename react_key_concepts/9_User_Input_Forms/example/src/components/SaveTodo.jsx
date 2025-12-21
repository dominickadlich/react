async function SaveTodo(todo) {
  // dummy function that simulates a slow backend which manages todos
  await new Promise((resolve) => setTimeout(resolve, 3000)); // delay
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const fetchedTodo = await response.json();
  console.log(fetchedTodo);
}

export default SaveTodo;
