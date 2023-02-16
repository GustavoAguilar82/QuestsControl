import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import './styles/TodoForm.css'

function TodoForm ()
{
    const [newTodoValue , setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () =>
    {
        setOpenModal(false);
    };
    const onChange = (evento) =>
    {
        setNewTodoValue(evento.target.value);   //donde ocurrio el evento . value
    };

    const onSubmit = (evento) =>
    {
        evento.preventDefault(); //no recarga la pagina tratando de enviarlo a otra parte
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return(

        <form onSubmit={onSubmit}>
            <label>Type the quest you want to add</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder = "Type here" >    
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancel</button>
                <button type='submit'className='TodoForm-button TodoForm-button--add'>Save</button>
            </div>
        </form>
    )

};

export {TodoForm};
