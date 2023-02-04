import React from 'react';
import { ToDoCounter } from './ToDoCounter.js';
import { ToDoSearch } from "./ToDoSearch.js";
import { ToDoList } from "./ToDoList.js";
import { ToDoItem } from "./ToDoItem.js";
import { CreateTodoButtom } from "./CreateToDoButtom.js";

function AppUI({
    loading,
    error,    
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    togglecompleteTodo,
    deleteTodo
}){
    return(
        <React.Fragment>
        <ToDoCounter 
          total={totalTodos}
          completed = {completedTodos}
        />    
        <ToDoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}/> 
        <ToDoList>
          {error && <p>Hubo un error, trata de recargar la página</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer misión</p>}  

          {searchedTodos.map(todo =>(
            <ToDoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => togglecompleteTodo(todo.text)} 
              onDelete={() => deleteTodo(todo.text)} 
              />))}
        </ToDoList>
        <CreateTodoButtom />      
     </React.Fragment>
    );
}
export{AppUI} 