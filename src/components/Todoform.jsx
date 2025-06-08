import {
    ListItem,
    TextField,
    InputAdornment,
    IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Todoform({ addTodo }) {
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value)
    }
        ;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        addTodo(text);
        setText("");
    };

    return (
        <ListItem>
            <form className="w-full" onSubmit={handleSubmit}>
                <TextField
                    label="Add To-Do"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '16px',
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton type="submit" edge="end" color="primary">
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
        </ListItem>
    );
}
