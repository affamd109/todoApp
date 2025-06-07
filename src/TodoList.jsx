import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useState } from 'react';


export default function TodoList() {
    const initialTodos = [
        { id: 1, text: "walk the dog", completed: false },
        { id: 2, text: "walk the cat", completed: false },
        { id: 3, text: "walk the fish", completed: true },
        { id: 4, text: "walk the lion", completed: false }
    ];

    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) =>{
        setTodos(prevTodo =>{
            return prevTodo.filter(t => t.id !== id);
        })
    }


    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => ( //If u are using () then no need to write return , but if u are using {} , then u have to write return
                <TodoItem todo={todo} key={todo.id} remove={() => removeTodo(todo.id)} />
               
            ))}



        </List>


    )
}


