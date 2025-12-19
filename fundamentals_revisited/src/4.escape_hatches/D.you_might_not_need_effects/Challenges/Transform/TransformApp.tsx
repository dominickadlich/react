import { useState } from 'react';
import { initialTodos, createTodo } from './Todo';
import type { TodoInterface } from './Todo';


export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);

    const activeTodos = todos.filter(t => !t.completed)
    
    const visibleTodos = showActive ? activeTodos : todos

    const footer = <footer>{activeTodos.length} todos left </footer>

    return (
        <>
            <label>
                <input 
                    type='checkbox'
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show Active Todos
            </label>
            <NewTodo 
                onAdd={(newTodo: TodoInterface) => setTodos([
                    ...todos,
                    newTodo
                ])}
            />
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            {footer}
        </>
    );
}

type OnAddType = (todo: TodoInterface) => void;

function NewTodo({ onAdd }: { onAdd: OnAddType}) {
    const [text, setText] = useState('');

    function handleAddClick() {
        setText('');
        onAdd(createTodo(text))
    }

    return (
        <>
            <input 
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleAddClick}>
                Add
            </button>
        </>
    );
}