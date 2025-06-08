import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Todoform({addTodo}){
    const [text , setText] = useState("");

    const handleChange = (evt) =>{
        setText(evt.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(text);
        setText("");

    }

    
    return (

            <ListItem>  
                <form onSubmit={handleSubmit} >  
            <TextField id="outlined-basic" label="Add todo " variant="outlined" 
            value={text} onChange={handleChange} />



             </form>

            </ListItem>


    )
}