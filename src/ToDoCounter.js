import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import './styles/TodoCounter.css';

function ToDoCounter(props){
    const {totalTodos, completedTodos, loading, searchedTodos, searchValue} = React.useContext(TodoContext);
    
    if (!loading && !searchedTodos.length && !!searchValue)
    {
        return(
        <h2 className='TodoCounter'>No quest matches the search </h2>
            )
    }

    if (!loading && !searchedTodos.length)
    {
        return(
        <h2 className='TodoCounter'> There're not pending quests</h2>
            )
    }





    else if (completedTodos === totalTodos && totalTodos != 0){
        return(
            <h2 className='TodoCounter'> You have completed all the quests</h2>
        )
    }
    else {
        return(
            <h2 className='TodoCounter'> You have completed {completedTodos} of {totalTodos} Quests</h2>
        )
    }

    
}

export {ToDoCounter};

