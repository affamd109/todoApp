import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';
import Todoform from './Todoform';
import {v4 as uuid} from "uuid";


const getInitialData = () =>{
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data){
        return [];
    }else{
        return data;
    }
}



export default function TodoList() {

    const initialTodos = [
        { id: uuid(), text: "walk the dog", completed: false },
        { id: uuid(), text: "walk the cat", completed: false },
        { id: uuid(), text: "walk the fish", completed: true },
        { id: uuid(), text: "walk the lion", completed: false }
    ];

    
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() =>{
        localStorage.setItem("todos" , JSON.stringify(todos))
    } , [todos] );  //Whenever todos is changing then useEffect function runs

    const removeTodo = (id) =>{
        setTodos(prevTodo =>{
            return prevTodo.filter(t => t.id !== id);
        })
    }

    const toggleTodo = (id) =>{
        setTodos((prevTodo) =>{
            return prevTodo.map(todo =>{
                if(todo.id === id){
                    return {...todo , completed : !todo.completed}
                }else{
                    return todo;
                }

            })
        })
    }

    const addTodo = (text) =>{
        setTodos(prevTodo =>{
            return [...prevTodo , { id : uuid() , text:text , completed:false } ]
        })
    }


    return (
        <List className='rounded-xl h-120 overflow-scroll' dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Todoform addTodo={addTodo} />


            {todos.map((todo) => ( //If u are using () then no need to write return , but if u are using {} , then u have to write return

                <TodoItem todo={todo} key={todo.id} remove={() => removeTodo(todo.id)}
                toggle={() => toggleTodo(todo.id)} />
               
            ))}



        </List>


    )
}


