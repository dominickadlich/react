import { useState } from "react";
function Todos() {
    const [todos, setTodos] = useState(['Learn React', 'Read this book'])
    function handleAddTodo(event) {
        setTodos(curTodos => [...curTodos, event.target.value])
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="New Task"
                /> 
                <button onClick={handleAddTodo}/>
            </form>
            <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul>
        </div>
    );
};

export default Todos;