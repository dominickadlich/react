import { useState } from 'react';

type AddTodoProp = { onAddTodo: (title: string) => void; } 

export default function AddTodo({ onAddTodo }: AddTodoProp ) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        onAddTodo(title);
        setTitle('');
      }}>Add</button>
    </>
  )
}
