import { useOptimistic } from "react";

import { SaveTodoTwo, getTodos } from "./SaveTodoTwo";
import { useState } from "react";

import SubmitButton from "./SubmitButton";

function WithOptimism() {
    const loadedTodos = getTodos(); // initial fetch
    const [todos, setTodos] = useState(loadedTodos);

    const [optimisticTodos, addOptimisticTodo] = useOptimistic(
        todos,
        (currentState, optimisticValue) => {
            return [
                ...currentState,
                { ...optimisticValue, id: 'temp' }
            ];
        }
    );

    async function storeTodoAction(formData) {
        const todo = { title: formData.get('title') };
        addOptimisticTodo(todo);
        const updatedTodos = await SaveTodoTwo(todo);
        setTodos((prevTodos) => [...prevTodos, updatedTodos]);
    }

    return (
        <div className="border">
            <form action={storeTodoAction}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </p>
                <p className="actions">
                    <SubmitButton />
                </p>
            </form>
            <div id="todos">
                <h2>My Todos</h2>
                {optimisticTodos.length === 0 && <p>No todos found.</p>}
                {optimisticTodos.length > 0 && (
                    <ul>
                        {optimisticTodos.map((todo) => (
                            <li key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default WithOptimism;