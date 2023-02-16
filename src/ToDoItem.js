import React from "react";
import './styles/TodoItem.css';
import {BsCheckCircle} from "react-icons/bs"
import {RiDeleteBack2Line} from "react-icons/ri"



function ToDoItem(props){
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}><BsCheckCircle title="Complete Quest"/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" 
                onClick={props.onDelete}> <RiDeleteBack2Line size="1em" title="Delete Quest"/>
            </span>
        </li>
    );
}

export { ToDoItem };