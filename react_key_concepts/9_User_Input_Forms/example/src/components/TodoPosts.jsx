import { useState, useEffect } from "react";

async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todoPosts = await response.json();
    return todoPosts;
}

function TodoPosts({ url }) {
    const [loadedTodos, setLoadedTodos] = useState([]);

    useEffect(() => {
        fetchTodos(url)
        .then((fetchedTodos) => setLoadedTodos(fetchedTodos));
    }, [url]);

    return (
        <>
            <ul>
                {loadedTodos.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoPosts;