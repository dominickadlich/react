export interface TodoInterface {
    id: number,
    text: string
    completed: boolean
};

let nextId = 0;

export function createTodo(
    text: string, 
    completed: boolean = false
) {
    return {
        id: nextId++,
        text,
        completed,
    };
}


export const initialTodos = [
    createTodo('Get Apples', true),
    createTodo('Get Oranges', true),
    createTodo('Get Carrots')
]