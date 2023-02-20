import React from "react";
import "./styles/LogoButtom.css"

function LogoButtom(){

    function onClickButtonLogo(){
        window.location.href = "https://gustavoaguilar82.github.io/async-landing/#projects-Section";
    }
    return(  
        <button className="LogoContainer"  title="Go back to my portfolio"
        onClick={onClickButtonLogo}><img src="https://i.imgur.com/7S6aTv2.png" alt="Logo" className="LogoButtom"></img></button>
    );
}

export {LogoButtom};
