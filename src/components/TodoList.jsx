import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';
import Todoform from './Todoform';
import { v4 as uuid } from "uuid";
import EmptyTodo from './EmptyTodo';


const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) {
        return [];
    } else {
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

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);  //Whenever todos is changing then useEffect function runs

    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter(t => t.id !== id);
        })
    }

    const toggleTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }

            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevTodo => {
            return [...prevTodo, { id: uuid(), text: text, completed: false }]
        })
    }

    const handleClear = () => {
        localStorage.clear();
        setTodos([]);
    }


    return (
        <List
            className="rounded-xl h-120 min-w-[26rem] overflow-scroll w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto"
            dense
            sx={{ bgcolor: 'background.paper' }}  >

            <div className='m-4 flex '  >
                <img src="../public/todo2.png"
                    alt="empty"
                    className="w-15 h-15 " />

                    <h1 className='text-4xl mx-3 mt-4  ' >To-Do List</h1>

                    
            </div>



            <Todoform addTodo={addTodo} />

            <button onClick={handleClear}

                className="my-4 px-4 py-2 m-4 bg-red-500 text-white rounded hover:bg-red-600" >
                Clear All Todos! </button>



            {todos.length === 0 ? (
                <EmptyTodo />
            ) : (
                todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        remove={() => removeTodo(todo.id)}
                        toggle={() => toggleTodo(todo.id)}
                    />
                ))
            )}




        </List>



    )
}


