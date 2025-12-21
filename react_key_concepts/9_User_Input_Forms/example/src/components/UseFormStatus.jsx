import { useFormStatus } from "react-dom";

import SaveTodo from "./SaveTodo";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Saving" : "Store"} Todo</button>
  );
}

function UseFormStatus() {
  async function storeTodoAction(formData) {
    const todo = { title: formData.get("title") };
    await SaveTodo(todo);
  }

  return (
    <form action={storeTodoAction}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p className="actions">
        <SubmitButton />
      </p>
    </form>
  );
}

export default UseFormStatus;
