import React from "react";
import './styles/TodoSearch.css'
import { TodoContext } from './TodoContext/TodoContext';

function ToDoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (evento) => {   
        setSearchValue(evento.target.value);//donde ocurrio el evento . value
    }
    return(
        <input className="TodoSearch" 
            title="Search a existing quest"
            placeholder="Search"
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
}

export {ToDoSearch};