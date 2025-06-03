import { useState } from "react";

function TaskActionServer() {
    const [error, setError] = useState(null);

    async function storeTodoAction(formData) {
        const todoTitle = formData.get('title');
        if (!todoTitle || todoTitle.trim() === '') {
            setError('Title is required!'); //state update BEFORE delay
        }
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log('Submission done!')
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos',
            {
                method: 'POST',
                body: JSON.stringify({ title: todoTitle }),
                headers: {
                    'Content-type': 'applications/json; charset=UTF-8',
                },
            }
        );
        const todo = await response.json();
        console.log(todo);
    }

    return (
        <form action={storeTodoAction}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="title" id="title" name="title" />
            </p>
            {error && <p className="errors">{error}</p>}
            <p className="actions">
                <button>Add Task</button>
            </p>
        </form>
    );
}

export default TaskActionServer;