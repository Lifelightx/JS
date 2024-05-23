import React from "react";
import TodoItem from "./TodoItem";
import './style.css'
const Todo: React.FC = () =>{
    return(
        <div className="todoContainer">
            <ol>
                <TodoItem title="Eat" />
                <TodoItem  title="Sleep"/>
                <TodoItem  title="Code"/>
                <TodoItem  title="Repeat"/>
                
            </ol>
        </div>
    )
}

export default Todo;