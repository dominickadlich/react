let nextId = 0;
let calls = 0;

export interface TodoInterface {
    id: number,
    text: string
    completed: boolean
};

export function getVisibleTodos(
    todos: TodoInterface[],
    showActive: boolean
) {
    console.log(`getVisibleTodos() was called ${++calls} times`);
    const activeTodos = todos.filter(t => !t.completed)
    const visibleTodos = showActive ? activeTodos : todos;
    return visibleTodos;
}


export function createTodo(
    text: string,
    completed: boolean = false
) {
    return {
        id: nextId++,
        text,
        completed
    };
}


export const initialTodos = [
    createTodo('Get Apples', true),
    createTodo('Get Oranges', true),
    createTodo('Get Carrots')
]