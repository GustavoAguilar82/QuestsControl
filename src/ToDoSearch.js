import React from "react";
import './styles/TodoSearch.css'

function ToDoSearch({searchValue, setSearchValue}){
    const onSearchValueChange = (evento) => {  
        console.log(evento.target.value);
        setSearchValue(evento.target.value);
    }
    return(
        <input className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}/>
    );
}

export {ToDoSearch};