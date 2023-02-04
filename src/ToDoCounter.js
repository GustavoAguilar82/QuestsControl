import React from 'react';
import './styles/TodoCounter.css';

function ToDoCounter({total, completed}){
    
    return(
        <h2 className='TodoCounter'> Has complentado {completed} de {total} tareas pendientes</h2>
    )
}

export {ToDoCounter};