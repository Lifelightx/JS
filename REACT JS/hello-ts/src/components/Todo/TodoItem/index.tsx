import React  from "react";
import './style.css'
import { title } from "process";
interface TodoItemProps{
    title: string;
}
const TodoItem: React.FC<TodoItemProps> =(props) => {

    return (
        <>
        
        <li>{title}</li>

        </>
    )
}

export default TodoItem;