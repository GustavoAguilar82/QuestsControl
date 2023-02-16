import React from "react";
import "./styles/AllCompleted.css"
import { TodoContext } from './TodoContext/TodoContext';
import { CreateTodoButtom } from "./CreateToDoButtom";


function AllCompleted() {

    const {setAllCompleted} = React.useContext(TodoContext);
    const {totalTodos, completedTodos, loading, searchedTodos, allCompleted, setOpenModal} = React.useContext(TodoContext);

    const onCanceled = () =>
    {
        setAllCompleted(false);
    };

    const onSubmit = (evento) =>
    {
        evento.preventDefault(); //no recarga la pagina tratando de enviarlo a otra parte
        CreateTodoButtom(setOpenModal(prevState => !prevState));
        setAllCompleted(false);
    };
    return(

        <form onSubmit={onSubmit}>
            <label>Congratulations! You have completed all the quests</label>
            <label>You deserve a break!</label>

        <div className="body">    
            <div className="container">
            <div className="plate"></div>
            <div className="cup" title="Yes! I have vapour! Thanks for noticing! <3">
            <div className="top">
                <div className="vapour">
                    <span style={{"--i":1}}></span>
                    <span style={{"--i":3}}></span>
                    <span style={{"--i":16}}></span>
                    <span style={{"--i":5}}></span>
                    <span style={{"--i":13}}></span>
                    <span style={{"--i":20}}></span>
                    <span style={{"--i":6}}></span>
                    <span style={{"--i":7}}></span>
                    <span style={{"--i":10}}></span>
                    <span style={{"--i":8}}></span>
                    <span style={{"--i":17}}></span>
                    <span style={{"--i":11}}></span>
                    <span style={{"--i":12}}></span>
                    <span style={{"--i":14}}></span>
                    <span style={{"--i":2}}></span>
                    <span style={{"--i":9}}></span>
                    <span style={{"--i":15}}></span>
                    <span style={{"--i":4}}></span>
                    <span style={{"--i":19}}></span>
                    <span style={{"--i":18}}></span>
                </div>
                <div className="circle">
                    <div className="tea"></div>
                </div>
            </div>
            <div className="handle"></div>
            </div>
            </div>
        </div>
            <div className='TodoForm-buttonContainer'>
                <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCanceled} title="Come back to quest list">Take a break</button>
                <button type='submit'className='TodoForm-button TodoForm-button--add' title="Add a new Quest">New Quest</button>
            </div>


        </form>

    )

}

export {AllCompleted};