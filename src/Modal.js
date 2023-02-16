import React from 'react';
import ReactDOM from 'react-dom';
//import { createPortal } from 'react-dom';
import './styles/Modal.css';
import './styles/index.css';

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="ModalBackGround">
            {children}
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };