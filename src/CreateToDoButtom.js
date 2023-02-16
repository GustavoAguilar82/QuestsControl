import React from "react";
import './styles/CreateTodoButton.css';

function CreateTodoButtom(props){
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState);
    }
    function despertar(){
    document.getElementById("nouse").classList.add("dog__nouse-despierto");                     document.getElementById("dog__head").classList.add("dog__head-despierto");
    document.getElementById("dog__ear-l").classList.add("dog__ear-l-despierto");
    document.getElementById("dog__ear-r").classList.add("dog__ear-r-despierto");
    document.getElementById("dog__head-c").classList.add("dog__head-c-despierto"); 
    document.getElementById("dog__snout").classList.add("dog__snout-despierto"); 
    document.getElementById("dog__eye-l").classList.add("dog__eye-despierto");
    document.getElementById("dog__eye-r").classList.add("dog__eye-despierto"); 
    document.getElementById("dog__body").classList.remove("dog__body-dormido"); 
    };


    function dormir(){
    document.getElementById("nouse").classList.remove("dog__nouse-despierto");                 document.getElementById("dog__head").classList.remove("dog__head-despierto");
    document.getElementById("dog__ear-l").classList.remove("dog__ear-l-despierto");
    document.getElementById("dog__ear-r").classList.remove("dog__ear-r-despierto");  
    document.getElementById("dog__head-c").classList.remove("dog__head-c-despierto");
    document.getElementById("dog__snout").classList.remove("dog__snout-despierto");
    document.getElementById("dog__eye-l").classList.remove("dog__eye-despierto");
    document.getElementById("dog__eye-r").classList.remove("dog__eye-despierto");
    document.getElementById("dog__body").classList.add("dog__body-dormido");
    }

    return(
        <button className="CreateTodoButton"  title="Add a new Quest"
        onClick={onClickButton} onMouseOver={despertar} onMouseOut={dormir}>+</button>
    );

 
}

export { CreateTodoButtom};


