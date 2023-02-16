import React from "react";
import ReactDOM from 'react-dom';
import './styles/Empty.css';

function Empty(){

    return ReactDOM.createPortal(
        <div className='MainEmpty'>
            <div className="p">
                <p id="subTitulo" className="p"> You can create a new one clicking the button +</p>
            </div>
            <div className="dog">
                <div className="dog__paws">
                <div className="dog__bl-leg leg">
                    <div className="dog__bl-paw paw"></div>
                    <div className="dog__bl-top top"></div>
                </div>
                <div className="dog__fl-leg leg">
                    <div className="dog__fl-paw paw"></div>
                    <div className="dog__fl-top top"></div>
                </div>
                <div className="dog__fr-leg leg">
                    <div className="dog__fr-paw paw"></div>
                    <div className="dog__fr-top top"></div>
                </div>
                </div>
                <div className="dog__body" id="dog__body">
                <div className="dog__tail"></div>
                </div>
                <div className="dog__head slow" id="dog__head" title="I'm just a cute dog">
                <div className="dog__snout slow" id="dog__snout">
                    <div className="dog__nose">
                    <div className="dog__nouse slow" id="nouse"></div>
                    </div>
                    <div className="dog__eyes">
                    <div className="dog__eye-l" id="dog__eye-l"></div>
                    <div className="dog__eye-r" id="dog__eye-r"></div>
                    </div>
                </div>
                </div>
                <div className="dog__head-c slow" id="dog__head-c">
                <div className="dog__ear-l slow" id="dog__ear-l"></div>
                <div className="dog__ear-r slow" id="dog__ear-r"></div>
                </div>
            </div>
        </div>,
        
        
        document.getElementById("empty")
    );
};

export {Empty}

/*
	Designed by: JOHN LEWIS
	Original image: https://www.behance.net/gallery/76965389/JOHN-LEWIS-Dog-gifs
    Adapted by: GUSTAVO AGUILAR
*/