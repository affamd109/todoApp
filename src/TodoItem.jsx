import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export default function TodoItem({ todo, remove }) {

    const labelId = `checkbox-list-secondary-label-${todo.id}`;

    return (
        <ListItem

            secondaryAction={
                <div className='flex gap-x-3' >

                    <Checkbox
                        edge="end"
                        onChange={() => alert("HIII")}
                        checked={todo.completed}
                        inputProps={{ 'aria-labelledby': labelId }} />

                    <IconButton edge="end" onClick={remove}>
                        <DeleteIcon />
                    </IconButton>


                </div>



            }
            disablePadding >

            <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar n°${todo.id + 1}`}
                        src={`/static/images/avatar/${todo.id + 1}.jpg`}
                    />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}