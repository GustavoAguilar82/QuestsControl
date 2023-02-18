import React from 'react';
import { ToDoCounter } from './ToDoCounter.js';
import { TodoContext } from './TodoContext/TodoContext.js'; 
import { ToDoSearch } from "./ToDoSearch.js";
import { ToDoList } from "./ToDoList.js";
import { ToDoItem } from "./ToDoItem.js";
import { CreateTodoButtom } from "./CreateToDoButtom.js";
import { Modal } from "./Modal.js";
import { TodoForm } from './TodoForm.js';
import { Loading } from './Loading.js';
import { Empty } from './Empty.js';
import { AllCompleted } from './AllCompleted.js';
import { LogoButtom } from './LogoButtom.js';

function AppUI(){
                    //vienen del provider, me traje solo lo que iba a usar del value 
    const { error,    //esto es una funcion anonima que recibe parametros, un objeto
    loading, 
    searchedTodos,
    searchValue, 
    togglecompleteTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    allCompleted,
    setAllCompleted
    } = React.useContext(TodoContext);
        

    return(
     <React.Fragment>

        <LogoButtom />
        <ToDoCounter />

        <ToDoList>
            {error && <p>Oops, there was an error. Try to reload the page</p>}

            {loading && (
                <Loading>
                </Loading>
            )}  
            {(!loading && !searchedTodos.length) && (
                <Empty>  
                </Empty>
            )}

            {(!loading && !!searchedTodos.length || !!searchValue) && (
                <ToDoSearch />
            )}     


            {searchedTodos.map(todo =>(
                <ToDoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
                onComplete={() => togglecompleteTodo(todo.text)} 
                onDelete={() => deleteTodo(todo.text)} 
                />))}
        </ToDoList>

        {!!openModal  &&(
                <Modal>
                    <TodoForm/>
                </Modal>
        )}

        {!!allCompleted &&(
                <Modal>
                    <AllCompleted/>
                </Modal>
        )}

        <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal}/>      
     </React.Fragment>
    );
}
export{AppUI} 