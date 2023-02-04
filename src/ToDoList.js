import React from "react";
import './styles/TodoList.css'

function ToDoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { ToDoList};